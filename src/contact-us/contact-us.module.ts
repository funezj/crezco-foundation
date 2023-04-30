import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
