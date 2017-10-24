export interface RuleSet {
  condition: string
  rules: (RuleSet | Rule)[]
}

export interface Rule {
  field: string
  value?: any
  operator?: string
}

export interface Option {
  name: string;
  value: any;
}

export interface Field {
  name: string
  type: string
  nullable?: boolean
  options?: Option[]
}

export interface QueryBuilderConfig {
  fields: {[key: string]: Field}
  allowEmptyRulesets?: boolean
  getOperators?: (field: string) => string[]
  getInputType?: (field: string, operator: string) => string
  getOptions?: (field: string) => Option[]
  addRuleSet?: (parent: RuleSet) => void
  addRule?: (parent: RuleSet) => void
  removeRuleSet?: (ruleset: RuleSet, parent: RuleSet) => void
  removeRule?: (rule: Rule, parent: RuleSet) => void
}
