import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AchievementCardsComponent } from './components/achievement-cards/achievement-cards.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';
import { FaqComponent } from './components/faq/faq.component';
import { StaticCardComponent } from './components/static-card/static-card.component';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './components/theme-toggler/theme-toggler.component';


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
    UiUxComponent,
    HeaderComponent,
    FooterComponent,
    ContactFormComponent,
    AchievementCardsComponent,
    ProjectCardsComponent,
    FaqComponent,
    StaticCardComponent,
    ThemeToggleComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
 
})
export class AppModule { }
