import { Directive, ElementRef, Input, TemplateRef } from '@angular/core';

@Directive({selector: '[queryInput]'})
export class QueryInputDirective {
  /**
   * Transformed version of the column name that can be used as part of a CSS classname. Excludes
   * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
   * do not match are replaced by the '-' character.
   */
  cssClassFriendlyName: string;

  /** Unique name for query input type. */
  @Input()
  get queryInputType(): string { return this._type; }
  set queryInputType(value: string) {
    // If the directive is set without a type (updated programatically), then this setter will
    // trigger with an empty string and should not overwrite the programatically set value.
    if (!value) { return; }
    this._type = value;
    this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/ig, '-');
  }
  private _type: string;

  constructor(public template: TemplateRef<any>) {}
}
