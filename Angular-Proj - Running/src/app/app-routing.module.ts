import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EntryComponent } from './entry/entry.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdatingComponent } from './updating/updating.component';
import { UserAuthGuard } from './user-auth.guard';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  // {path: '', component: EntryComponent, children:[
  {path:'', redirectTo:"/home",pathMatch:'full'},
  {path:'Home',component: HeaderComponent},
  {path:'product',component: ProductComponent},
  {path:'userRegister',component:UserRegisterComponent},
  // {path:'addProduct', component:AddProductComponent,canActivate:[UserAuthGuard]},
  {path:'order',component:OrderComponent},
  {path:'product-details/:id', component: ProductDetailsComponent},
  
  // {
  //   path: 'lazyTest',
  //   loadChildren: () => import('src/app/lazy-loading/lazy/lazy.module')
  //                     .then(m=>m.LazyModule)
  // },
  // ]}, //lazy loading
  {path:'addProduct', component:AddProductComponent},
  {path:'updateProduct/:id', component:UpdatingComponent},
  {path:'login', component:LoginComponent},
  {path:'home',component:HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
