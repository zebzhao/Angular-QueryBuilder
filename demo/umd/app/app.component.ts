import { Entity } from './../../esm/lib/components/query-builder/query-builder.interfaces.d';
import { Component } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'my-app',
  template: `<query-builder class='margin30' [data]='query' [config]='config'></query-builder>
  <div class='margin30'>
      <textarea >{{query | json}}</textarea>
  </div>`,
  styles: ['.margin30 { margin: 30px; }', 'textarea { width: 100%; height: 250px; }']
})
export class AppComponent {
  public query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<=' },
      {field: 'birthday', operator: '>=', entity: 'Entity02'},
      {
        condition: 'or',
        rules: [
          {field: 'gender', operator: '=', entity: 'Entity01'},
          {field: 'occupation', operator: 'in', entity: 'Entity02'},
          {field: 'school', operator: 'is null', entity: 'Entity02'}
        ]
      }
    ]
  };
  public config: QueryBuilderConfig = {
    entities: [{ name: 'Entity01', description: 'Entity 01' }, {name: 'Entity02', description: 'Entity 02'}],
    fields: {
      age: {name: 'Age', type: 'number', entityName: 'Entity01'},
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ],
        entityName: 'Entity01'
      },
      name: {name: 'Name', type: 'string', entityName: 'Entity01'},
      educated: {name: 'College Degree?', type: 'boolean', entityName: 'Entity02'},
      birthday: {name: 'Birthday', type: 'date', entityName: 'Entity02'},
      school: {name: 'School', type: 'string', nullable: true, entityName: 'Entity02'},
      occupation: {
        name: 'Occupation',
        type: 'string',
        options: [
          {name: 'Student', value: 'student'},
          {name: 'Teacher', value: 'teacher'},
          {name: 'Unemployed', value: 'unemployed'},
          {name: 'Scientist', value: 'scientist'}
        ],
        entityName: 'Entity02'
      }
    }
  };
}
