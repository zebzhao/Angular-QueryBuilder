# Angular-QueryBuilder
A modernized Angular 4+ query builder based on jquery QueryBuilder.

# Getting Started

## Install
`npm install angular2-query-builder`

## Demo
Play with the [demo here](https://zebzhao.github.io/Angular-QueryBuilder/demo/).

[See the Plunker](https://plnkr.co/edit/vdqjG9G4cxzKqOzNCVnY?p=preview)

## Documentation

[Documentation link](https://zebzhao.github.io/Angular-QueryBuilder/)

# Examples

## Basic Usage

##### `app.component.html`
```html
<query-builder [data]='query' [config]='config'></query-builder>
```
##### `app.component.ts`
```javascript
query = {
  condition: 'and',
  rules: [
    {field: 'age', operator: '<=', value: 'Bob'},
    {field: 'gender', operator: '>=', value: 'm'}
  ]
};

config: QueryBuilderConfig = {
  fields: {
    age: {name: 'Age', type: 'number'},
    gender: {
      name: 'Gender',
      type: 'category',
      options: [
        {name: 'Male', value: 'm'},
        {name: 'Female', value: 'f'}
      ]
    }
  }
}
```

## Custom Input Components

##### `app.component.html`
```html
<query-builder [data]='query' [config]='config'>
  <ng-container *queryInput="let rule; type: 'date'">
    <custom-datepicker [(ngModel)]="rule.value"></custom-datepicker>
  </ng-container>
</query-builder>
```

##### `app.component.ts`
```javascript
query = {
  condition: 'and',
  rules: [
    {field: 'birthday', operator: '=', value: new Date()}
  ]
};

config: QueryBuilderConfig = {
  fields: {
    birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>']
      defaultValue: (() => return new Date())
    },
  }
}
```

## Custom Styling (with Bootstrap)

##### `app.component.html`
```html
<query-builder [data]='query' [config]='config' [classNames]='classNames'></query-builder>
```
##### `app.component.ts`
```javascript
classNames: {[key: string]: string} = {
  removeIcon: 'fa fa-minus',               // Font-Awesome
  addIcon: 'fa fa-plus',                   // Font-Awesome
  button: 'btn',                           // Bootstrap
  buttonGroup: 'btn-group',                // Bootstrap
  switchGroup: 'btn-group',                // Bootstrap
  queryTree: 'q-tree',                     // DEFAULT
  queryItem: 'q-item',                     // DEFAULT
  queryRule: 'q-rule',                     // DEFAULT
  queryRuleSet: 'q-ruleset',               // DEFAULT
  invalidRuleset: 'alert alert-danger',    // Bootstrap
  emptyWarning: '',                        // Bootstrap
  fieldControl: 'form-control',            // Bootstrap
  operatorControl: 'form-control',         // Bootstrap
  inputControl: 'form-control'             // Bootstrap
};
```

## Property Bindings Quick Reference

See [documentation](https://zebzhao.github.io/Angular-QueryBuilder/) for more details on interfaces and properties.

#### `query-builder`
|Name|Type|Required|Default|Description|
|:--- |:--- |:--- |:--- |:--- |
|`allowRuleset`|`boolean`|Optional|`true`| Displays the `+ Ruleset` button if `true` |
|`classNames`|`object`|Optional|| CSS class names for different child elements in `query-builder` component |
|`config`|`QueryBuilderConfig`|Required|| Configuration object for the main component |
|`data`| `Ruleset` |Required|| Object that stores the state of the component |
|`inputTypeTemplates`|`QueryList<QueryInputDirective>`|Optional|| Internal property used to map field types to `TemplateRef`|
|`operatorMap`|`{ [key: string]: string[] }`|Optional|| Used to map field types to list of operators |
|`parentData`|`Ruleset`|Optional|| Internal property used to determine the parent `query-builder` data |

Use the structural directive `queryInput` to use custom components with `query-builder`.

## Dependencies
- Angular 4+

That's it.

# Workflow
See the [angular-library-seed](https://github.com/trekhleb/angular-library-seed) project for details on how to build and run tests.
