import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({selector: '[queryOperator]'})
export class QueryOperatorDirective {
  constructor(public template: TemplateRef<any>) {}
}
