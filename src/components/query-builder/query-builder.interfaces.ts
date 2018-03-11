import { ValidationErrors } from '@angular/forms';

export interface RuleSet {
  condition: string;
  rules: Array<RuleSet | Rule>;
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
  entityName?: string;
  validator?: (rule: Rule, parent: RuleSet) => any | null;
}

export interface LocalRuleMeta {
  ruleset: boolean;
  invalid: boolean;
}

export interface EntityMap {
  entities: Entity[];
}

export interface Entity {
  name: string;
  description: string;
}

export interface QueryBuilderClassNames {
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
  entities?: Entity[];
  allowEmptyRulesets?: boolean;
  getOperators?: (field: string) => string[];
  getInputType?: (field: string, operator: string) => string;
  getOptions?: (field: string) => Option[];
  addRuleSet?: (parent: RuleSet) => void;
  addRule?: (parent: RuleSet) => void;
  removeRuleSet?: (ruleset: RuleSet, parent: RuleSet) => void;
  removeRule?: (rule: Rule, parent: RuleSet) => void;
}

export interface OperatorContext {
  operators: string[];
  $implicit: Rule;
}

export interface EntityContext {
  changeEntity: (entityName: string, rule: Rule) => void;
  entities: Entity[];
  $implicit: Rule;
}

export interface FieldContext {
  changeField: (fieldName: string, rule: Rule) => void;
  getFields: (entityName: string) => void;
  fields: Field[];
  $implicit: Rule;
}

export interface InputContext {
  options: Option[];
  field: Field;
  $implicit: Rule;
}

export interface ButtonGroupContext {
  addRule: () => void;
  addRuleSet: () => void;
  removeRuleSet: () => void;
  $implicit: RuleSet;
}

export interface RemoveButtonContext {
  removeRule: (rule: Rule) => void;
  $implicit: Rule;
}
