### 0.0.1
  - Initial Port of   angular-query-builder
### 0.0.2
- Add `query-builder-condition` DOM attribute to rules to enable css detection if parent condition is "AND" or "OR"
### 0.0.3
- QueryList doesn't get updated when ivy is enabled  https://github.com/raysuelzer/ngx-angular-query-builder/pull/4
Credit: @ravijoshi007
### 0.0.4
- Fix typo of RuleSet using "add" instead of "and" https://github.com/raysuelzer/ngx-angular-query-builder/pull/6  Credit: @michaelharrington
- Add a change log
### 0.0.5
- Fix remove RuleSet button being non functional when there are no RuleSets to remove https://github.com/raysuelzer/ngx-angular-query-builder/pull/7 Credit: @michaelharrington

### 13.0.0
- Angular 13 Upgrade
### 14.0.0
- Angular 14 Upgrade
### 15.0.0
 - Angular 15 upgrade
 ### 15.0.1
 - Angular 15 seems to have a subtle change which causes the templates to not be loaded into the query list when it first looks for them. Worked around by defaulting if these are undefined: this.parentInputTemplates || this.inputTemplates
 -

 ### 16.0.0
- Angular 16 version. (not fully tested, thanks mperezd)