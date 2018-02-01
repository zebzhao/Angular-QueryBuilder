import { Directive, ElementRef, Input, TemplateRef } from '@angular/core';

@Directive({selector: '[queryButtonGroup]'})
export class QueryButtonGroupDirective {
  constructor(public template: TemplateRef<any>) {}
}
