import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from '../lazy-loading.component';


const routes: Routes =[
  {path:'', redirectTo: '/lazyTest/lazyLoading', pathMatch:'full'},
  {path:'lazyLoading', component: LazyLoadingComponent},
]
@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyModule { }
