import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import {
    QueryBuilderComponent,
    QueryInputDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryOperatorDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    QueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
  ],
  exports: [
    QueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryEntityDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective,
    QueryRemoveButtonDirective,
    QueryEmptyWarningDirective,
    QueryArrowIconDirective
  ]
})
export class QueryBuilderModule { }
