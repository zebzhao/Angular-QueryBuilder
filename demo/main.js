(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.bootstrapClassNames = {
            removeIcon: 'fa fa-minus',
            addIcon: 'fa fa-plus',
            arrowIcon: 'fa fa-chevron-right px-2',
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
        this.query = {
            condition: 'and',
            rules: [
                { field: 'age', operator: '<=', entity: 'physical' },
                { field: 'birthday', operator: '=', value: new Date(), entity: 'nonphysical' },
                {
                    condition: 'or',
                    rules: [
                        { field: 'gender', operator: '=', entity: 'physical' },
                        { field: 'occupation', operator: 'in', entity: 'nonphysical' },
                        { field: 'school', operator: 'is null', entity: 'nonphysical' },
                        { field: 'notes', operator: '=', entity: 'nonphysical' }
                    ]
                }
            ]
        };
        this.entityConfig = {
            entities: {
                physical: { name: 'Physical Attributes' },
                nonphysical: { name: 'Nonphysical Attributes' }
            },
            fields: {
                age: { name: 'Age', type: 'number', entity: 'physical' },
                gender: {
                    name: 'Gender',
                    entity: 'physical',
                    type: 'category',
                    options: [
                        { name: 'Male', value: 'm' },
                        { name: 'Female', value: 'f' }
                    ]
                },
                name: { name: 'Name', type: 'string', entity: 'nonphysical' },
                notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='], entity: 'nonphysical' },
                educated: { name: 'College Degree?', type: 'boolean', entity: 'nonphysical' },
                birthday: { name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
                    defaultValue: (function () { return new Date(); }), entity: 'nonphysical'
                },
                school: { name: 'School', type: 'string', nullable: true, entity: 'nonphysical' },
                occupation: {
                    name: 'Occupation',
                    entity: 'nonphysical',
                    type: 'category',
                    options: [
                        { name: 'Student', value: 'student' },
                        { name: 'Teacher', value: 'teacher' },
                        { name: 'Unemployed', value: 'unemployed' },
                        { name: 'Scientist', value: 'scientist' }
                    ]
                }
            }
        };
        this.config = {
            fields: {
                age: { name: 'Age', type: 'number' },
                gender: {
                    name: 'Gender',
                    type: 'category',
                    options: [
                        { name: 'Male', value: 'm' },
                        { name: 'Female', value: 'f' }
                    ]
                },
                name: { name: 'Name', type: 'string' },
                notes: { name: 'Notes', type: 'textarea', operators: ['=', '!='] },
                educated: { name: 'College Degree?', type: 'boolean' },
                birthday: { name: 'Birthday', type: 'date', operators: ['=', '<=', '>'],
                    defaultValue: (function () { return new Date(); })
                },
                school: { name: 'School', type: 'string', nullable: true },
                occupation: {
                    name: 'Occupation',
                    type: 'category',
                    options: [
                        { name: 'Student', value: 'student' },
                        { name: 'Teacher', value: 'teacher' },
                        { name: 'Unemployed', value: 'unemployed' },
                        { name: 'Scientist', value: 'scientist' }
                    ]
                }
            }
        };
        this.allowRuleset = true;
        this.persistValueOnFieldChange = false;
        this.queryCtrl = this.formBuilder.control(this.query);
        this.currentConfig = this.config;
    }
    AppComponent.prototype.switchModes = function (event) {
        this.currentConfig = event.target.checked ? this.entityConfig : this.config;
    };
    AppComponent.prototype.changeDisabled = function (event) {
        event.target.checked ? this.queryCtrl.disable() : this.queryCtrl.enable();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n  <h2>Vanilla</h2>\n  <br>\n  <query-builder [formControl]='queryCtrl' [config]='currentConfig' [allowRuleset]='allowRuleset' [allowCollapse]='allowCollapse' [persistValueOnFieldChange]='persistValueOnFieldChange'>\n    <ng-container *queryInput=\"let rule; type: 'textarea'; let getDisabledState=getDisabledState\">\n      <textarea class=\"text-input text-area\" [(ngModel)]=\"rule.value\" [disabled]=getDisabledState()\n        placeholder=\"Custom Textarea\"></textarea>\n    </ng-container>\n  </query-builder>\n  <br>\n  <div>\n    <div class=\"row\">\n      <p class=\"col-6\">Control Valid (Vanilla): {{ queryCtrl.valid }}</p>\n      <div class=\"col-6\">\n        <label><input type=\"checkbox\" (change)=switchModes($event)>Entity Mode</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <p class=\"col-6\">Control Touched (Vanilla): {{ queryCtrl.touched }}</p>\n      <div class=\"col-6\">\n        <label><input type=\"checkbox\" (change)=changeDisabled($event)>Disabled</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <label><input type=\"checkbox\" [(ngModel)]='allowRuleset'>Allow Ruleset</label>\n      </div>\n      <div class=\"col-6\">\n        <label><input type=\"checkbox\" [(ngModel)]='allowCollapse'>Allow Collapse</label>\n      </div>\n      <div class=\"col-6\">\n        <label><input type=\"checkbox\" [(ngModel)]='persistValueOnFieldChange'>Persist Values on Field Change</label>\n      </div>\n    </div>\n\n    <textarea class=\"output\">{{query | json}}</textarea>\n  </div>\n  <br>\n  <h2>Custom Material</h2>\n  <br>\n  <mat-card>\n  <query-builder [(ngModel)]='query' [config]='currentConfig' [allowRuleset]='allowRuleset' [allowCollapse]='allowCollapse' [persistValueOnFieldChange]='persistValueOnFieldChange'>\n    <ng-container *queryButtonGroup=\"let ruleset; let addRule=addRule; let addRuleSet=addRuleSet; let removeRuleSet=removeRuleSet\">\n      <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addRule()\">\n        <mat-icon>add</mat-icon></button>\n      <button type=\"button\" mat-icon-button color=\"primary\" *ngIf=\"addRuleSet\" (click)=\"addRuleSet()\">\n        <mat-icon>add_circle_outline</mat-icon></button>\n      <button type=\"button\" mat-icon-button color=\"accent\" *ngIf=\"removeRuleSet\" (click)=\"removeRuleSet()\">\n        <mat-icon>remove_circle_outline</mat-icon></button>\n    </ng-container>\n    <ng-container *queryArrowIcon>\n      <mat-icon ngClass=\"mat-arrow-icon\">chevron_right</mat-icon>\n    </ng-container>\n    <ng-container *queryRemoveButton=\"let rule; let removeRule=removeRule\">\n      <button type=\"button\" mat-icon-button color=\"accent\" (click)=\"removeRule(rule)\">\n        <mat-icon>remove</mat-icon>\n      </button>\n    </ng-container>\n    <ng-container *querySwitchGroup=\"let ruleset; let onChange=onChange\">\n      <mat-radio-group *ngIf=\"ruleset\" [(ngModel)]=\"ruleset.condition\" (ngModelChange)=\"onChange($event)\">\n        <mat-radio-button [style.padding.px]=\"10\" value=\"and\">And</mat-radio-button>\n        <mat-radio-button [style.padding.px]=\"10\" value=\"or\">Or</mat-radio-button>\n      </mat-radio-group>\n    </ng-container>\n    <ng-container *queryEntity=\"let rule; let entities=entities; let onChange=onChange\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"rule.entity\" (ngModelChange)=\"onChange($event, rule)\">\n          <mat-option *ngFor=\"let entity of entities\" [value]=\"entity.value\">\n          {{entity.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryField=\"let rule; let fields=fields; let onChange=onChange; let getFields = getFields\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"rule.field\" (ngModelChange)=\"onChange($event, rule)\">\n          <mat-option *ngFor=\"let field of getFields(rule.entity)\" [value]=\"field.value\">\n            {{ field.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryOperator=\"let rule; let operators=operators; let onChange=onChange\">\n      <mat-form-field [style.width.px]=\"90\">\n        <mat-select [(ngModel)]=\"rule.operator\" (ngModelChange)=\"onChange(rule)\">\n          <mat-option *ngFor=\"let value of operators\" [value]=\"value\">\n            {{ value }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; type: 'boolean'; let onChange=onChange\">\n      <mat-checkbox [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\"></mat-checkbox>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let field=field; let options=options; type: 'category'; let onChange=onChange\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\n          <mat-option *ngFor=\"let opt of options\" [value]=\"opt.value\">\n            {{ opt.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; type: 'date'; let onChange=onChange\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let options=options; type: 'multiselect'; let onChange=onChange\">\n      <mat-form-field [style.width.px]=\"300\">\n        <mat-select [(ngModel)]=\"rule.value\" multiple (ngModelChange)=\"onChange()\">\n          <mat-option *ngFor=\"let opt of options\" [value]=\"opt.value\">\n            {{ opt.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let field=field; type: 'number'; let onChange=onChange\">\n      <mat-form-field [style.width.px]=\"50\">\n        <input matInput [(ngModel)]=\"rule.value\" type=\"number\" (ngModelChange)=\"onChange()\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let field=field; type: 'string'; let onChange=onChange\">\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let field=field; type: 'textarea'; let onChange=onChange\">\n      <mat-form-field>\n        <textarea matInput [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\n        </textarea>\n      </mat-form-field>\n    </ng-container>\n  </query-builder>\n  </mat-card>\n  <br>\n  <h2>Bootstrap</h2>\n  <br>\n  <query-builder [(ngModel)]='query' [classNames]='bootstrapClassNames' [config]='currentConfig' [allowRuleset]='allowRuleset' [allowCollapse]='allowCollapse' [persistValueOnFieldChange]='persistValueOnFieldChange'>\n    <div class=\"col-auto\" *queryInput=\"let rule; type: 'textarea'\">\n      <textarea class=\"form-control\" [(ngModel)]=\"rule.value\"\n        placeholder=\"Custom Textarea\"></textarea>\n    </div>\n  </query-builder>\n  ",
            styles: ["\n  /deep/ html {\n    font: 14px sans-serif;\n    margin: 30px;\n  }\n\n  .mat-icon-button {\n    outline: none;\n  }\n\n  .mat-arrow-icon {\n    outline: none;\n    line-height: 32px;\n  }\n\n  .mat-form-field {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .text-input {\n    padding: 4px 8px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n  }\n\n  .text-area {\n    width: 300px;\n    height: 100px;\n  }\n\n  .output {\n    width: 100%;\n    height: 300px;\n  }\n  "]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular2_query_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-query-builder */ "./node_modules/angular2-query-builder/fesm5/angular2-query-builder.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                angular2_query_builder__WEBPACK_IMPORTED_MODULE_6__["QueryBuilderModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zeb.zhao/Documents/GitRepos/Angular-QueryBuilder/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map