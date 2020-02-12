import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { QueryOperatorDirective } from './query-operator.directive';
import { QueryFieldDirective } from './query-field.directive';
import { QueryEntityDirective } from './query-entity.directive';
import { QuerySwitchGroupDirective } from './query-switch-group.directive';
import { QueryButtonGroupDirective } from './query-button-group.directive';
import { QueryInputDirective } from './query-input.directive';
import { QueryRemoveButtonDirective } from './query-remove-button.directive';
import { QueryEmptyWarningDirective } from './query-empty-warning.directive';
import { QueryArrowIconDirective } from './query-arrow-icon.directive';
import {
  ButtonGroupContext,
  Entity,
  Field,
  SwitchGroupContext,
  EntityContext,
  FieldContext,
  InputContext,
  LocalRuleMeta,
  OperatorContext,
  Option,
  QueryBuilderClassNames,
  QueryBuilderConfig,
  RemoveButtonContext,
  ArrowIconContext,
  Rule,
  RuleSet,
  EmptyWarningContext,
} from './query-builder.interfaces';
import {
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
  ViewChild,
  ElementRef
} from '@angular/core';

export const CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => QueryBuilderComponent),
  multi: true
};

export const VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => QueryBuilderComponent),
  multi: true
};

@Component({
  selector: 'query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.scss'],
  providers: [CONTROL_VALUE_ACCESSOR, VALIDATOR]
})
export class QueryBuilderComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
  public fields: Field[];
  public filterFields: Field[];
  public entities: Entity[];
  public defaultClassNames: QueryBuilderClassNames = {
    arrowIconButton: 'q-arrow-icon-button',
    arrowIcon: 'q-icon q-arrow-icon',
    removeIcon: 'q-icon q-remove-icon',
    addIcon: 'q-icon q-add-icon',
    button: 'q-button',
    buttonGroup: 'q-button-group',
    removeButton: 'q-remove-button',
    switchGroup: 'q-switch-group',
    switchLabel: 'q-switch-label',
    switchRadio: 'q-switch-radio',
    rightAlign: 'q-right-align',
    transition: 'q-transition',
    collapsed: 'q-collapsed',
    treeContainer: 'q-tree-container',
    tree: 'q-tree',
    row: 'q-row',
    connector: 'q-connector',
    rule: 'q-rule',
    ruleSet: 'q-ruleset',
    invalidRuleSet: 'q-invalid-ruleset',
    emptyWarning: 'q-empty-warning',
    fieldControl: 'q-field-control',
    fieldControlSize: 'q-control-size',
    entityControl: 'q-entity-control',
    entityControlSize: 'q-control-size',
    operatorControl: 'q-operator-control',
    operatorControlSize: 'q-control-size',
    inputControl: 'q-input-control',
    inputControlSize: 'q-control-size'
  };
  public defaultOperatorMap: { [key: string]: string[] } = {
    string: ['=', '!=', 'contains', 'like'],
    number: ['=', '!=', '>', '>=', '<', '<='],
    time: ['=', '!=', '>', '>=', '<', '<='],
    date: ['=', '!=', '>', '>=', '<', '<='],
    category: ['=', '!=', 'in', 'not in'],
    boolean: ['=']
  };
  @Input() disabled: boolean;
  @Input() data: RuleSet = { condition: 'and', rules: [] };

  // For ControlValueAccessor interface
  public onChangeCallback: () => void;
  public onTouchedCallback: () => any;

  @Input() allowRuleset: boolean = true;
  @Input() allowCollapse: boolean = false;
  @Input() emptyMessage: string = 'A ruleset cannot be empty. Please add a rule or remove it all together.';
  @Input() classNames: QueryBuilderClassNames;
  @Input() operatorMap: { [key: string]: string[] };
  @Input() parentValue: RuleSet;
  @Input() config: QueryBuilderConfig = { fields: {} };
  @Input() parentArrowIconTemplate: QueryArrowIconDirective;
  @Input() parentInputTemplates: QueryList<QueryInputDirective>;
  @Input() parentOperatorTemplate: QueryOperatorDirective;
  @Input() parentFieldTemplate: QueryFieldDirective;
  @Input() parentEntityTemplate: QueryEntityDirective;
  @Input() parentSwitchGroupTemplate: QuerySwitchGroupDirective;
  @Input() parentButtonGroupTemplate: QueryButtonGroupDirective;
  @Input() parentRemoveButtonTemplate: QueryRemoveButtonDirective;
  @Input() parentEmptyWarningTemplate: QueryEmptyWarningDirective;
  @Input() parentChangeCallback: () => void;
  @Input() parentTouchedCallback: () => void;
  @Input() persistValueOnFieldChange: boolean = false;

  @ViewChild('treeContainer', {static: true}) treeContainer: ElementRef;

  @ContentChild(QueryButtonGroupDirective) buttonGroupTemplate: QueryButtonGroupDirective;
  @ContentChild(QuerySwitchGroupDirective) switchGroupTemplate: QuerySwitchGroupDirective;
  @ContentChild(QueryFieldDirective) fieldTemplate: QueryFieldDirective;
  @ContentChild(QueryEntityDirective) entityTemplate: QueryEntityDirective;
  @ContentChild(QueryOperatorDirective) operatorTemplate: QueryOperatorDirective;
  @ContentChild(QueryRemoveButtonDirective) removeButtonTemplate: QueryRemoveButtonDirective;
  @ContentChild(QueryEmptyWarningDirective) emptyWarningTemplate: QueryEmptyWarningDirective;
  @ContentChildren(QueryInputDirective) inputTemplates: QueryList<QueryInputDirective>;
  @ContentChild(QueryArrowIconDirective) arrowIconTemplate: QueryArrowIconDirective;

  private defaultTemplateTypes: string[] = [
    'string', 'number', 'time', 'date', 'category', 'boolean', 'multiselect'];
  private defaultPersistValueTypes: string[] = [
    'string', 'number', 'time', 'date', 'boolean'];
  private defaultEmptyList: any[] = [];
  private operatorsCache: { [key: string]: string[] };
  private inputContextCache = new Map<Rule, InputContext>();
  private operatorContextCache = new Map<Rule, OperatorContext>();
  private fieldContextCache = new Map<Rule, FieldContext>();
  private entityContextCache = new Map<Rule, EntityContext>();
  private removeButtonContextCache = new Map<Rule, RemoveButtonContext>();
  private buttonGroupContext: ButtonGroupContext;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  // ----------OnInit Implementation----------

  ngOnInit() { }

  // ----------OnChanges Implementation----------

  ngOnChanges(changes: SimpleChanges) {
    const config = this.config;
    const type = typeof config;
    if (type === 'object') {
      this.fields = Object.keys(config.fields).map((value) => {
        const field = config.fields[value];
        field.value = field.value || value;
        return field;
      });
      if (config.entities) {
        this.entities = Object.keys(config.entities).map((value) => {
          const entity = config.entities[value];
          entity.value = entity.value || value;
          return entity;
        });
      } else {
        this.entities = null;
      }
      this.operatorsCache = {};
    } else {
      throw new Error(`Expected 'config' must be a valid object, got ${type} instead.`);
    }
  }

  // ----------Validator Implementation----------

  validate(control: AbstractControl): ValidationErrors | null {
    const errors: { [key: string]: any } = {};
    const ruleErrorStore = [];
    let hasErrors = false;

    if (!this.config.allowEmptyRulesets && this.checkEmptyRuleInRuleset(this.data)) {
      errors.empty = 'Empty rulesets are not allowed.';
      hasErrors = true;
    }

    this.validateRulesInRuleset(this.data, ruleErrorStore);

    if (ruleErrorStore.length) {
      errors.rules = ruleErrorStore;
      hasErrors = true;
    }
    return hasErrors ? errors : null;
  }

  // ----------ControlValueAccessor Implementation----------

  @Input()
  get value(): RuleSet {
    return this.data;
  }
  set value(value: RuleSet) {
    // When component is initialized without a formControl, null is passed to value
    this.data = value || { condition: 'and', rules: [] };
    this.handleDataChange();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = () => fn(this.data);
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = () => fn(this.data);
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.changeDetectorRef.detectChanges();
  }

  // ----------END----------

  getDisabledState = (): boolean => {
    return this.disabled;
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
    const templates = this.parentInputTemplates || this.inputTemplates;
    return templates.find((item) => item.queryInputType === type);
  }

  getOperators(field: string): string[] {
    if (this.operatorsCache[field]) {
      return this.operatorsCache[field];
    }
    let operators = this.defaultEmptyList;
    const fieldObject = this.config.fields[field];

    if (this.config.getOperators) {
      return this.config.getOperators(field, fieldObject);
    }

    const type = fieldObject.type;

    if (fieldObject && fieldObject.operators) {
      operators = fieldObject.operators;
    } else if (type) {
      operators = (this.operatorMap && this.operatorMap[type]) || this.defaultOperatorMap[type] || this.defaultEmptyList;
      if (operators.length === 0) {
        console.warn(
          `No operators found for field '${field}' with type ${fieldObject.type}. ` +
          `Please define an 'operators' property on the field or use the 'operatorMap' binding to fix this.`);
      }
      if (fieldObject.nullable) {
        operators = operators.concat(['is null', 'is not null']);
      }
    } else {
      console.warn(`No 'type' property found on field: '${field}'`);
    }

    // Cache reference to array object, so it won't be computed next time and trigger a rerender.
    this.operatorsCache[field] = operators;
    return operators;
  }

  getFields(entity: string): Field[] {
    if (this.entities && entity) {
      return this.fields.filter((field) => {
        return field && field.entity === entity;
      });
    } else {
      return this.fields;
    }
  }

  getInputType(field: string, operator: string): string {
    if (this.config.getInputType) {
      return this.config.getInputType(field, operator);
    }

    if (!this.config.fields[field]) {
      throw new Error(`No configuration for field '${field}' could be found! Please add it to config.fields.`);
    }

    const type = this.config.fields[field].type;
    switch (operator) {
      case 'is null':
      case 'is not null':
        return null;  // No displayed component
      case 'in':
      case 'not in':
        return type === 'category' || type === 'boolean' ? 'multiselect' : type;
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

  getClassNames(...args): string {
    const clsLookup = this.classNames ? this.classNames : this.defaultClassNames;
    const classNames = args.map((id) => clsLookup[id] || this.defaultClassNames[id]).filter((c) => !!c);
    return classNames.length ? classNames.join(' ') : null;
  }

  getDefaultField(entity: Entity): Field {
    if (!entity) {
      return null;
    } else if (entity.defaultField !== undefined) {
      return this.getDefaultValue(entity.defaultField);
    } else {
      const entityFields = this.fields.filter((field) => {
        return field && field.entity === entity.value;
      });
      if (entityFields && entityFields.length) {
        return entityFields[0];
      } else {
        console.warn(`No fields found for entity '${entity.name}'. ` +
          `A 'defaultOperator' is also not specified on the field config. Operator value will default to null.`);
        return null;
      }
    }
  }

  getDefaultOperator(field: Field): string {
    if (field && field.defaultOperator !== undefined) {
      return this.getDefaultValue(field.defaultOperator);
    } else {
      const operators = this.getOperators(field.value);
      if (operators && operators.length) {
        return operators[0];
      } else {
        console.warn(`No operators found for field '${field.value}'. ` +
          `A 'defaultOperator' is also not specified on the field config. Operator value will default to null.`);
        return null;
      }
    }
  }

  addRule(parent?: RuleSet): void {
    if (this.disabled) {
      return;
    }

    parent = parent || this.data;
    if (this.config.addRule) {
      this.config.addRule(parent);
    } else {
      const field = this.fields[0];
      parent.rules = parent.rules.concat([{
        field: field.value,
        operator: this.getDefaultOperator(field),
        value: this.getDefaultValue(field.defaultValue),
        entity: field.entity
      }]);
    }

    this.handleTouched();
    this.handleDataChange();
  }

  removeRule(rule: Rule, parent?: RuleSet): void {
    if (this.disabled) {
      return;
    }

    parent = parent || this.data;
    if (this.config.removeRule) {
      this.config.removeRule(rule, parent);
    } else {
      parent.rules = parent.rules.filter((r) => r !== rule);
    }
    this.inputContextCache.delete(rule);
    this.operatorContextCache.delete(rule);
    this.fieldContextCache.delete(rule);
    this.entityContextCache.delete(rule);
    this.removeButtonContextCache.delete(rule);

    this.handleTouched();
    this.handleDataChange();
  }

  addRuleSet(parent?: RuleSet): void {
    if (this.disabled) {
      return;
    }

    parent = parent || this.data;
    if (this.config.addRuleSet) {
      this.config.addRuleSet(parent);
    } else {
      parent.rules = parent.rules.concat([{ condition: 'and', rules: [] }]);
    }

    this.handleTouched();
    this.handleDataChange();
  }

  removeRuleSet(ruleset?: RuleSet, parent?: RuleSet): void {
    if (this.disabled) {
      return;
    }

    ruleset = ruleset || this.data;
    parent = parent || this.parentValue;
    if (this.config.removeRuleSet) {
      this.config.removeRuleSet(ruleset, parent);
    } else {
      parent.rules = parent.rules.filter((r) => r !== ruleset);
    }

    this.handleTouched();
    this.handleDataChange();
  }

  transitionEnd(e: Event): void {
    this.treeContainer.nativeElement.style.maxHeight = null;
  }

  toggleCollapse(): void {
    this.computedTreeContainerHeight();
    setTimeout(() => {
      this.data.collapsed = !this.data.collapsed;
    }, 100);
  }

  computedTreeContainerHeight(): void {
    const nativeElement: HTMLElement = this.treeContainer.nativeElement;
    if (nativeElement && nativeElement.firstElementChild) {
      nativeElement.style.maxHeight = (nativeElement.firstElementChild.clientHeight + 8) + 'px';
    }
  }

  changeCondition(value: string): void {
    if (this.disabled) {
      return;
    }

    this.data.condition = value;
    this.handleTouched();
    this.handleDataChange();
  }

  changeOperator(rule: Rule): void {
    if (this.disabled) {
      return;
    }

    if (this.config.coerceValueForOperator) {
      rule.value = this.config.coerceValueForOperator(rule.operator, rule.value, rule);
    } else {
      rule.value = this.coerceValueForOperator(rule.operator, rule.value, rule);
    }

    this.handleTouched();
    this.handleDataChange();
  }

  coerceValueForOperator(operator: string, value: any, rule: Rule): any {
    const inputType: string = this.getInputType(rule.field, operator);
    if (inputType === 'multiselect' && !Array.isArray(value)) {
      return [value];
    }
    return value;
  }

  changeInput(): void {
    if (this.disabled) {
      return;
    }

    this.handleTouched();
    this.handleDataChange();
  }

  changeField(fieldValue: string, rule: Rule): void {
    if (this.disabled) {
      return;
    }

    const inputContext = this.inputContextCache.get(rule);
    const currentField = inputContext && inputContext.field;

    const nextField: Field = this.config.fields[fieldValue];

    const nextValue = this.calculateFieldChangeValue(
      currentField, nextField, rule.value);

    if (nextValue !== undefined) {
      rule.value = nextValue;
    } else {
      delete rule.value;
    }

    rule.operator = this.getDefaultOperator(nextField);

    // Create new context objects so templates will automatically update
    this.inputContextCache.delete(rule);
    this.operatorContextCache.delete(rule);
    this.fieldContextCache.delete(rule);
    this.entityContextCache.delete(rule);
    this.getInputContext(rule);
    this.getFieldContext(rule);
    this.getOperatorContext(rule);
    this.getEntityContext(rule);

    this.handleTouched();
    this.handleDataChange();
  }

  changeEntity(entityValue: string, rule: Rule, index: number, data: RuleSet): void {
    if (this.disabled) {
      return;
    }

    const entity: Entity = this.entities.find((e) => e.value === entityValue);
    const defaultField: Field = this.getDefaultField(entity);
    data.rules[index] = {
      ...rule,
      field: defaultField.value
    };
    if (defaultField) {
      this.changeField(defaultField.value, {
        ...rule,
        field: defaultField.value
      });
    } else {
      this.handleTouched();
      this.handleDataChange();
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

  getOperatorTemplate(): TemplateRef<any> {
    const t = this.parentOperatorTemplate || this.operatorTemplate;
    return t ? t.template : null;
  }

  getFieldTemplate(): TemplateRef<any> {
    const t = this.parentFieldTemplate || this.fieldTemplate;
    return t ? t.template : null;
  }

  getEntityTemplate(): TemplateRef<any> {
    const t = this.parentEntityTemplate || this.entityTemplate;
    return t ? t.template : null;
  }

  getArrowIconTemplate(): TemplateRef<any> {
    const t = this.parentArrowIconTemplate || this.arrowIconTemplate;
    return t ? t.template : null;
  }

  getButtonGroupTemplate(): TemplateRef<any> {
    const t = this.parentButtonGroupTemplate || this.buttonGroupTemplate;
    return t ? t.template : null;
  }

  getSwitchGroupTemplate(): TemplateRef<any> {
    const t = this.parentSwitchGroupTemplate || this.switchGroupTemplate;
    return t ? t.template : null;
  }

  getRemoveButtonTemplate(): TemplateRef<any> {
    const t = this.parentRemoveButtonTemplate || this.removeButtonTemplate;
    return t ? t.template : null;
  }

  getEmptyWarningTemplate(): TemplateRef<any> {
    const t = this.parentEmptyWarningTemplate || this.emptyWarningTemplate;
    return t ? t.template : null;
  }

  getQueryItemClassName(local: LocalRuleMeta): string {
    let cls = this.getClassNames('row', 'connector', 'transition');
    cls += ' ' + this.getClassNames(local.ruleset ? 'ruleSet' : 'rule');
    if (local.invalid) {
      cls += ' ' + this.getClassNames('invalidRuleSet');
    }
    return cls;
  }

  getButtonGroupContext(): ButtonGroupContext {
    if (!this.buttonGroupContext) {
      this.buttonGroupContext = {
        addRule: this.addRule.bind(this),
        addRuleSet: this.allowRuleset && this.addRuleSet.bind(this),
        removeRuleSet: this.allowRuleset && this.parentValue && this.removeRuleSet.bind(this),
        getDisabledState: this.getDisabledState,
        $implicit: this.data
      };
    }
    return this.buttonGroupContext;
  }

  getRemoveButtonContext(rule: Rule): RemoveButtonContext {
    if (!this.removeButtonContextCache.has(rule)) {
      this.removeButtonContextCache.set(rule, {
        removeRule: this.removeRule.bind(this),
        getDisabledState: this.getDisabledState,
        $implicit: rule
      });
    }
    return this.removeButtonContextCache.get(rule);
  }

  getFieldContext(rule: Rule): FieldContext {
    if (!this.fieldContextCache.has(rule)) {
      this.fieldContextCache.set(rule, {
        onChange: this.changeField.bind(this),
        getFields: this.getFields.bind(this),
        getDisabledState: this.getDisabledState,
        fields: this.fields,
        $implicit: rule
      });
    }
    return this.fieldContextCache.get(rule);
  }

  getEntityContext(rule: Rule): EntityContext {
    if (!this.entityContextCache.has(rule)) {
      this.entityContextCache.set(rule, {
        onChange: this.changeEntity.bind(this),
        getDisabledState: this.getDisabledState,
        entities: this.entities,
        $implicit: rule
      });
    }
    return this.entityContextCache.get(rule);
  }

  getSwitchGroupContext(): SwitchGroupContext {
    return {
      onChange: this.changeCondition.bind(this),
      getDisabledState: this.getDisabledState,
      $implicit: this.data
    };
  }

  getArrowIconContext(): ArrowIconContext {
    return {
      getDisabledState: this.getDisabledState,
      $implicit: this.data
    };
  }

  getEmptyWarningContext(): EmptyWarningContext {
    return {
      getDisabledState: this.getDisabledState,
      message: this.emptyMessage,
      $implicit: this.data
    };
  }

  getOperatorContext(rule: Rule): OperatorContext {
    if (!this.operatorContextCache.has(rule)) {
      this.operatorContextCache.set(rule, {
        onChange: this.changeOperator.bind(this),
        getDisabledState: this.getDisabledState,
        operators: this.getOperators(rule.field),
        $implicit: rule
      });
    }
    return this.operatorContextCache.get(rule);
  }

  getInputContext(rule: Rule): InputContext {
    if (!this.inputContextCache.has(rule)) {
      this.inputContextCache.set(rule, {
        onChange: this.changeInput.bind(this),
        getDisabledState: this.getDisabledState,
        options: this.getOptions(rule.field),
        field: this.config.fields[rule.field],
        $implicit: rule
      });
    }
    return this.inputContextCache.get(rule);
  }

  private calculateFieldChangeValue(
    currentField: Field,
    nextField: Field,
    currentValue: any
  ): any {

    if (this.config.calculateFieldChangeValue != null) {
      return this.config.calculateFieldChangeValue(
        currentField, nextField, currentValue);
    }

    const canKeepValue = () => {
      if (currentField == null || nextField == null) {
        return false;
      }
      return currentField.type === nextField.type
        && this.defaultPersistValueTypes.indexOf(currentField.type) !== -1;
    };

    if (this.persistValueOnFieldChange && canKeepValue()) {
      return currentValue;
    }

    if (nextField && nextField.defaultValue !== undefined) {
      return this.getDefaultValue(nextField.defaultValue);
    }

    return undefined;
  }

  private checkEmptyRuleInRuleset(ruleset: RuleSet): boolean {
    if (!ruleset || !ruleset.rules || ruleset.rules.length === 0) {
      return true;
    } else {
      return ruleset.rules.some((item: RuleSet) => {
        if (item.rules) {
          return this.checkEmptyRuleInRuleset(item);
        } else {
          return false;
        }
      });
    }
  }

  private validateRulesInRuleset(ruleset: RuleSet, errorStore: any[]) {
    if (ruleset && ruleset.rules && ruleset.rules.length > 0) {
      ruleset.rules.forEach((item) => {
        if ((item as RuleSet).rules) {
          return this.validateRulesInRuleset(item as RuleSet, errorStore);
        } else if ((item as Rule).field) {
          const field = this.config.fields[(item as Rule).field];
          if (field && field.validator && field.validator.apply) {
            const error = field.validator(item as Rule, ruleset);
            if (error != null) {
              errorStore.push(error);
            }
          }
        }
      });
    }
  }

  private handleDataChange(): void {
    this.changeDetectorRef.markForCheck();
    if (this.onChangeCallback) {
      this.onChangeCallback();
    }
    if (this.parentChangeCallback) {
      this.parentChangeCallback();
    }
  }

  private handleTouched(): void {
    if (this.onTouchedCallback) {
      this.onTouchedCallback();
    }
    if (this.parentTouchedCallback) {
      this.parentTouchedCallback();
    }
  }
}
