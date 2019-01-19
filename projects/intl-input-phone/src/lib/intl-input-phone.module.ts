import { NgModule } from '@angular/core';
import { IntlInputPhoneComponent } from './intl-input-phone.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [IntlInputPhoneComponent],
  imports: [
    CommonModule    
  ],
  exports: [IntlInputPhoneComponent]
})
export class IntlInputPhoneModule { }
