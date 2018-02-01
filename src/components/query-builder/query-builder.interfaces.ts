export interface RuleSet {
  condition: string;
  rules: Array<RuleSet | Rule>;
}

export interface Rule {
  field: string;
  value?: any;
  operator?: string;
}

export interface Option {
  name: string;
  value: any;
}

export interface Field {
  name: string;
  type: string;
  nullable?: boolean;
  options?: Option[];
  operators?: string[];
  defaultValue?: any;
  defaultOperator?: any;
}

export interface LocalRuleMeta {
  ruleset: boolean;
  invalid: boolean;
}

export interface QueryBuilderConfig {
  fields: {[key: string]: Field};
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
  rule: Rule;
}

export interface FieldContext {
  changeField: (fieldName: string, rule: Rule) => void;
  fieldNames: string[];
  rule: Rule;
}

export interface ButtonGroupContext {
  addRule: () => void;
  addRuleset: () => void;
  removeRuleset: () => void;
  data: RuleSet;
}
