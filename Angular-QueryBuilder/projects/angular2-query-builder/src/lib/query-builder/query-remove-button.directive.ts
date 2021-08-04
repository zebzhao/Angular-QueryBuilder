import { Directive, TemplateRef } from '@angular/core';

@Directive({selector: '[queryRemoveButton]'})
export class QueryRemoveButtonDirective {
  constructor(public template: TemplateRef<any>) {}
}
