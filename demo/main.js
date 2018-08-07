(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./lib/components/index.js":
/*!*********************************!*\
  !*** ./lib/components/index.js ***!
  \*********************************/
/*! exports provided: CONTROL_VALUE_ACCESSOR, VALIDATOR, QueryBuilderComponent, QueryButtonGroupDirective, QueryEntityDirective, QueryFieldDirective, QueryInputDirective, QueryOperatorDirective, QuerySwitchGroupDirective, QueryRemoveButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query-builder */ "./lib/components/query-builder/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTROL_VALUE_ACCESSOR", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["CONTROL_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["VALIDATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryBuilderComponent", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["QueryBuilderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryButtonGroupDirective", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["QueryButtonGroupDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryEntityDirective", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["QueryEntityDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryFieldDirective", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["QueryFieldDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryInputDirective", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["QueryInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryOperatorDirective", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["QueryOperatorDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuerySwitchGroupDirective", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["QuerySwitchGroupDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryRemoveButtonDirective", function() { return _query_builder__WEBPACK_IMPORTED_MODULE_0__["QueryRemoveButtonDirective"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./lib/components/query-builder/index.js":
/*!***********************************************!*\
  !*** ./lib/components/query-builder/index.js ***!
  \***********************************************/
/*! exports provided: CONTROL_VALUE_ACCESSOR, VALIDATOR, QueryBuilderComponent, QueryButtonGroupDirective, QueryEntityDirective, QueryFieldDirective, QueryInputDirective, QueryOperatorDirective, QuerySwitchGroupDirective, QueryRemoveButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _query_builder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query-builder.component */ "./lib/components/query-builder/query-builder.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTROL_VALUE_ACCESSOR", function() { return _query_builder_component__WEBPACK_IMPORTED_MODULE_0__["CONTROL_VALUE_ACCESSOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR", function() { return _query_builder_component__WEBPACK_IMPORTED_MODULE_0__["VALIDATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryBuilderComponent", function() { return _query_builder_component__WEBPACK_IMPORTED_MODULE_0__["QueryBuilderComponent"]; });

/* harmony import */ var _query_button_group_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-button-group.directive */ "./lib/components/query-builder/query-button-group.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryButtonGroupDirective", function() { return _query_button_group_directive__WEBPACK_IMPORTED_MODULE_1__["QueryButtonGroupDirective"]; });

/* harmony import */ var _query_entity_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query-entity.directive */ "./lib/components/query-builder/query-entity.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryEntityDirective", function() { return _query_entity_directive__WEBPACK_IMPORTED_MODULE_2__["QueryEntityDirective"]; });

/* harmony import */ var _query_field_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-field.directive */ "./lib/components/query-builder/query-field.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryFieldDirective", function() { return _query_field_directive__WEBPACK_IMPORTED_MODULE_3__["QueryFieldDirective"]; });

/* harmony import */ var _query_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query-input.directive */ "./lib/components/query-builder/query-input.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryInputDirective", function() { return _query_input_directive__WEBPACK_IMPORTED_MODULE_4__["QueryInputDirective"]; });

/* harmony import */ var _query_operator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query-operator.directive */ "./lib/components/query-builder/query-operator.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryOperatorDirective", function() { return _query_operator_directive__WEBPACK_IMPORTED_MODULE_5__["QueryOperatorDirective"]; });

/* harmony import */ var _query_switch_group_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query-switch-group.directive */ "./lib/components/query-builder/query-switch-group.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuerySwitchGroupDirective", function() { return _query_switch_group_directive__WEBPACK_IMPORTED_MODULE_6__["QuerySwitchGroupDirective"]; });

/* harmony import */ var _query_remove_button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./query-remove-button.directive */ "./lib/components/query-builder/query-remove-button.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryRemoveButtonDirective", function() { return _query_remove_button_directive__WEBPACK_IMPORTED_MODULE_7__["QueryRemoveButtonDirective"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./lib/components/query-builder/query-builder.component.js":
/*!*****************************************************************!*\
  !*** ./lib/components/query-builder/query-builder.component.js ***!
  \*****************************************************************/
/*! exports provided: CONTROL_VALUE_ACCESSOR, VALIDATOR, QueryBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL_VALUE_ACCESSOR", function() { return CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATOR", function() { return VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryBuilderComponent", function() { return QueryBuilderComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _query_operator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-operator.directive */ "./lib/components/query-builder/query-operator.directive.js");
/* harmony import */ var _query_field_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query-field.directive */ "./lib/components/query-builder/query-field.directive.js");
/* harmony import */ var _query_entity_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-entity.directive */ "./lib/components/query-builder/query-entity.directive.js");
/* harmony import */ var _query_switch_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query-switch-group.directive */ "./lib/components/query-builder/query-switch-group.directive.js");
/* harmony import */ var _query_button_group_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query-button-group.directive */ "./lib/components/query-builder/query-button-group.directive.js");
/* harmony import */ var _query_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./query-input.directive */ "./lib/components/query-builder/query-input.directive.js");
/* harmony import */ var _query_remove_button_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./query-remove-button.directive */ "./lib/components/query-builder/query-remove-button.directive.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");









var CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(function () { return QueryBuilderComponent; }),
    multi: true
};
var VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["forwardRef"])(function () { return QueryBuilderComponent; }),
    multi: true
};
var QueryBuilderComponent = /** @class */ (function () {
    function QueryBuilderComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.defaultClassNames = {
            removeIcon: 'q-icon q-remove-icon',
            addIcon: 'q-icon q-add-icon',
            button: 'q-button',
            buttonGroup: 'q-button-group',
            removeButton: 'q-remove-button',
            switchGroup: 'q-switch-group',
            switchLabel: 'q-switch-label',
            switchRadio: 'q-switch-radio',
            rightAlign: 'q-right-align',
            transition: 'q-transition',
            tree: 'q-tree',
            row: 'q-row',
            connector: 'q-connector',
            rule: 'q-rule',
            ruleSet: 'q-ruleset',
            invalidRuleSet: 'q-invalid-ruleset',
            emptyWarning: 'q-empty-warning',
            fieldControl: 'q-field-control',
            fieldControlSize: 'q-control-size',
            entityControl: 'q-entity-control',
            entityControlSize: 'q-control-size',
            operatorControl: 'q-operator-control',
            operatorControlSize: 'q-control-size',
            inputControl: 'q-input-control',
            inputControlSize: 'q-control-size'
        };
        this.defaultOperatorMap = {
            string: ['=', '!=', 'contains', 'like'],
            number: ['=', '!=', '>', '>=', '<', '<='],
            time: ['=', '!=', '>', '>=', '<', '<='],
            date: ['=', '!=', '>', '>=', '<', '<='],
            category: ['=', '!=', 'in', 'not in'],
            boolean: ['=']
        };
        this.data = { condition: 'and', rules: [] };
        this.allowRuleset = true;
        this.config = { fields: {} };
        this.defaultTemplateTypes = [
            'string', 'number', 'time', 'date', 'category', 'boolean', 'multiselect'
        ];
        this.defaultEmptyList = [];
        this.inputContextCache = new Map();
        this.operatorContextCache = new Map();
        this.fieldContextCache = new Map();
        this.entityContextCache = new Map();
        this.removeButtonContextCache = new Map();
    }
    // ----------OnInit Implementation----------
    QueryBuilderComponent.prototype.ngOnInit = function () { };
    // ----------OnChanges Implementation----------
    QueryBuilderComponent.prototype.ngOnChanges = function (changes) {
        var config = this.config;
        var type = typeof config;
        if (type === 'object') {
            this.fields = Object.keys(config.fields).map(function (value) {
                var field = config.fields[value];
                field.value = field.value || value;
                return field;
            });
            if (config.entities) {
                this.entities = Object.keys(config.entities).map(function (value) {
                    var entity = config.entities[value];
                    entity.value = entity.value || value;
                    return entity;
                });
            }
            else {
                this.entities = null;
            }
            this.operatorsCache = {};
        }
        else {
            throw new Error("Expected 'config' must be a valid object, got " + type + " instead.");
        }
    };
    // ----------Validator Implementation----------
    QueryBuilderComponent.prototype.validate = function (control) {
        var errors = {};
        var ruleErrorStore = [];
        var hasErrors = false;
        if (!this.config.allowEmptyRulesets && this.checkEmptyRuleInRuleset(this.data)) {
            errors.empty = 'Empty rulesets are not allowed.';
            hasErrors = true;
        }
        this.validateRulesInRuleset(this.data, ruleErrorStore);
        if (ruleErrorStore.length) {
            errors.rules = ruleErrorStore;
            hasErrors = true;
        }
        return hasErrors ? errors : null;
    };
    Object.defineProperty(QueryBuilderComponent.prototype, "value", {
        // ----------ControlValueAccessor Implementation----------
        get: function () {
            return this.data;
        },
        set: function (value) {
            // When component is initialized without a formControl, null is passed to value
            this.data = value || { condition: 'and', rules: [] };
            this.handleDataChange();
        },
        enumerable: true,
        configurable: true
    });
    QueryBuilderComponent.prototype.writeValue = function (obj) {
        this.value = obj;
    };
    QueryBuilderComponent.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChangeCallback = function () { return fn(_this.data); };
    };
    QueryBuilderComponent.prototype.registerOnTouched = function (fn) {
        var _this = this;
        this.onTouchedCallback = function () { return fn(_this.data); };
    };
    QueryBuilderComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.changeDetectorRef.detectChanges();
    };
    // ----------END----------
    QueryBuilderComponent.prototype.getDisabledState = function () {
        return this.disabled;
    };
    QueryBuilderComponent.prototype.findTemplateForRule = function (rule) {
        var type = this.getInputType(rule.field, rule.operator);
        if (type) {
            var queryInput = this.findQueryInput(type);
            if (queryInput) {
                return queryInput.template;
            }
            else {
                if (this.defaultTemplateTypes.indexOf(type) === -1) {
                    console.warn("Could not find template for field with type: " + type);
                }
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.findQueryInput = function (type) {
        var templates = this.parentInputTemplates || this.inputTemplates;
        return templates.find(function (item) { return item.queryInputType === type; });
    };
    QueryBuilderComponent.prototype.getOperators = function (field) {
        if (this.operatorsCache[field]) {
            return this.operatorsCache[field];
        }
        var operators = this.defaultEmptyList;
        var fieldObject = this.config.fields[field];
        if (this.config.getOperators) {
            return this.config.getOperators(field, fieldObject);
        }
        var type = fieldObject.type;
        if (fieldObject && fieldObject.operators) {
            operators = fieldObject.operators;
        }
        else if (type) {
            operators = (this.operatorMap && this.operatorMap[type]) || this.defaultOperatorMap[type] || this.defaultEmptyList;
            if (operators.length === 0) {
                console.warn("No operators found for field '" + field + "' with type " + fieldObject.type + ". " +
                    "Please define an 'operators' property on the field or use the 'operatorMap' binding to fix this.");
            }
            if (fieldObject.nullable) {
                operators = operators.concat(['is null', 'is not null']);
            }
        }
        else {
            console.warn("No 'type' property found on field: '" + field + "'");
        }
        // Cache reference to array object, so it won't be computed next time and trigger a rerender.
        this.operatorsCache[field] = operators;
        return operators;
    };
    QueryBuilderComponent.prototype.getFields = function (entity) {
        if (this.entities && entity) {
            return this.fields.filter(function (field) {
                return field && field.entity === entity;
            });
        }
        else {
            return this.fields;
        }
    };
    QueryBuilderComponent.prototype.getInputType = function (field, operator) {
        if (this.config.getInputType) {
            return this.config.getInputType(field, operator);
        }
        var type = this.config.fields[field].type;
        switch (operator) {
            case 'is null':
            case 'is not null':
                return null; // No displayed component
            case 'in':
            case 'not in':
                return type === 'category' || type === 'boolean' ? 'multiselect' : type;
            default:
                return type;
        }
    };
    QueryBuilderComponent.prototype.getOptions = function (field) {
        if (this.config.getOptions) {
            return this.config.getOptions(field);
        }
        return this.config.fields[field].options || this.defaultEmptyList;
    };
    QueryBuilderComponent.prototype.getClassNames = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var clsLookup = this.classNames ? this.classNames : this.defaultClassNames;
        var classNames = args.map(function (id) { return clsLookup[id] || _this.defaultClassNames[id]; }).filter(function (c) { return !!c; });
        return classNames.length ? classNames.join(' ') : null;
    };
    QueryBuilderComponent.prototype.getDefaultField = function (entity) {
        if (!entity) {
            return null;
        }
        else if (entity.defaultField !== undefined) {
            return this.getDefaultValue(entity.defaultField);
        }
        else {
            var entityFields = this.fields.filter(function (field) {
                return field && field.entity === entity.value;
            });
            if (entityFields && entityFields.length) {
                return entityFields[0];
            }
            else {
                console.warn("No fields found for entity '" + entity.name + "'. " +
                    "A 'defaultOperator' is also not specified on the field config. Operator value will default to null.");
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.getDefaultOperator = function (field) {
        if (field && field.defaultOperator !== undefined) {
            return this.getDefaultValue(field.defaultOperator);
        }
        else {
            var operators = this.getOperators(field.value);
            if (operators && operators.length) {
                return operators[0];
            }
            else {
                console.warn("No operators found for field '" + field.value + "'. " +
                    "A 'defaultOperator' is also not specified on the field config. Operator value will default to null.");
                return null;
            }
        }
    };
    QueryBuilderComponent.prototype.addRule = function (parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.addRule) {
            this.config.addRule(parent);
        }
        else {
            var field = this.fields[0];
            parent.rules = parent.rules.concat([{
                    field: field.value,
                    operator: this.getDefaultOperator(field),
                    value: this.getDefaultValue(field.defaultValue),
                    entity: field.entity
                }]);
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.removeRule = function (rule, parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.removeRule) {
            this.config.removeRule(rule, parent);
        }
        else {
            parent.rules = parent.rules.filter(function (r) { return r !== rule; });
        }
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.entityContextCache.delete(rule);
        this.removeButtonContextCache.delete(rule);
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.addRuleSet = function (parent) {
        if (this.disabled) {
            return;
        }
        parent = parent || this.data;
        if (this.config.addRuleSet) {
            this.config.addRuleSet(parent);
        }
        else {
            parent.rules = parent.rules.concat([{ condition: 'and', rules: [] }]);
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.removeRuleSet = function (ruleset, parent) {
        if (this.disabled) {
            return;
        }
        ruleset = ruleset || this.data;
        parent = parent || this.parentValue;
        if (this.config.removeRuleSet) {
            this.config.removeRuleSet(ruleset, parent);
        }
        else {
            parent.rules = parent.rules.filter(function (r) { return r !== ruleset; });
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeCondition = function (value) {
        if (this.disabled) {
            return;
        }
        this.data.condition = value;
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeOperator = function () {
        if (this.disabled) {
            return;
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeInput = function () {
        if (this.disabled) {
            return;
        }
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeField = function (fieldValue, rule) {
        if (this.disabled) {
            return;
        }
        var field = this.config.fields[fieldValue];
        if (field && field.defaultValue !== undefined) {
            rule.value = this.getDefaultValue(field.defaultValue);
        }
        else {
            delete rule.value;
        }
        rule.operator = this.getDefaultOperator(field);
        // Create new context objects so templates will automatically update
        this.inputContextCache.delete(rule);
        this.operatorContextCache.delete(rule);
        this.fieldContextCache.delete(rule);
        this.entityContextCache.delete(rule);
        this.getInputContext(rule);
        this.getFieldContext(rule);
        this.getOperatorContext(rule);
        this.getEntityContext(rule);
        this.handleTouched();
        this.handleDataChange();
    };
    QueryBuilderComponent.prototype.changeEntity = function (entityValue, rule) {
        if (this.disabled) {
            return;
        }
        var entity = this.entities.find(function (e) { return e.value === entityValue; });
        var defaultField = this.getDefaultField(entity);
        if (defaultField) {
            this.changeField(defaultField.value, rule);
        }
        else {
            this.handleTouched();
            this.handleDataChange();
        }
    };
    QueryBuilderComponent.prototype.getDefaultValue = function (defaultValue) {
        switch (typeof defaultValue) {
            case 'function':
                return defaultValue();
            default:
                return defaultValue;
        }
    };
    QueryBuilderComponent.prototype.getOperatorTemplate = function () {
        var t = this.parentOperatorTemplate || this.operatorTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getFieldTemplate = function () {
        var t = this.parentFieldTemplate || this.fieldTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getEntityTemplate = function () {
        var t = this.parentEntityTemplate || this.entityTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getButtonGroupTemplate = function () {
        var t = this.parentButtonGroupTemplate || this.buttonGroupTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getSwitchGroupTemplate = function () {
        var t = this.parentSwitchGroupTemplate || this.switchGroupTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getRemoveButtonTemplate = function () {
        var t = this.parentRemoveButtonTemplate || this.removeButtonTemplate;
        return t ? t.template : null;
    };
    QueryBuilderComponent.prototype.getQueryItemClassName = function (local) {
        var cls = this.getClassNames('row', 'connector', 'transition');
        cls += ' ' + this.getClassNames(local.ruleset ? 'ruleSet' : 'rule');
        if (local.invalid) {
            cls += ' ' + this.getClassNames('invalidRuleSet');
        }
        return cls;
    };
    QueryBuilderComponent.prototype.getButtonGroupContext = function () {
        if (!this.buttonGroupContext) {
            this.buttonGroupContext = {
                addRule: this.addRule.bind(this),
                addRuleSet: this.allowRuleset && this.addRuleSet.bind(this),
                removeRuleSet: this.allowRuleset && this.parentValue && this.removeRuleSet.bind(this),
                getDisabledState: this.getDisabledState.bind(this),
                $implicit: this.data
            };
        }
        return this.buttonGroupContext;
    };
    QueryBuilderComponent.prototype.getRemoveButtonContext = function (rule) {
        if (!this.removeButtonContextCache.has(rule)) {
            this.removeButtonContextCache.set(rule, {
                removeRule: this.removeRule.bind(this),
                getDisabledState: this.getDisabledState.bind(this),
                $implicit: rule
            });
        }
        return this.removeButtonContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getFieldContext = function (rule) {
        if (!this.fieldContextCache.has(rule)) {
            this.fieldContextCache.set(rule, {
                onChange: this.changeField.bind(this),
                getFields: this.getFields.bind(this),
                getDisabledState: this.getDisabledState.bind(this),
                fields: this.fields,
                $implicit: rule
            });
        }
        return this.fieldContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getEntityContext = function (rule) {
        if (!this.entityContextCache.has(rule)) {
            this.entityContextCache.set(rule, {
                onChange: this.changeEntity.bind(this),
                getDisabledState: this.getDisabledState.bind(this),
                entities: this.entities,
                $implicit: rule
            });
        }
        return this.entityContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getSwitchGroupContext = function () {
        return {
            onChange: this.changeCondition.bind(this),
            getDisabledState: this.getDisabledState.bind(this),
            $implicit: this.data
        };
    };
    QueryBuilderComponent.prototype.getOperatorContext = function (rule) {
        if (!this.operatorContextCache.has(rule)) {
            this.operatorContextCache.set(rule, {
                onChange: this.changeOperator.bind(this),
                getDisabledState: this.getDisabledState.bind(this),
                operators: this.getOperators(rule.field),
                $implicit: rule
            });
        }
        return this.operatorContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.getInputContext = function (rule) {
        if (!this.inputContextCache.has(rule)) {
            this.inputContextCache.set(rule, {
                onChange: this.changeInput.bind(this),
                getDisabledState: this.getDisabledState.bind(this),
                options: this.getOptions(rule.field),
                field: this.config.fields[rule.field],
                $implicit: rule
            });
        }
        return this.inputContextCache.get(rule);
    };
    QueryBuilderComponent.prototype.checkEmptyRuleInRuleset = function (ruleset) {
        var _this = this;
        if (!ruleset || !ruleset.rules || ruleset.rules.length === 0) {
            return true;
        }
        else {
            return ruleset.rules.some(function (item) {
                if (item.rules) {
                    return _this.checkEmptyRuleInRuleset(item);
                }
                else {
                    return false;
                }
            });
        }
    };
    QueryBuilderComponent.prototype.validateRulesInRuleset = function (ruleset, errorStore) {
        var _this = this;
        if (ruleset && ruleset.rules && ruleset.rules.length > 0) {
            ruleset.rules.forEach(function (item) {
                if (item.rules) {
                    return _this.validateRulesInRuleset(item, errorStore);
                }
                else if (item.field) {
                    var field = _this.config.fields[item.field];
                    if (field && field.validator && field.validator.apply) {
                        var error = field.validator(item, ruleset);
                        if (error != null) {
                            errorStore.push(error);
                        }
                    }
                }
            });
        }
    };
    QueryBuilderComponent.prototype.handleDataChange = function () {
        this.changeDetectorRef.markForCheck();
        if (this.onChangeCallback) {
            this.onChangeCallback();
        }
        if (this.parentChangeCallback) {
            this.parentChangeCallback();
        }
    };
    QueryBuilderComponent.prototype.handleTouched = function () {
        if (this.onTouchedCallback) {
            this.onTouchedCallback();
        }
        if (this.parentTouchedCallback) {
            this.parentTouchedCallback();
        }
    };
    QueryBuilderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"], args: [{
                    selector: 'query-builder',
                    template: "\n    <div [ngClass]=\"getClassNames('switchRow')\">\n      <ng-container *ngIf=\"getButtonGroupTemplate() as template; else defaultButtonGroup\">\n        <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n          <ng-container *ngTemplateOutlet=\"template; context: getButtonGroupContext()\"></ng-container>\n        </div>\n      </ng-container>\n\n      <ng-template #defaultButtonGroup>\n        <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n          <button (click)=\"addRule()\" [ngClass]=\"getClassNames('button')\" [disabled]=disabled>\n            <i [ngClass]=\"getClassNames('addIcon')\"></i> Rule\n          </button>\n          <button (click)=\"addRuleSet()\" [ngClass]=\"getClassNames('button')\" *ngIf=\"allowRuleset\" [disabled]=disabled>\n            <i [ngClass]=\"getClassNames('addIcon')\"></i> Ruleset\n          </button>\n          <ng-container *ngIf=\"!!parentValue && allowRuleset\">\n            <button (click)=\"removeRuleSet()\" [ngClass]=\"getClassNames('button', 'removeButton')\" [disabled]=disabled>\n              <i [ngClass]=\"getClassNames('removeIcon')\"></i>\n            </button>\n          </ng-container>\n        </div>\n      </ng-template>\n\n      <ng-container *ngIf=\"getSwitchGroupTemplate() as template; else defaultSwitchGroup\">\n        <ng-container *ngTemplateOutlet=\"template; context: getSwitchGroupContext()\"></ng-container>\n      </ng-container>\n\n      <ng-template #defaultSwitchGroup>\n        <div [ngClass]=\"getClassNames('switchGroup', 'transition')\" *ngIf=\"data\">\n          <div [ngClass]=\"getClassNames('switchControl')\">\n            <input type=\"radio\" [ngClass]=\"getClassNames('switchRadio')\" [(ngModel)]=\"data.condition\" [disabled]=disabled value=\"and\" #andOption/>\n            <label (click)=\"changeCondition(andOption.value)\" [ngClass]=\"getClassNames('switchLabel')\">AND</label>\n          </div>\n          <div [ngClass]=\"getClassNames('switchControl')\">\n            <input type=\"radio\" [ngClass]=\"getClassNames('switchRadio')\" [(ngModel)]=\"data.condition\" [disabled]=disabled value=\"or\" #orOption/>\n            <label (click)=\"changeCondition(orOption.value)\" [ngClass]=\"getClassNames('switchLabel')\">OR</label>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n\n    <ul [ngClass]=\"getClassNames('tree')\" *ngIf=\"data && data.rules\">\n      <ng-container *ngFor=\"let rule of data.rules\">\n        <ng-container *ngIf=\"{ruleset: !!rule.rules, invalid: !config.allowEmptyRulesets && rule.rules && rule.rules.length === 0} as local\">\n          <li [ngClass]=\"getQueryItemClassName(local)\">\n            <ng-container *ngIf=\"!local.ruleset\">\n\n              <ng-container *ngIf=\"getRemoveButtonTemplate() as template; else defaultRemoveButton\">\n                <div [ngClass]=\"getClassNames('buttonGroup', 'rightAlign')\">\n                  <ng-container *ngTemplateOutlet=\"template; context: getRemoveButtonContext(rule)\"></ng-container>\n                </div>\n              </ng-container>\n\n              <ng-template #defaultRemoveButton>\n                <div [ngClass]=\"getClassNames('removeButtonSize', 'rightAlign')\">\n                  <button [ngClass]=\"getClassNames('button', 'removeButton')\" (click)=\"removeRule(rule, data)\" [disabled]=disabled>\n                    <i [ngClass]=\"getClassNames('removeIcon')\"></i>\n                  </button>\n                </div>\n              </ng-template>\n\n              <div *ngIf=\"entities?.length > 0\" class=\"q-inline-block-display\" >\n                <ng-container *ngIf=\"getEntityTemplate() as template; else defaultEntity\">\n                  <ng-container *ngTemplateOutlet=\"template; context: getEntityContext(rule)\"></ng-container>\n                </ng-container>\n              </div>\n\n              <ng-template #defaultEntity>\n                <div [ngClass]=\"getClassNames('entityControlSize')\">\n                  <select [ngClass]=\"getClassNames('entityControl')\" [(ngModel)]=\"rule.entity\" (ngModelChange)=\"changeEntity($event, rule)\" [disabled]=\"disabled\">\n                    <option *ngFor=\"let entity of entities\" [ngValue]=\"entity.value\">\n                      {{entity.name}}\n                    </option>\n                  </select>\n                </div>\n              </ng-template>\n\n              <ng-container *ngIf=\"getFieldTemplate() as template; else defaultField\">\n                <ng-container *ngTemplateOutlet=\"template; context: getFieldContext(rule)\"></ng-container>\n              </ng-container>\n\n              <ng-template #defaultField>\n                <div [ngClass]=\"getClassNames('fieldControlSize')\">\n                  <select [ngClass]=\"getClassNames('fieldControl')\" [(ngModel)]=\"rule.field\" (ngModelChange)=\"changeField($event, rule)\" [disabled]=\"disabled\">\n                    <option *ngFor=\"let field of getFields(rule.entity)\" [ngValue]=\"field.value\">\n                      {{field.name}}\n                    </option>\n                  </select>\n                </div>\n              </ng-template>\n\n              <ng-container *ngIf=\"getOperatorTemplate() as template; else defaultOperator\">\n                <ng-container *ngTemplateOutlet=\"template; context: getOperatorContext(rule)\"></ng-container>\n              </ng-container>\n\n              <ng-template #defaultOperator>\n                <div [ngClass]=\"getClassNames('operatorControlSize')\">\n                  <select [ngClass]=\"getClassNames('operatorControl')\" [(ngModel)]=\"rule.operator\" (ngModelChange)=\"changeOperator()\" [disabled]=\"disabled\">\n                    <option *ngFor=\"let operator of getOperators(rule.field)\" [ngValue]=\"operator\">\n                      {{operator}}\n                    </option>\n                  </select>\n                </div>\n              </ng-template>\n\n              <ng-container *ngIf=\"findTemplateForRule(rule) as template; else defaultInput\">\n                <ng-container *ngTemplateOutlet=\"template; context: getInputContext(rule)\"></ng-container>\n              </ng-container>\n\n              <ng-template #defaultInput>\n                <div [ngClass]=\"getClassNames('inputControlSize')\" [ngSwitch]=\"getInputType(rule.field, rule.operator)\">\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\" *ngSwitchCase=\"'string'\" type=\"text\">\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\" *ngSwitchCase=\"'number'\" type=\"number\">\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\" *ngSwitchCase=\"'date'\" type=\"date\">\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\" *ngSwitchCase=\"'time'\" type=\"time\">\n                  <select [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\" *ngSwitchCase=\"'category'\">\n                    <option *ngFor=\"let opt of getOptions(rule.field)\" [ngValue]=\"opt.value\">\n                      {{opt.name}}\n                    </option>\n                  </select>\n                  <ng-container *ngSwitchCase=\"'multiselect'\">\n                    <select [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\" multiple>\n                      <option *ngFor=\"let opt of getOptions(rule.field)\" [ngValue]=\"opt.value\">\n                        {{opt.name}}\n                      </option>\n                    </select>\n                  </ng-container>\n                  <input [ngClass]=\"getClassNames('inputControl')\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"changeInput()\" [disabled]=\"disabled\" *ngSwitchCase=\"'boolean'\" type=\"checkbox\">\n                </div>\n              </ng-template>\n\n            </ng-container>\n            <query-builder *ngIf=\"local.ruleset\"\n              [data]=\"rule\"\n              [disabled]=\"disabled\"\n              [parentTouchedCallback]=\"parentTouchedCallback || onTouchedCallback\"\n              [parentChangeCallback]=\"parentChangeCallback || onChangeCallback\"\n              [parentInputTemplates]=\"parentInputTemplates || inputTemplates\"\n              [parentOperatorTemplate]=\"parentOperatorTemplate || operatorTemplate\"\n              [parentFieldTemplate]=\"parentFieldTemplate || fieldTemplate\"\n              [parentEntityTemplate]=\"parentEntityTemplate || entityTemplate\"\n              [parentSwitchGroupTemplate]=\"parentSwitchGroupTemplate || switchGroupTemplate\"\n              [parentButtonGroupTemplate]=\"parentButtonGroupTemplate || buttonGroupTemplate\"\n              [parentRemoveButtonTemplate]=\"parentRemoveButtonTemplate || removeButtonTemplate\"\n              [parentValue]=\"data\"\n              [classNames]=\"classNames\"\n              [config]=\"config\"\n              [allowRuleset]=\"allowRuleset\"\n              [operatorMap]=\"operatorMap\">\n            </query-builder>\n            <p [ngClass]=\"getClassNames('emptyWarning')\" *ngIf=\"local.invalid\">A ruleset cannot be empty. Please add a rule or remove it all together.</p>\n          </li>\n        </ng-container>\n      </ng-container>\n    </ul>\n  ",
                    styles: ["\n    \uFEFF:host{display:block;width:100%}:host .q-icon{font-style:normal;font-size:12px}:host .q-remove-icon::before{content:'\u274C'}:host .q-add-icon{color:#555}:host .q-add-icon::before{content:'\u2795'}:host .q-remove-button{color:#B3415D;width:31px}:host .q-switch-group,:host .q-button-group{font-family:\"Lucida Grande\", Tahoma, Verdana, sans-serif;overflow:hidden}:host .q-right-align{float:right}:host .q-button{margin-left:8px;padding:0 8px;background-color:white}:host .q-button:disabled{display:none}:host .q-control-size{display:inline-block;vertical-align:top;padding-right:10px}:host .q-input-control,:host .q-operator-control,:host .q-field-control,:host .q-entity-control{display:inline-block;padding:5px 8px;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;width:auto}:host .q-input-control:disabled,:host .q-operator-control:disabled,:host .q-field-control:disabled,:host .q-entity-control:disabled{border-color:transparent}:host .q-operator-control,:host .q-field-control,:host .q-entity-control,:host .q-input-control:not([type='checkbox']){min-height:32px;-webkit-appearance:none}:host .q-switch-label,:host .q-button{float:left;margin-bottom:0;font-size:14px;line-height:30px;font-weight:normal;text-align:center;text-shadow:none;border:1px solid rgba(0,0,0,0.2);box-sizing:border-box}:host .q-switch-label:hover,:host .q-button:hover{cursor:pointer;background-color:#F0F0F0}:host .q-switch-label{background-color:#e4e4e4;padding:0 8px}:host .q-switch-radio{position:absolute;clip:rect(0, 0, 0, 0);height:1px;width:1px;border:0;overflow:hidden}:host .q-switch-radio:checked+.q-switch-label{border:1px solid #619ed7;background:white;color:#3176b3}:host .q-switch-radio:disabled+.q-switch-label{display:none}:host .q-switch-radio:checked:disabled+.q-switch-label{display:initial;color:initial;cursor:default;border-color:transparent}:host .q-invalid-ruleset{border:1px solid rgba(179,65,93,0.5) !important;background:rgba(179,65,93,0.1) !important}:host .q-empty-warning{color:#8d252e;text-align:center}:host .q-ruleset{border:1px solid #CCC}:host .q-rule{border:1px solid #CCC;background:white}:host .q-transition{-webkit-transition:all 0.1s ease-in-out;-moz-transition:all 0.1s ease-in-out;-ms-transition:all 0.1s ease-in-out;-o-transition:all 0.1s ease-in-out;transition:all 0.1s ease-in-out}:host .q-tree{list-style:none;margin:4px 0 2px}:host .q-row{padding:6px 8px;margin-top:6px}:host .q-connector{position:relative}:host .q-connector::before{top:-5px;border-width:0 0 2px 2px}:host .q-connector::after{border-width:0 0 0 2px;top:50%}:host .q-connector::before,:host .q-connector::after{content:'';left:-12px;border-color:#CCC;border-style:solid;width:9px;height:calc(50% + 6px);position:absolute}:host .q-connector:last-child::after{content:none}:host .q-inline-block-display{display:inline-block;vertical-align:top}\n  "],
                    providers: [CONTROL_VALUE_ACCESSOR, VALIDATOR]
                },] },
    ];
    /** @nocollapse */
    QueryBuilderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ChangeDetectorRef"], },
    ]; };
    QueryBuilderComponent.propDecorators = {
        'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'data': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'allowRuleset': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'classNames': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'operatorMap': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentValue': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentInputTemplates': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentOperatorTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentFieldTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentEntityTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentSwitchGroupTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentButtonGroupTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentRemoveButtonTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentChangeCallback': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'parentTouchedCallback': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
        'buttonGroupTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [_query_button_group_directive__WEBPACK_IMPORTED_MODULE_5__["QueryButtonGroupDirective"],] },],
        'switchGroupTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [_query_switch_group_directive__WEBPACK_IMPORTED_MODULE_4__["QuerySwitchGroupDirective"],] },],
        'fieldTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [_query_field_directive__WEBPACK_IMPORTED_MODULE_2__["QueryFieldDirective"],] },],
        'entityTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [_query_entity_directive__WEBPACK_IMPORTED_MODULE_3__["QueryEntityDirective"],] },],
        'operatorTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [_query_operator_directive__WEBPACK_IMPORTED_MODULE_1__["QueryOperatorDirective"],] },],
        'removeButtonTemplate': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChild"], args: [_query_remove_button_directive__WEBPACK_IMPORTED_MODULE_7__["QueryRemoveButtonDirective"],] },],
        'inputTemplates': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["ContentChildren"], args: [_query_input_directive__WEBPACK_IMPORTED_MODULE_6__["QueryInputDirective"],] },],
        'value': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["Input"] },],
    };
    return QueryBuilderComponent;
}());

//# sourceMappingURL=query-builder.component.js.map

/***/ }),

/***/ "./lib/components/query-builder/query-button-group.directive.js":
/*!**********************************************************************!*\
  !*** ./lib/components/query-builder/query-button-group.directive.js ***!
  \**********************************************************************/
/*! exports provided: QueryButtonGroupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryButtonGroupDirective", function() { return QueryButtonGroupDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var QueryButtonGroupDirective = /** @class */ (function () {
    function QueryButtonGroupDirective(template) {
        this.template = template;
    }
    QueryButtonGroupDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[queryButtonGroup]' },] },
    ];
    /** @nocollapse */
    QueryButtonGroupDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return QueryButtonGroupDirective;
}());

//# sourceMappingURL=query-button-group.directive.js.map

/***/ }),

/***/ "./lib/components/query-builder/query-entity.directive.js":
/*!****************************************************************!*\
  !*** ./lib/components/query-builder/query-entity.directive.js ***!
  \****************************************************************/
/*! exports provided: QueryEntityDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEntityDirective", function() { return QueryEntityDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var QueryEntityDirective = /** @class */ (function () {
    function QueryEntityDirective(template) {
        this.template = template;
    }
    QueryEntityDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[queryEntity]' },] },
    ];
    /** @nocollapse */
    QueryEntityDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return QueryEntityDirective;
}());

//# sourceMappingURL=query-entity.directive.js.map

/***/ }),

/***/ "./lib/components/query-builder/query-field.directive.js":
/*!***************************************************************!*\
  !*** ./lib/components/query-builder/query-field.directive.js ***!
  \***************************************************************/
/*! exports provided: QueryFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryFieldDirective", function() { return QueryFieldDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var QueryFieldDirective = /** @class */ (function () {
    function QueryFieldDirective(template) {
        this.template = template;
    }
    QueryFieldDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[queryField]' },] },
    ];
    /** @nocollapse */
    QueryFieldDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return QueryFieldDirective;
}());

//# sourceMappingURL=query-field.directive.js.map

/***/ }),

