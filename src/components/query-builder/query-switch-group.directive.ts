import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({selector: '[querySwitchGroup]'})
export class QuerySwitchGroupDirective {
  constructor(public template: TemplateRef<any>) {}
}
