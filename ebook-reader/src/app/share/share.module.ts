import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    LeftMenuComponent
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
