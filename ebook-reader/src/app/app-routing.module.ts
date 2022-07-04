import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PageDetailComponent } from './staff/page-detail/page-detail.component';

const routes: Routes = [
  { path: 'ui/home', component: HomeComponent },
  { path: 'ui/page-detail', component: PageDetailComponent },
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
