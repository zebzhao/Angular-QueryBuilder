import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';
import { QueryBuilderComponent, QueryInputDirective } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    QueryBuilderComponent,
    QueryInputDirective
  ],
  exports: [
    QueryBuilderComponent,
    QueryInputDirective
  ]
})
export class QueryBuilderModule { }
