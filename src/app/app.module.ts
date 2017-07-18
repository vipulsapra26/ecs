import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login-component.component';
import { RegisterComponent } from './register/register-component.component';
import {RouterModule, Routes} from "@angular/router";
import {Http, HttpModule} from "@angular/http";
import { RegisterUserComponent } from './register/register-user/register-user.component';
import {ReactiveFormsModule} from "@angular/forms";

const appRoutes :Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'register/:token', component: RegisterUserComponent
  },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
