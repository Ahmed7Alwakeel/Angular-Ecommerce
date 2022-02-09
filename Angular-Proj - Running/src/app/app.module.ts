import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardShadowDirective } from './Directive/card-shadow.directive';
import { BirthDatePipe } from './Pipes/birth-date.pipe';
import { NumberfrPipe } from './Pipes/numberfr.pipe';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {HttpClientModule } from '@angular/common/http';
import { UpdatingComponent } from './updating/updating.component';

import { EntryComponent } from './entry/entry.component';
import { UserRegisterComponent } from './user-register/user-register.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    SideComponent,
    CardShadowDirective,
    BirthDatePipe,
    NumberfrPipe,
    OrderComponent,
    ProductDetailsComponent,
    AddProductComponent,
   
    LoginComponent,
    HomeComponent,
    UpdatingComponent,
   
    EntryComponent,
    UserRegisterComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    MatSnackBarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
     ReactiveFormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
