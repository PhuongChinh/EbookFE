import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class ShareModule { 
  static forRoot() {
    // pattern for adding app-wide services
    return {
      ngModule: ShareModule
    };
  }
}
