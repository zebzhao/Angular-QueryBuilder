import { FormBuilder, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { QueryBuilderClassNames, QueryBuilderConfig } from '../../lib';

@Component({
  selector: 'my-app',
  template: `
  <h2>Vanilla</h2>
  <br>
  <query-builder [formControl]='queryCtrl' [config]='currentConfig'>
    <ng-container *queryInput="let rule; type: 'textarea'">
      <textarea class="text-input text-area" [(ngModel)]="rule.value"
        placeholder="Custom Textarea"></textarea>
    </ng-container>
  </query-builder>
  <br>
  <div>
    <div class="row">
      <p class="col-6">Control Valid: {{ queryCtrl.valid }}</p>
      <div class="col-6">
        <input type="checkbox" (change)=switchModes($event)>
        <label>Entity Mode</label>
      </div>
    </div>
    <p>Control Touched: {{ queryCtrl.touched }}</p>
    <textarea class="output">{{query | json}}</textarea>
  </div>
  <br>
  <h2>Custom Material</h2>
  <br>
  <mat-card>
  <query-builder [(ngModel)]='query' [config]='currentConfig'>
    <ng-container *queryButtonGroup="let ruleset; let addRule=addRule; let addRuleSet=addRuleSet; let removeRuleSet=removeRuleSet">
      <button mat-icon-button color="primary" (click)="addRule()">
        <mat-icon>add</mat-icon></button>
      <button mat-icon-button color="primary" *ngIf="addRuleSet" (click)="addRuleSet()">
        <mat-icon>add_circle_outline</mat-icon></button>
      <button mat-icon-button color="accent" *ngIf="removeRuleSet" (click)="removeRuleSet()">
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
    <ng-container *queryEntity="let rule; let entities=entities; let onChange=onChange">
      <mat-form-field>
        <mat-select [(ngModel)]="rule.entity" (ngModelChange)="onChange($event, rule)">
          <mat-option *ngFor="let entity of entities" [value]="entity.value">
          {{entity.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </ng-container>
    <ng-container *queryField="let rule; let fields=fields; let onChange=onChange; let getFields = getFields">
      <mat-form-field>
        <mat-select [(ngModel)]="rule.field" (ngModelChange)="onChange($event, rule)">
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
  <br>
  <h2>Bootstrap</h2>
  <br>
  <query-builder [(ngModel)]='query' [classNames]='bootstrapClassNames' [config]='currentConfig'>
    <div class="col-auto" *queryInput="let rule; type: 'textarea'">
      <textarea class="form-control" [(ngModel)]="rule.value"
        placeholder="Custom Textarea"></textarea>
    </div>
  </query-builder>
  `,
  styles: [`
  /deep/ html {
    font: 14px sans-serif;
    margin: 30px;
  }

  .text-input {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .text-area {
    width: 300px;
    height: 100px;
  }

  .output {
    width: 100%;
    height: 300px;
  }
  `]
})
export class AppComponent {
  public queryCtrl: FormControl;

  public bootstrapClassNames: QueryBuilderClassNames = {
    removeIcon: 'fa fa-minus',
    addIcon: 'fa fa-plus',
    button: 'btn',
    buttonGroup: 'btn-group',
    rightAlign: 'order-12 ml-auto',
    switchRow: 'd-flex px-2',
    switchGroup: 'd-flex align-items-center',
    switchRadio: 'custom-control-input',
    switchLabel: 'custom-control-label',
    switchControl: 'custom-control custom-radio custom-control-inline',
    row: 'row p-2 m-1',
    rule: 'border',
    ruleSet: 'border',
    invalidRuleSet: 'alert alert-danger',
    emptyWarning: 'text-danger mx-auto',
    operatorControl: 'form-control',
    operatorControlSize: 'col-auto pr-0',
    fieldControl: 'form-control',
    fieldControlSize: 'col-auto pr-0',
    entityControl: 'form-control',
    entityControlSize: 'col-auto pr-0',
    inputControl: 'form-control',
    inputControlSize: 'col-auto'
  };

  public query = {
    condition: 'and',
    rules: [
      {field: 'age', operator: '<=', entity: 'physical'},
      {field: 'birthday', operator: '=', value: new Date(), entity: 'nonphysical'},
      {
        condition: 'or',
        rules: [
          {field: 'gender', operator: '=', entity: 'physical'},
          {field: 'occupation', operator: 'in', entity: 'nonphysical'},
          {field: 'school', operator: 'is null', entity: 'nonphysical'},
          {field: 'notes', operator: '=', entity: 'nonphysical'}
        ]
      }
    ]
  };

  public entityConfig: QueryBuilderConfig = {
    entities: {
      physical: {name: 'Physical Attributes'},
      nonphysical: {name: 'Nonphysical Attributes'}
    },
    fields: {
      age: {name: 'Age', type: 'number', entity: 'physical'},
      gender: {
        name: 'Gender',
        entity: 'physical',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      name: {name: 'Name', type: 'string', entity: 'nonphysical'},
      notes: {name: 'Notes', type: 'textarea', operators: ['=', '!='], entity: 'nonphysical'},
      educated: {name: 'College Degree?', type: 'boolean', entity: 'nonphysical'},
      birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date()), entity: 'nonphysical'
      },
      school: {name: 'School', type: 'string', nullable: true, entity: 'nonphysical'},
      occupation: {
        name: 'Occupation',
        entity: 'nonphysical',
        type: 'category',
        options: [
          {name: 'Student', value: 'student'},
          {name: 'Teacher', value: 'teacher'},
          {name: 'Unemployed', value: 'unemployed'},
          {name: 'Scientist', value: 'scientist'}
        ]
      }
    }
  };

  public config: QueryBuilderConfig = {
    fields: {
      age: {name: 'Age', type: 'number'},
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          {name: 'Male', value: 'm'},
          {name: 'Female', value: 'f'}
        ]
      },
      name: {name: 'Name', type: 'string'},
      notes: {name: 'Notes', type: 'textarea', operators: ['=', '!=']},
      educated: {name: 'College Degree?', type: 'boolean'},
      birthday: {name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
        defaultValue: (() => new Date())
      },
      school: {name: 'School', type: 'string', nullable: true},
      occupation: {
        name: 'Occupation',
        type: 'category',
        options: [
          {name: 'Student', value: 'student'},
          {name: 'Teacher', value: 'teacher'},
          {name: 'Unemployed', value: 'unemployed'},
          {name: 'Scientist', value: 'scientist'}
        ]
      }
    }
  };

  public currentConfig: QueryBuilderConfig;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.queryCtrl = this.formBuilder.control(this.query);
    this.currentConfig = this.config;
  }

  switchModes(event: Event) {
    this.currentConfig = (<HTMLInputElement>event.target).checked ? this.entityConfig : this.config;
  }
}
