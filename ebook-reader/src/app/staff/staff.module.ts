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
import { ClassListComponent } from './class-list/class-list.component';
import { ClassDetailComponent } from './class-detail/class-detail.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'ui/page-detail', component: PageDetailComponent },
]

@NgModule({
  declarations: [
    PageDetailComponent,
    BookListComponent,
    DashboardComponent,
    ClassListComponent,
    ClassDetailComponent,
    TeacherListComponent,
    TeacherDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    ShareModule.forRoot(),
    DragDropModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule
 ]
})
export class  StaffModule { }
