import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { ShareModule } from 'src/app/share/share.module';
import { BookListComponent } from './book-list/book-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'ui/page-detail', component: PageDetailComponent },
]

@NgModule({
  declarations: [
    PageDetailComponent,
    BookListComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    ShareModule.forRoot(),
    DragDropModule,
    MatIconModule
  ]
})
export class  StaffModule { }
