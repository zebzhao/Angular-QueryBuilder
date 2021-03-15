import {Pipe, PipeTransform, Query} from '@angular/core';
import {QueryBuilderConfig} from "./query-builder.interfaces";


@Pipe({name: 'expressionFormat',  pure: false})

export class QueryBuilderExpressionPipe implements PipeTransform {

  transform(query: Query, queryConfig: QueryBuilderConfig): string {
    return this.computed(query, queryConfig);

  }

  defineCondition(rule){
    return rule.condition ? rule.condition : rule.operator;
  }

  getInputType(config : QueryBuilderConfig, field: string, operator: string): string {
    if (config.getInputType) {
      return config.getInputType(field, operator);
    }

    if (!config.fields[field]) {
      throw new Error(`No configuration for field '${field}' could be found! Please add it to config.fields.`);
    }

    const type = config.fields[field].type;
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

  defineMultiselect(rule){
    let value = rule.value || [];
    return JSON.stringify(value);
  }

  defineString(rule){
    let value = rule.value || "";
    return JSON.stringify(value);
  }


  private defineDate(rule) {
    let value = rule.value || "";
    return JSON.stringify(value);
  }

  private defineNumber(rule) {

    if (typeof rule.value  === 'undefined'){
      return "?";
    }

    return rule.value;
  }

  private defineBoolean(rule) {
    let value = rule.value ? true : false;
    return JSON.stringify(value);
  }

  defineValue(rule, queryConfig : QueryBuilderConfig){

    let format = this.getInputType(queryConfig, rule.field, rule.operator);

    if (!format){
      return '';
    }

    switch (format){
      case 'number' : return this.defineNumber(rule)
      case 'boolean' : return this.defineBoolean(rule);
      case 'string' : return this.defineString(rule)
      case 'category' : return this.defineString(rule);
      case 'multiselect' : return this.defineMultiselect(rule);
      case 'date' : return this.defineDate(rule);
      default : return this.defineString(rule)
    }
  }

  computed = function (group, queryConfig) {
    let str = "";

    if (!group) {
      return str;
    }
    str += " (";

    let myMap = group.rules.map((rule) => {
      let newStr = "";
      if (rule.condition && rule.rules) {
        newStr = this.computed(rule, queryConfig);
      } else {
        newStr = [rule.field,this.defineCondition(rule), this.defineValue(rule, queryConfig)].join(" ");
      }
      return newStr;
    });
    str += myMap.join(" " +group.condition.toUpperCase()+ " ");
    str += ")";
    return str;
  };

}
