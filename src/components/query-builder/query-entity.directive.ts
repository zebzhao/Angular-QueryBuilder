import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({selector: '[queryEntity]'})
export class QueryEntityDirective {
  constructor(public template: TemplateRef<any>) {}
}
