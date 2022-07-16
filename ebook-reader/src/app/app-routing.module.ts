import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PageDetailComponent } from './staff/page-detail/page-detail.component';
import {SignUpComponent} from './public/sign-up/sign-up.component';
import {SignInComponent} from './public/sign-in/sign-in.component';
import {DashboardComponent} from './staff/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ui/home', component: HomeComponent },
  { path: 'ui/sign-up', component: SignUpComponent },
  { path: 'ui/sign-in', component: SignInComponent },
  { path: 'ui/page-detail', component: PageDetailComponent },
  { path: 'ui/dashboard', component: DashboardComponent },
  // { path: "", redirectTo: "ui/landing", pathMatch: "full" },
  // { path: "ui/home",
  //  loadChildren: () => import("./public/public.module").then(m => m.PublicModule) 
  // },
  // {
  //   path: "ui/page-detail",
  //   loadChildren: () => import("./staff/staff.module").then(m => m.StaffModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
