import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'ui/home', component: HomeComponent },
]
@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule.forRoot()
  ]
})
export class PublicModule { }
