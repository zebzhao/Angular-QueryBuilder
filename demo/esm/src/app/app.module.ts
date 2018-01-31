import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { QueryBuilderModule } from '../../lib';
import { NgDatepickerModule } from 'ng2-datepicker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgDatepickerModule,
    QueryBuilderModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
