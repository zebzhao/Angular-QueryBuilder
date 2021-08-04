import { Directive, TemplateRef } from '@angular/core';

@Directive({selector: '[queryArrowIcon]'})
export class QueryArrowIconDirective {
  constructor(public template: TemplateRef<any>) {}
}
