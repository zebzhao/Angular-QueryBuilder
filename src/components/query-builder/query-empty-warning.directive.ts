import { Directive, TemplateRef } from '@angular/core';

@Directive({selector: '[queryEmptyWarning]'})
export class QueryEmptyWarningDirective {
  constructor(public template: TemplateRef<any>) {}
}