/***/ "./lib/components/query-builder/query-input.directive.js":
/*!***************************************************************!*\
  !*** ./lib/components/query-builder/query-input.directive.js ***!
  \***************************************************************/
/*! exports provided: QueryInputDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInputDirective", function() { return QueryInputDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var QueryInputDirective = /** @class */ (function () {
    function QueryInputDirective(template) {
        this.template = template;
    }
    Object.defineProperty(QueryInputDirective.prototype, "queryInputType", {
        /** Unique name for query input type. */
        get: function () { return this._type; },
        set: function (value) {
            // If the directive is set without a type (updated programatically), then this setter will
            // trigger with an empty string and should not overwrite the programatically set value.
            if (!value) {
                return;
            }
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    QueryInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[queryInput]' },] },
    ];
    /** @nocollapse */
    QueryInputDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    QueryInputDirective.propDecorators = {
        'queryInputType': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return QueryInputDirective;
}());

//# sourceMappingURL=query-input.directive.js.map

/***/ }),

/***/ "./lib/components/query-builder/query-operator.directive.js":
/*!******************************************************************!*\
  !*** ./lib/components/query-builder/query-operator.directive.js ***!
  \******************************************************************/
/*! exports provided: QueryOperatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryOperatorDirective", function() { return QueryOperatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var QueryOperatorDirective = /** @class */ (function () {
    function QueryOperatorDirective(template) {
        this.template = template;
    }
    QueryOperatorDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[queryOperator]' },] },
    ];
    /** @nocollapse */
    QueryOperatorDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return QueryOperatorDirective;
}());

