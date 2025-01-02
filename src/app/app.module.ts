import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { AndroidDevelopmentComponent } from './pages/android-development/android-development.component';

import { CyberSecurityComponent } from './pages/cyber-security/cyber-security.component';
import { SoftwareComponent } from './pages/software/software.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { UiUxComponent } from './pages/ui-ux/ui-ux.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    WebDevelopmentComponent,
    AndroidDevelopmentComponent,
    CyberSecurityComponent,
    SoftwareComponent,
    ContactUsComponent,
    UiUxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
