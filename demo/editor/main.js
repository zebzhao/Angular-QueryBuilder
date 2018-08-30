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
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
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
    '@angular/core':                     'npm:@angular/core' + angularVersion + '/bundles/core.umd.min.js',
    '@angular/common':                   'npm:@angular/common' + angularVersion + '/bundles/common.umd.min.js',
    '@angular/compiler':                 'npm:@angular/compiler' + angularVersion + '/bundles/compiler.umd.min.js',
    '@angular/forms':                    'npm:@angular/forms' + angularVersion + '/bundles/forms.umd.min.js',
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QueryBuilderModule } from 'angular2-query-builder';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    QueryBuilderModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
*/})}, {
  path: 'app/app.component.scss',
  text: multiline(function () {/*
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
*/})}, {
  path: 'app/app.component.html',
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
<h2>Bootstrap</h2>
<br>
<query-builder [(ngModel)]='query' [classNames]='bootstrapClassNames' [config]='currentConfig'>
  <div class="col-auto" *queryInput="let rule; type: 'textarea'">
    <textarea class="form-control" [(ngModel)]="rule.value"
      placeholder="Custom Textarea"></textarea>
  </div>
</query-builder>
*/})}, {
  path: 'app/app.component.ts',
  text: multiline(function () {/*
import { FormBuilder, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { QueryBuilderConfig, QueryBuilderClassNames } from "angular2-query-builder";

declare const __moduleName: string;

@Component({
  selector: 'my-app',
  moduleId: __moduleName,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  changeDisabled(event: Event) {
    (<HTMLInputElement>event.target).checked ? this.queryCtrl.disable() : this.queryCtrl.enable();
  }
}
*/})}
];

editor.connect(function () {
  editor.configure({
    files: files,
    defaultFile: 'app/app.component.ts'
  });
});

function multiline(f) {
  return f.toString()
    .replace(/^[^\/]+\/\*[\s\n\r]*/, '')
    .replace(/\*\/[^\/]+$/, '')
    .replace(/[\r]?\n/gi, '\r\n');
}
