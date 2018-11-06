import { ValidationErrors } from '@angular/forms';

export interface RuleSet {
  condition: string;
  rules: Array<RuleSet | Rule>;
  collapsed?: boolean;
}

export interface Rule {
  field: string;
  value?: any;
  operator?: string;
  entity?: string;
}

export interface Option {
  name: string;
  value: any;
}

export interface FieldMap {
  [key: string]: Field;
}

export interface Field {
  name: string;
  value?: string;
  type: string;
  nullable?: boolean;
  options?: Option[];
  operators?: string[];
  defaultValue?: any;
  defaultOperator?: any;
  entity?: string;
  validator?: (rule: Rule, parent: RuleSet) => any | null;
}

export interface LocalRuleMeta {
  ruleset: boolean;
  invalid: boolean;
}

export interface EntityMap {
  [key: string]: Entity;
}

export interface Entity {
  name: string;
  value?: string;
  defaultField?: any;
}

export interface QueryBuilderClassNames {
  arrowIconButton?: string;
  arrowIcon?: string;
  removeIcon?: string;
  addIcon?: string;
  button?: string;
  buttonGroup?: string;
  removeButton?: string;
  removeButtonSize?: string;
  switchRow?: string;
  switchGroup?: string;
  switchLabel?: string;
  switchRadio?: string;
  switchControl?: string;
  rightAlign?: string;
  transition?: string;
  collapsed?: string;
  treeContainer?: string;
  tree?: string;
  row?: string;
  connector?: string;
  rule?: string;
  ruleSet?: string;
  invalidRuleSet?: string;
  emptyWarning?: string;
  fieldControl?: string;
  fieldControlSize?: string;
  entityControl?: string;
  entityControlSize?: string;
  operatorControl?: string;
  operatorControlSize?: string;
  inputControl?: string;
  inputControlSize?: string;
}

export interface QueryBuilderConfig {
  fields: FieldMap;
  entities?: EntityMap;
  allowEmptyRulesets?: boolean;
  getOperators?: (fieldName: string, field: Field) => string[];
  getInputType?: (field: string, operator: string) => string;
  getOptions?: (field: string) => Option[];
  addRuleSet?: (parent: RuleSet) => void;
  addRule?: (parent: RuleSet) => void;
  removeRuleSet?: (ruleset: RuleSet, parent: RuleSet) => void;
  removeRule?: (rule: Rule, parent: RuleSet) => void;
  coerceValueForOperator?: (operator: string, value: any, rule: Rule) => any;
}

export interface SwitchGroupContext {
  onChange: (conditionValue: string) => void;
  getDisabledState: () => boolean;
  $implicit: RuleSet;
}

export interface EmptyWarningContext {
  getDisabledState: () => boolean;
  message: string;
  $implicit: RuleSet;
}

export interface ArrowIconContext {
  getDisabledState: () => boolean;
  $implicit: RuleSet;
}

export interface EntityContext {
  onChange: (entityValue: string, rule: Rule) => void;
  getDisabledState: () => boolean;
  entities: Entity[];
  $implicit: Rule;
}

export interface FieldContext {
  onChange: (fieldValue: string, rule: Rule) => void;
  getFields: (entityName: string) => void;
  getDisabledState: () => boolean;
  fields: Field[];
  $implicit: Rule;
}

export interface OperatorContext {
  onChange: () => void;
  getDisabledState: () => boolean;
  operators: string[];
  $implicit: Rule;
}

export interface InputContext {
  onChange: () => void;
  getDisabledState: () => boolean;
  options: Option[];
  field: Field;
  $implicit: Rule;
}

export interface ButtonGroupContext {
  addRule: () => void;
  addRuleSet: () => void;
  removeRuleSet: () => void;
  getDisabledState: () => boolean;
  $implicit: RuleSet;
}

export interface RemoveButtonContext {
  removeRule: (rule: Rule) => void;
  getDisabledState: () => boolean;
  $implicit: Rule;
}
