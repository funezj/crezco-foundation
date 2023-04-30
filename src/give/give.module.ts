import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiveComponent } from './give/give.component';

@NgModule({
  declarations: [GiveComponent],
  imports: [CommonModule],
  exports: [GiveComponent],
})
export class GiveModule {}
