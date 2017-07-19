import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login-component.component";
import {PreRegisterComponent} from "./preregister/preregister-component.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpModule} from "@angular/http";
import {RegisterUserComponent} from "./register-user/register-user.component";
import {FormsModule} from "@angular/forms";
import {NetworkService} from "./services/network-services";

const appRoutes: Routes = [
  {path: '', component: PreRegisterComponent},
  {path: 'register', component: PreRegisterComponent},
  {path: 'register/:token', component: RegisterUserComponent},
  {path: 'login', component: LoginComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreRegisterComponent,
    RegisterUserComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