//# sourceMappingURL=query-operator.directive.js.map

/***/ }),

/***/ "./lib/components/query-builder/query-remove-button.directive.js":
/*!***********************************************************************!*\
  !*** ./lib/components/query-builder/query-remove-button.directive.js ***!
  \***********************************************************************/
/*! exports provided: QueryRemoveButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryRemoveButtonDirective", function() { return QueryRemoveButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var QueryRemoveButtonDirective = /** @class */ (function () {
    function QueryRemoveButtonDirective(template) {
        this.template = template;
    }
    QueryRemoveButtonDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[queryRemoveButton]' },] },
    ];
    /** @nocollapse */
    QueryRemoveButtonDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return QueryRemoveButtonDirective;
}());

//# sourceMappingURL=query-remove-button.directive.js.map

/***/ }),

/***/ "./lib/components/query-builder/query-switch-group.directive.js":
/*!**********************************************************************!*\
  !*** ./lib/components/query-builder/query-switch-group.directive.js ***!
  \**********************************************************************/
/*! exports provided: QuerySwitchGroupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuerySwitchGroupDirective", function() { return QuerySwitchGroupDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var QuerySwitchGroupDirective = /** @class */ (function () {
    function QuerySwitchGroupDirective(template) {
        this.template = template;
    }
    QuerySwitchGroupDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[querySwitchGroup]' },] },
    ];
    /** @nocollapse */
    QuerySwitchGroupDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
    ]; };
    return QuerySwitchGroupDirective;
}());

