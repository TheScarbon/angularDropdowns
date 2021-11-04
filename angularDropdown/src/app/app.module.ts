import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SbbAutocompleteModule } from '@sbb-esta/angular-public/autocomplete';
import { SbbFormFieldModule } from '@sbb-esta/angular-public/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SbbAutocompleteModule, SbbFormFieldModule, FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
