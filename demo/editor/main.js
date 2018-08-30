var editor = new SpckEditor('#editor');
var files = [{
  path: 'index.html',
  text: multiline(function () {/*
<!DOCTYPE html>
<html>
<head>
  <title>Angular Query Builder Demo</title>
  <script src="https://unpkg.com/core-js@2.5.7/client/shim.min.js"></script>
  <script src="https://unpkg.com/zone.js@0.8.26?main=browser"></script>
  <script src="https://unpkg.com/reflect-metadata@0.1.8"></script>
  <script src="https://unpkg.com/systemjs@0.19.39/dist/system.src.js"></script>
  <script src="systemjs.config.js"></script>
  <script>
    System.import('./app/main')
  </script>
</head>
<body>
  <my-app>Loading...</my-app>
</body>
</html>
*/})}, {
  path: 'systemjs.config.js',
  text: multiline(function () {/*
var angularVersion = '@6.0.7';

System.config({
  transpiler: 'ts',
  typescriptOptions: {
    emitDecoratorMetadata: true,
    experimentalDecorators: true
  },
  packages: {
    app: {
      main: './app/main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
        main: 'index.js',
        defaultExtension: 'js'
    },
    "rxjs/operators": {
        main: 'index.js',
        defaultExtension: 'js'
    }
  },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    '@angular/core':                     'npm:@angular/core' + angularVersion + '/bundles/core.umd.js',
    '@angular/common':                   'npm:@angular/common' + angularVersion + '/bundles/common.umd.js',
    '@angular/compiler':                 'npm:@angular/compiler' + angularVersion + '/bundles/compiler.umd.js',
    '@angular/forms':                    'npm:@angular/forms' + angularVersion + '/bundles/forms.umd.js',
    '@angular/http':                     'npm:@angular/http' + angularVersion + '/bundles/http.umd.js',
    '@angular/router':                   'npm:@angular/router' + angularVersion + '/bundles/router.umd.js',
    '@angular/platform-browser':         'npm:@angular/platform-browser' + angularVersion + '/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + angularVersion + '/bundles/platform-browser-dynamic.umd.js',
    'rxjs':                              'npm:rxjs@6.2.1',
    'rxjs-compat':                       'npm:rxjs-compat@6.2.1',
    'ts':                                'npm:plugin-typescript@8.0.0/lib/plugin.js',
    'typescript':                        'npm:typescript@2.9.2/lib/typescript.js',
    'angular2-query-builder':            'npm:angular2-query-builder@0.3.2/dist/index.umd.js'
  }
});
*/})}, {
  path: 'app/main.ts',
  text: multiline(function () {/*
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
*/})}, {
  path: 'app/app.module.ts',
  text: multiline(function () {/*
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QueryBuilderModule } from "angular2-query-builder";
import { AppComponent } from './app.component';

@NgModule({
  imports:      [BrowserModule, QueryBuilderModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
*/})}, {
  path: 'app/app.component.scss',
  text: multiline(function () {/*
/deep/ html {
  font: 14px sans-serif;
  margin: 30px;
}

.mat-form-field {
  padding-left: 5px;
  padding-right: 5px;
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
*/})}, {
  path: 'app.component.html',
  text: multiline(function () {/*
<h2>Vanilla</h2>
<br>
<query-builder [formControl]='queryCtrl' [config]='currentConfig'>
  <ng-container *queryInput="let rule; type: 'textarea'; let getDisabledState=getDisabledState">
    <textarea class="text-input text-area" [(ngModel)]="rule.value" [disabled]=getDisabledState()
      placeholder="Custom Textarea"></textarea>
  </ng-container>
</query-builder>
<br>
<div>
  <div class="row">
    <p class="col-6">Control Valid (Vanilla): {{ queryCtrl.valid }}</p>
    <div class="col-6">
      <label><input type="checkbox" (change)=switchModes($event)>Entity Mode</label>
    </div>
  </div>
  <div class="row">
    <p class="col-6">Control Touched (Vanilla): {{ queryCtrl.touched }}</p>
    <div class="col-6">
      <label><input type="checkbox" (change)=changeDisabled($event)>Disabled</label>
    </div>
  </div>
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
  <ng-container *querySwitchGroup="let ruleset; let onChange=onChange">
    <mat-radio-group *ngIf="ruleset" [(ngModel)]="ruleset.condition" (ngModelChange)="onChange($event)">
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
  <ng-container *queryOperator="let rule; let operators=operators; let onChange=onChange">
    <mat-form-field [style.width.px]="90">
      <mat-select [(ngModel)]="rule.operator" (ngModelChange)="onChange()">
        <mat-option *ngFor="let value of operators" [value]="value">
          {{ value }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  </ng-container>
  <ng-container *queryInput="let rule; type: 'boolean'; let onChange=onChange">
    <mat-checkbox [(ngModel)]="rule.value" (ngModelChange)="onChange()"></mat-checkbox>
  </ng-container>
  <ng-container *queryInput="let rule; let field=field; let options=options; type: 'category'; let onChange=onChange">
    <mat-form-field>
      <mat-select [(ngModel)]="rule.value" (ngModelChange)="onChange()">
        <mat-option *ngFor="let opt of options" [value]="opt.value">
          {{ opt.name }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  </ng-container>
  <ng-container *queryInput="let rule; type: 'date'; let onChange=onChange">
    <mat-form-field>
      <input matInput [matDatepicker]="picker" [(ngModel)]="rule.value" (ngModelChange)="onChange()">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  </ng-container>
  <ng-container *queryInput="let rule; let options=options; type: 'multiselect'; let onChange=onChange">
    <mat-form-field [style.width.px]="300">
      <mat-select [(ngModel)]="rule.value" multiple (ngModelChange)="onChange()">
        <mat-option *ngFor="let opt of options" [value]="opt.value">
          {{ opt.name }}
        </mat-option>
      </mat-select>
    </mat-form-field>
  </ng-container>
  <ng-container *queryInput="let rule; let field=field; type: 'number'; let onChange=onChange">
    <mat-form-field [style.width.px]="50">
      <input matInput [(ngModel)]="rule.value" type="number" (ngModelChange)="onChange()">
    </mat-form-field>
  </ng-container>
  <ng-container *queryInput="let rule; let field=field; type: 'string'; let onChange=onChange">
    <mat-form-field>
      <input matInput [(ngModel)]="rule.value" (ngModelChange)="onChange()">
    </mat-form-field>
  </ng-container>
  <ng-container *queryInput="let rule; let field=field; type: 'textarea'; let onChange=onChange">
    <mat-form-field>
      <textarea matInput [(ngModel)]="rule.value" (ngModelChange)="onChange()">
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
*/})}, {
  path: 'app.component.ts',
  text: multiline(function () {/*
import { Component } from '@angular/core';
import { QueryBuilderConfig } from "angular2-query-builder";

@Component({
  selector: 'my-app',
  template: `<query-builder class="margin30" [data]="query" [config]="config"></query-builder>
<div class="margin30">
  <textarea >{{query | json}}</textarea>
</div>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: ['.margin30 { margin: 30px; }', 'textarea { width: 100%; height: 250px; }' ]
})
export class AppComponent {
  query = {
    condition: 'and',
    rules: [
      {field: "age", operator: "<="},
      {field: "birthday", operator: ">="},
      {
        condition: 'or',
        rules: [
          {field: "gender", operator: "="},
          {field: "occupation", operator: "in"},
          {field: "school", operator: "is null"}
        ]
      }
    ]
  };
  config: QueryBuilderConfig = {
    fields: {
      "age": {name: "Age", type: 'number'},
      "gender": {
        name: "Gender",
        type: 'category',
        options: [
          {name: "Male", value: "m"},
          {name: "Female", value: "f"}
        ]
      },
      "name": {name: "Name", type: 'string'},
      "educated": {name: "College Degree?", type: 'boolean'},
      "birthday": {name: "Birthday", type: 'date'},
      "school": {name: "School", type: 'string', nullable: true},
      "occupation": {
        name: "Occupation",
        type: 'string',
        options: [
          {name: "Student", value: "student"},
          {name: "Teacher", value: "teacher"},
          {name: "Unemployed", value: "unemployed"},
          {name: "Scientist", value: "scientist"}
        ]
      }
    }
  };
}
*/})}
];

editor.connect(function () {
  editor.configure({
    files: files,
    defaultFile: 'app.component.ts'
  });
});

function multiline(f) {
  return f.toString()
    .replace(/^[^\/]+\/\*[\s\n\r]*/, '')
    .replace(/\*\/[^\/]+$/, '')
    .replace(/[\r]?\n/gi, '\r\n');
}
