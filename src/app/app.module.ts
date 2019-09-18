import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule,  } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { httpInterceptorProviders } from './http-interceptors/index';
import { CreatepdfComponent } from './dashboard/createpdf/createpdf.component';
import { ShowpdfComponent } from './dashboard/showpdf/showpdf.component';


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    DashboardComponent,
    CreatepdfComponent,
    ShowpdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [UserService,
              httpInterceptorProviders,
              AuthGuard,
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// BaseRequestOptions