//# sourceMappingURL=query-switch-group.directive.js.map

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: QueryBuilderComponent, QueryBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./lib/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryBuilderComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["QueryBuilderComponent"]; });

/* harmony import */ var _query_builder_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-builder.module */ "./lib/query-builder.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryBuilderModule", function() { return _query_builder_module__WEBPACK_IMPORTED_MODULE_1__["QueryBuilderModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./lib/query-builder.module.js":
/*!*************************************!*\
  !*** ./lib/query-builder.module.js ***!
  \*************************************/
/*! exports provided: QueryBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryBuilderModule", function() { return QueryBuilderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./lib/components/index.js");




var QueryBuilderModule = /** @class */ (function () {
    function QueryBuilderModule() {
    }
    QueryBuilderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                    ],
                    declarations: [
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryBuilderComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryInputDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryOperatorDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryFieldDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryEntityDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryButtonGroupDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QuerySwitchGroupDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryRemoveButtonDirective"]
                    ],
                    exports: [
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryBuilderComponent"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryInputDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryOperatorDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryFieldDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryEntityDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryButtonGroupDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QuerySwitchGroupDirective"],
                        _components__WEBPACK_IMPORTED_MODULE_3__["QueryRemoveButtonDirective"]
                    ]
                },] },
    ];
    /** @nocollapse */
    QueryBuilderModule.ctorParameters = function () { return []; };
    return QueryBuilderModule;
}());

