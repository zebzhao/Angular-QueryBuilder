import { QueryOperatorDirective } from './query-operator.directive';
import { QueryFieldDirective } from './query-field.directive';
import { QuerySwitchDirective } from '../../../tmp/src-inlined/components/query-builder/query-switch.directive';
import { QuerySwitchGroupDirective } from '../../../tmp/src-inlined/components/query-builder/query-switch-group.directive';
import { QueryButtonGroupDirective } from './query-button-group.directive';
import { QueryInputDirective } from './query-input.directive';
import {
  Field,
  Option,
  QueryBuilderConfig,
  Rule,
  RuleSet,
  LocalRuleMeta
} from './query-builder.interfaces';
import {
    Component,
    ContentChild,
    ContentChildren,
    Input,
    OnChanges,
    OnInit,
    QueryList,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';

@Component({
  selector: 'query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss']
})
export class QueryBuilderComponent implements OnInit, OnChanges {
  public fieldNames: string[];
  public defaultClassNames: {[key: string]: string} = {
    removeIcon: 'q-icon q-remove-icon',
    addIcon: 'q-icon q-add-icon',
    button: 'q-button',
    buttonGroup: 'q-button-group',
    switchGroup: 'q-switch-group',
    queryTree: 'q-tree',
    queryItem: 'q-item',
    queryRule: 'q-rule',
    queryRuleSet: 'q-ruleset',
    invalidRuleset: 'q-invalid-ruleset',
    emptyWarning: 'q-empty-warning',
    fieldControl: 'q-field-control',
    operatorControl: 'q-operator-control',
    inputControl: 'q-input-control'
  };

  @Input() allowRuleset: boolean = true;
  @Input() classNames: {[key: string]: string};
  @Input() operatorMap: {[key: string]: string[]} = {
    string: ['=', '!=', 'contains', 'like'],
    number: ['=', '!=', '>', '>=', '<', '<='],
    category: ['=', '!='],
    boolean: ['=']
  };
  @Input() parentData: RuleSet;
  @Input() data: RuleSet = { condition: 'and', rules: [] };
  @Input() config: QueryBuilderConfig = { fields: {} };
  @Input() inputTypeTemplates: QueryList<QueryInputDirective>;

  @ContentChild(QueryButtonGroupDirective) buttonGroupTemplate: QueryButtonGroupDirective;
  @ContentChild(QuerySwitchGroupDirective) switchGroupTemplate: QuerySwitchDirective;
  @ContentChild(QueryFieldDirective) fieldTemplate: QueryFieldDirective;
  @ContentChild(QueryOperatorDirective) operatorTemplate: QueryOperatorDirective;
  @ContentChildren(QueryInputDirective) inputTypes: QueryList<QueryInputDirective>;

  private defaultEmptyList: any[] = [];
  private operatorsCache: {[key: string]: string[]};

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const config = this.config;
    const data = this.data;

    if (typeof config === 'object') {
      this.fieldNames = Object.keys(config.fields);
      this.operatorsCache = {};
    } else {
      throw new Error('config must be a valid object');
    }

    if (typeof data !== 'object') {
      throw new Error('data must be a valid object');
    }
  }

  findTemplateForRule(rule: Rule): TemplateRef<any> {
    const type = this.getInputType(rule.field, rule.operator);
    if (type) {
      const queryInput = this.findQueryInput(type);
      if (queryInput) {
        return queryInput.template;
      } else {
        console.warn(`Could not find template for field with type: ${type}`);
        return null;
      }
    }
  }

  findQueryInput(type: string): QueryInputDirective {
    const templates = this.inputTypeTemplates || this.inputTypes;
    return templates.find((item) => item.queryInputType === type);
  }

  getOperators(field: string): string[] {
    if (this.operatorsCache[field]) {
      return this.operatorsCache[field];
    }
    let operators = this.defaultEmptyList;
    if (this.config.getOperators) {
      operators = this.config.getOperators(field);
    }
    const fieldObject = this.config.fields[field];
    const type = fieldObject.type;

    if (fieldObject && fieldObject.operators) {
      operators = fieldObject.operators;
    } else if (type && this.operatorMap[type]) {
      operators = this.operatorMap[type];
    }

    if (fieldObject.options) {
      operators = operators.concat(['in', 'not in']);
    }
    if (fieldObject.nullable) {
      operators = operators.concat(['is null', 'is not null']);
    }
    // Cache reference to array object, so it won't be computed next time and trigger a rerender.
    this.operatorsCache[field] = operators;
    return operators;
  }

  getInputType(field: string, operator: string): string {
    if (this.config.getInputType) {
      return this.config.getInputType(field, operator);
    }
    const type = this.config.fields[field].type;
    switch (operator) {
      case 'is null':
      case 'is not null':
        return null;  // No displayed component
      case 'in':
      case 'not in':
        return 'multiselect';
      default:
        return type;
    }
  }

  getOptions(field: string): Option[] {
    if (this.config.getOptions) {
      return this.config.getOptions(field);
    }
    return this.config.fields[field].options || this.defaultEmptyList;
  }

  getClassName(id: string) {
    const cls = this.classNames ? this.classNames[id] : null;
    return cls != null ? cls : this.defaultClassNames[id];
  }

  addRule(parent: RuleSet): void {
    if (this.config.addRule) {
      return this.config.addRule(parent);
    } else {
      const field = this.fieldNames[0];
      const fieldObject = this.config.fields[field];
      parent.rules = parent.rules.concat([
        {
          field: field,
          operator: this.operatorMap[fieldObject.type][0]
        }
      ]);
    }
  }

  removeRule(rule: Rule, parent: RuleSet): void {
    if (this.config.removeRule) {
      this.config.removeRule(rule, parent);
    } else {
      parent.rules = parent.rules.filter((r) => r !== rule);
    }
  }

  addRuleSet(parent: RuleSet): void {
    if (this.config.addRuleSet) {
      this.config.addRuleSet(parent);
    } else {
      parent.rules = parent.rules.concat([{condition: 'and', rules: []}]);
    }
  }

  removeRuleSet(ruleset: RuleSet, parent: RuleSet): void {
    if (this.config.removeRuleSet) {
      this.config.removeRuleSet(ruleset, parent);
    } else {
      parent.rules = parent.rules.filter((r) => r !== ruleset);
    }
  }

  onFieldChange(fieldName: string, rule: Rule): void {
    const field: Field = this.config.fields[fieldName];

    if (field && field.defaultValue !== undefined) {
      rule.value = this.getDefaultValue(field.defaultValue);
    } else {
      delete rule.value;
    }
    if (field && field.defaultOperator !== undefined) {
      rule.operator = this.getDefaultValue(field.defaultOperator);
    } else {
      rule.operator = this.getOperators(rule.field)[0];
    }
  }

  getDefaultValue(defaultValue: any): any {
    switch (typeof defaultValue) {
      case 'function':
        return defaultValue();
      default:
        return defaultValue;
    }
  }

  getQueryItemClassName(local: LocalRuleMeta): string {
    let cls = this.getClassName('queryItem');
    cls += ' ' + this.getClassName(local.ruleset ? 'queryRuleSet' : 'queryRule');
    if (local.invalid) {
      cls += ' ' + this.getClassName('invalidRuleset');
    }
    return cls;
  }
}
