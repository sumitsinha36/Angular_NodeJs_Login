import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestApi } from './services/rest.api';
import { DataService } from './services/data.service';
import { MessageComponent } from './message/message.component';

//npm install --save @ng-bootstrap/ng-bootstrap   // execute this cmd to install below module
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AfterLoginGuardService } from './services/after-login-guard.service';
import { MenuService } from './services/menu.service';
import { ProfileComponent } from './profile/profile.component';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: "home", component: HomeComponent, canActivate: [AfterLoginGuardService] },
      {
        path: "home", component: HomeComponent,
        children: [
          { path: 'profile', component: ProfileComponent },
        ]
      },
      {
        path: "register", component: RegisterComponent
      },
      {
        path: '', component: LoginComponent
      }
    ])
  ],
  providers: [RestApi,{
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi : true
  }, DataService, AuthGuardService, AfterLoginGuardService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
