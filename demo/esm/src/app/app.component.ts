import { Component } from '@angular/core';
import { QueryBuilderConfig } from '../../lib/components/query-builder';

@Component({
  selector: 'my-app',
  template: `
  <h2>Vanilla Query Builder</h2>
  <query-builder class='margin30' [(ngModel)]='query' [config]='config'>
    <ng-container *queryInput="let rule; type: 'textarea'">
      <textarea class="text-input text-area" [(ngModel)]="rule.value"
        placeholder="Custom Textarea"></textarea>
    </ng-container>
  </query-builder>
  <div class='margin30'>
    <textarea class="output">{{query | json}}</textarea>
  </div>
  <h2>Custom Material Query Builder</h2>
  <mat-card>
  <query-builder [(ngModel)]='query' [config]='config'>
    <ng-container *queryButtonGroup="let ruleset; let addRule=addRule; let addRuleSet=addRuleSet; let removeRuleSet=removeRuleSet">
      <button mat-icon-button color="primary" (click)="addRule()">
        <mat-icon>add</mat-icon></button>
      <button mat-icon-button color="primary" (click)="addRuleSet()">
        <mat-icon>add_circle_outline</mat-icon></button>
      <button mat-icon-button color="accent" (click)="removeRuleSet()">
        <mat-icon>remove_circle_outline</mat-icon></button>
    </ng-container>
    <ng-container *queryRemoveButton="let rule; let removeRule=removeRule">
      <button mat-icon-button color="accent" (click)="removeRule(rule)">
        <mat-icon>remove</mat-icon>
      </button>
    </ng-container>
    <ng-container *querySwitchGroup="let ruleset">
      <mat-radio-group *ngIf="ruleset" [(ngModel)]="ruleset.condition">
        <mat-radio-button [style.padding.px]="10" value="and">And</mat-radio-button>
        <mat-radio-button [style.padding.px]="10" value="or">Or</mat-radio-button>
      </mat-radio-group>
    </ng-container>
    <ng-container *queryEntity="let rule; let entities=entities; let changeEntity=changeEntity">
      <mat-form-field>
        <mat-select [(ngModel)]="rule.entity" (ngModelChange)="changeEntity($event, rule)">
          <mat-option *ngFor="let entity of entities" [value]="entity.name">
          {{entity.description}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </ng-container>
    <ng-container *queryField="let rule; let fields=fields; let changeField=changeField; let getFields = getFields">
      <mat-form-field>
        <mat-select [(ngModel)]="rule.field" (ngModelChange)="changeField($event, rule)">
          <mat-option *ngFor="let field of getFields(rule.entity)" [value]="field.value">
            {{ field.name }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </ng-container>
    <ng-container *queryOperator="let rule; let operators=operators">
      <mat-form-field [style.width.px]="90">
        <mat-select [(ngModel)]="rule.operator">
          <mat-option *ngFor="let value of operators" [value]="value">
            {{ value }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </ng-container>
    <ng-container *queryInput="let rule; type: 'boolean'">
      <mat-checkbox [(ngModel)]="rule.value"></mat-checkbox>
    </ng-container>
    <ng-container *queryInput="let rule; let field=field; let options=options; type: 'category'">
      <mat-form-field>
        <mat-select [(ngModel)]="rule.value" [placeholder]="field.name">
          <mat-option *ngFor="let opt of options" [value]="opt.value">
            {{ opt.name }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </ng-container>
    <ng-container *queryInput="let rule; type: 'date'">
      <mat-form-field>
        <input matInput [matDatepicker]="picker" [(ngModel)]="rule.value"
          placeholder="Choose a date">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    </ng-container>
    <ng-container *queryInput="let rule; let options=options; type: 'multiselect'">
      <mat-form-field [style.width.px]="300">
        <mat-select [(ngModel)]="rule.value" multiple>
          <mat-option *ngFor="let opt of options" [value]="opt.value">
            {{ opt.name }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </ng-container>
    <ng-container *queryInput="let rule; let field=field; type: 'number'">
      <mat-form-field [style.width.px]="50">
        <input matInput [(ngModel)]="rule.value" [placeholder]="field.name" type="number">
      </mat-form-field>
    </ng-container>
    <ng-container *queryInput="let rule; let field=field; type: 'string'">
      <mat-form-field>
        <input matInput [(ngModel)]="rule.value" [placeholder]="field.name">
      </mat-form-field>
    </ng-container>
    <ng-container *queryInput="let rule; let field=field; type: 'textarea'">
      <mat-form-field>
        <textarea matInput [(ngModel)]="rule.value" [placeholder]="field.name">
        </textarea>
      </mat-form-field>
    </ng-container>
  </query-builder>
  </mat-card>
  `,
  styles: [`
  /deep/ html {
    font: 14px sans-serif;
  }

  .margin30 { margin: 30px; }

  .text-input {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .text-area {
    margin-top: 8px;
    width: 300px;
    height: 100px;
    display: block;
  }

  .output {
    width: 100%;
    height: 300px;
  }
  `]
})
export class AppComponent {
  public query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<=', entity: 'Entity01'},
      {field: 'birthday', operator: '=', value: new Date(), entity: 'Entity02'},
      {
        condition: 'or',
        rules: [
          {field: 'gender', operator: '=', entity: 'Entity01'},
          {field: 'occupation', operator: 'in', entity: 'Entity02'},
          {field: 'school', operator: 'is null', entity: 'Entity02'},
          {field: 'notes', operator: '=', entity: 'Entity02'}
        ]
      }
    ]
  };
  public config: QueryBuilderConfig = {
    entities: [{ name: 'Entity01', description: 'Entity 001' }, {name: 'Entity02', description: 'Entity 002'}],
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
      notes: {name: 'Notes', type: 'textarea', operators: ['=', '!='], entityName: 'Entity02'},
      educated: {name: 'College Degree?', type: 'boolean'},
      birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date()), entityName: 'Entity02'
      },
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
