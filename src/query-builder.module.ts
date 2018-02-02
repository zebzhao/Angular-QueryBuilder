import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import {
    QueryBuilderComponent,
    QueryInputDirective,
    QueryFieldDirective,
    QueryOperatorDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective
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
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective
  ],
  exports: [
    QueryBuilderComponent,
    QueryInputDirective,
    QueryOperatorDirective,
    QueryFieldDirective,
    QueryButtonGroupDirective,
    QuerySwitchGroupDirective
  ]
})
export class QueryBuilderModule { }