//# sourceMappingURL=query-builder.module.js.map

/***/ }),

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
        this.queryCtrl = this.formBuilder.control(this.query);
        this.currentConfig = this.config;
    }
    AppComponent.prototype.switchModes = function (event) {
        this.currentConfig = event.target.checked ? this.entityConfig : this.config;
    };
    AppComponent.prototype.changeDisabled = function (event) {
        event.target.checked ? this.queryCtrl.disable() : this.queryCtrl.enable();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n  <h2>Vanilla</h2>\n  <br>\n  <query-builder [formControl]='queryCtrl' [config]='currentConfig'>\n    <ng-container *queryInput=\"let rule; type: 'textarea'; let getDisabledState=getDisabledState\">\n      <textarea class=\"text-input text-area\" [(ngModel)]=\"rule.value\" [disabled]=getDisabledState()\n        placeholder=\"Custom Textarea\"></textarea>\n    </ng-container>\n  </query-builder>\n  <br>\n  <div>\n    <div class=\"row\">\n      <p class=\"col-6\">Control Valid (Vanilla): {{ queryCtrl.valid }}</p>\n      <div class=\"col-6\">\n        <label><input type=\"checkbox\" (change)=switchModes($event)>Entity Mode</label>\n      </div>\n    </div>\n    <div class=\"row\">\n      <p class=\"col-6\">Control Touched (Vanilla): {{ queryCtrl.touched }}</p>\n      <div class=\"col-6\">\n        <label><input type=\"checkbox\" (change)=changeDisabled($event)>Disabled</label>\n      </div>\n    </div>\n    <textarea class=\"output\">{{query | json}}</textarea>\n  </div>\n  <br>\n  <h2>Custom Material</h2>\n  <br>\n  <mat-card>\n  <query-builder [(ngModel)]='query' [config]='currentConfig'>\n    <ng-container *queryButtonGroup=\"let ruleset; let addRule=addRule; let addRuleSet=addRuleSet; let removeRuleSet=removeRuleSet\">\n      <button mat-icon-button color=\"primary\" (click)=\"addRule()\">\n        <mat-icon>add</mat-icon></button>\n      <button mat-icon-button color=\"primary\" *ngIf=\"addRuleSet\" (click)=\"addRuleSet()\">\n        <mat-icon>add_circle_outline</mat-icon></button>\n      <button mat-icon-button color=\"accent\" *ngIf=\"removeRuleSet\" (click)=\"removeRuleSet()\">\n        <mat-icon>remove_circle_outline</mat-icon></button>\n    </ng-container>\n    <ng-container *queryRemoveButton=\"let rule; let removeRule=removeRule\">\n      <button mat-icon-button color=\"accent\" (click)=\"removeRule(rule)\">\n        <mat-icon>remove</mat-icon>\n      </button>\n    </ng-container>\n    <ng-container *querySwitchGroup=\"let ruleset; let onChange=onChange\">\n      <mat-radio-group *ngIf=\"ruleset\" [(ngModel)]=\"ruleset.condition\" (ngModelChange)=\"onChange($event)\">\n        <mat-radio-button [style.padding.px]=\"10\" value=\"and\">And</mat-radio-button>\n        <mat-radio-button [style.padding.px]=\"10\" value=\"or\">Or</mat-radio-button>\n      </mat-radio-group>\n    </ng-container>\n    <ng-container *queryEntity=\"let rule; let entities=entities; let onChange=onChange\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"rule.entity\" (ngModelChange)=\"onChange($event, rule)\">\n          <mat-option *ngFor=\"let entity of entities\" [value]=\"entity.value\">\n          {{entity.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryField=\"let rule; let fields=fields; let onChange=onChange; let getFields = getFields\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"rule.field\" (ngModelChange)=\"onChange($event, rule)\">\n          <mat-option *ngFor=\"let field of getFields(rule.entity)\" [value]=\"field.value\">\n            {{ field.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryOperator=\"let rule; let operators=operators; let onChange=onChange\">\n      <mat-form-field [style.width.px]=\"90\">\n        <mat-select [(ngModel)]=\"rule.operator\" (ngModelChange)=\"onChange()\">\n          <mat-option *ngFor=\"let value of operators\" [value]=\"value\">\n            {{ value }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; type: 'boolean'; let onChange=onChange\">\n      <mat-checkbox [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\"></mat-checkbox>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let field=field; let options=options; type: 'category'; let onChange=onChange\">\n      <mat-form-field>\n        <mat-select [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\n          <mat-option *ngFor=\"let opt of options\" [value]=\"opt.value\">\n            {{ opt.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; type: 'date'; let onChange=onChange\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let options=options; type: 'multiselect'; let onChange=onChange\">\n      <mat-form-field [style.width.px]=\"300\">\n        <mat-select [(ngModel)]=\"rule.value\" multiple (ngModelChange)=\"onChange()\">\n          <mat-option *ngFor=\"let opt of options\" [value]=\"opt.value\">\n            {{ opt.name }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let field=field; type: 'number'; let onChange=onChange\">\n      <mat-form-field [style.width.px]=\"50\">\n        <input matInput [(ngModel)]=\"rule.value\" type=\"number\" (ngModelChange)=\"onChange()\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let field=field; type: 'string'; let onChange=onChange\">\n      <mat-form-field>\n        <input matInput [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\n      </mat-form-field>\n    </ng-container>\n    <ng-container *queryInput=\"let rule; let field=field; type: 'textarea'; let onChange=onChange\">\n      <mat-form-field>\n        <textarea matInput [(ngModel)]=\"rule.value\" (ngModelChange)=\"onChange()\">\n        </textarea>\n      </mat-form-field>\n    </ng-container>\n  </query-builder>\n  </mat-card>\n  <br>\n  <h2>Bootstrap</h2>\n  <br>\n  <query-builder [(ngModel)]='query' [classNames]='bootstrapClassNames' [config]='currentConfig'>\n    <div class=\"col-auto\" *queryInput=\"let rule; type: 'textarea'\">\n      <textarea class=\"form-control\" [(ngModel)]=\"rule.value\"\n        placeholder=\"Custom Textarea\"></textarea>\n    </div>\n  </query-builder>\n  ",
            styles: ["\n  /deep/ html {\n    font: 14px sans-serif;\n    margin: 30px;\n  }\n\n  .mat-form-field {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .text-input {\n    padding: 4px 8px;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n  }\n\n  .text-area {\n    width: 300px;\n    height: 100px;\n  }\n\n  .output {\n    width: 100%;\n    height: 300px;\n  }\n  "]
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
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./lib/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
                _lib__WEBPACK_IMPORTED_MODULE_4__["QueryBuilderModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"]
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