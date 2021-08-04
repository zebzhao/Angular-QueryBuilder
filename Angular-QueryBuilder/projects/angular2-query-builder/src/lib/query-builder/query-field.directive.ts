import { Directive, TemplateRef } from '@angular/core';

@Directive({selector: '[queryField]'})
export class QueryFieldDirective {
  constructor(public template: TemplateRef<any>) {}
}
