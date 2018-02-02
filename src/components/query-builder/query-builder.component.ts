import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { QueryOperatorDirective } from './query-operator.directive';
import { QueryFieldDirective } from './query-field.directive';
import { QuerySwitchGroupDirective } from './query-switch-group.directive';
import { QueryButtonGroupDirective } from './query-button-group.directive';
import { QueryInputDirective } from './query-input.directive';
import {
    ButtonGroupContext,
    Field,
    FieldContext,
    InputContext,
    LocalRuleMeta,
    OperatorContext,
    Option,
    QueryBuilderConfig,
    Rule,
    RuleSet,
} from './query-builder.interfaces';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ContentChildren,
    forwardRef,
    Input,
    OnChanges,
    OnInit,
    QueryList,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';

export const CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => QueryBuilderComponent),
  multi: true
};

@Component({
  selector: 'query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss'],
  providers: [CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryBuilderComponent implements OnInit, OnChanges, ControlValueAccessor {
  public disabled: boolean;
  public fieldValues: string[];
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
    time: ['=', '!=', '>', '>=', '<', '<='],
    date: ['=', '!=', '>', '>=', '<', '<='],
    category: ['=', '!='],
    boolean: ['=']
  };
  @Input() parentData: RuleSet;
  @Input() data: RuleSet = { condition: 'and', rules: [] };
  @Input() config: QueryBuilderConfig = { fields: {} };
  @Input() inputTypeTemplates: QueryList<QueryInputDirective>;

  @ContentChild(QueryButtonGroupDirective) buttonGroupTemplate: QueryButtonGroupDirective;
  @ContentChild(QuerySwitchGroupDirective) switchGroupTemplate: QuerySwitchGroupDirective;
  @ContentChild(QueryFieldDirective) fieldTemplate: QueryFieldDirective;
  @ContentChild(QueryOperatorDirective) operatorTemplate: QueryOperatorDirective;
  @ContentChildren(QueryInputDirective) inputTypes: QueryList<QueryInputDirective>;

  private defaultTemplateTypes: string[] = [
    'string', 'number', 'time', 'date', 'category', 'boolean', 'multiselect'];
  private defaultEmptyList: any[] = [];
  private operatorsCache: {[key: string]: string[]};
  private inputContextCache = new Map<Rule, InputContext>();
  private operatorContextCache = new Map<Rule, OperatorContext>();
  private fieldContextCache = new Map<Rule, FieldContext>();
  private buttonGroupContext: ButtonGroupContext;

  // For ControlValueAccessor interface
  private onChangeCallback: (value: any) => void;
  private onTouchedCallback: () => any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    const config = this.config;
    const data = this.data;

    if (typeof config === 'object') {
      this.fieldValues = Object.keys(config.fields);
      this.operatorsCache = {};
    } else {
      throw new Error('config must be a valid object');
    }

    if (typeof data !== 'object') {
      throw new Error('data must be a valid object');
    }
  }

  get value(): RuleSet {
    return this.data;
  }

  set value(value: RuleSet) {
    // When component is initialized without a formControl, null is passed to value
    this.data = value;
    this.changeDetectorRef.markForCheck();
    if (this.onChangeCallback) {
      this.onChangeCallback(value);
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  findTemplateForRule(rule: Rule): TemplateRef<any> {
    const type = this.getInputType(rule.field, rule.operator);
    if (type) {
      const queryInput = this.findQueryInput(type);
      if (queryInput) {
        return queryInput.template;
      } else {
        if (this.defaultTemplateTypes.indexOf(type) === -1) {
          console.warn(`Could not find template for field with type: ${type}`);
        }
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

  addRule(parent?: RuleSet): void {
    parent = parent || this.data;
    if (this.config.addRule) {
      return this.config.addRule(parent);
    } else {
      const fieldValue = this.fieldValues[0];
      const fieldObject = this.config.fields[fieldValue];
      parent.rules = parent.rules.concat([
        {
          field: fieldObject.value,
          operator: this.operatorMap[fieldObject.type][0]
        }
      ]);
    }
  }

  removeRule(rule: Rule, parent?: RuleSet): void {
    parent = parent || this.data;
    if (this.config.removeRule) {
      this.config.removeRule(rule, parent);
    } else {
      parent.rules = parent.rules.filter((r) => r !== rule);
    }
    this.inputContextCache.delete(rule);
    this.operatorContextCache.delete(rule);
    this.fieldContextCache.delete(rule);
  }

  addRuleSet(parent?: RuleSet): void {
    parent = parent || this.data;
    if (this.config.addRuleSet) {
      this.config.addRuleSet(parent);
    } else {
      parent.rules = parent.rules.concat([{condition: 'and', rules: []}]);
    }
  }

  removeRuleSet(ruleset?: RuleSet, parent?: RuleSet): void {
    ruleset = ruleset || this.data;
    parent = parent || this.parentData;
    if (this.config.removeRuleSet) {
      this.config.removeRuleSet(ruleset, parent);
    } else {
      parent.rules = parent.rules.filter((r) => r !== ruleset);
    }
  }

  changeField(fieldValue: string, rule: Rule): void {
    const field: Field = this.config.fields[fieldValue];

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

  getButtonGroupContext(): ButtonGroupContext {
    if (!this.buttonGroupContext) {
      this.buttonGroupContext = {
        addRule: this.addRule.bind(this),
        addRuleset: this.addRuleSet.bind(this),
        removeRuleset: this.removeRuleSet.bind(this),
        $implicit: this.data
      };
    }
    return this.buttonGroupContext;
  }

  getFieldContext(rule: Rule): FieldContext {
    if (!this.fieldContextCache.has(rule)) {
      this.fieldContextCache.set(rule, {
        changeField: this.changeField.bind(this),
        fields: this.fieldValues.map((value) => this.config.fields[value]),
        $implicit: rule
      });
    }
    return this.fieldContextCache.get(rule);
  }

  getOperatorContext(rule: Rule): OperatorContext {
    if (!this.operatorContextCache.has(rule)) {
      this.operatorContextCache.set(rule, {
        operators: this.getOperators(rule.field),
        $implicit: rule
      });
    }
    return this.operatorContextCache.get(rule);
  }

  getInputContext(rule: Rule): InputContext {
    if (!this.inputContextCache.has(rule)) {
      this.inputContextCache.set(rule, {
        options: this.getOptions(rule.field),
        field: this.config.fields[rule.field],
        $implicit: rule
      });
    }
    return this.inputContextCache.get(rule);
  }
}
