import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AndroidDevelopmentComponent } from './pages/android-development/android-development.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CyberSecurityComponent } from './pages/cyber-security/cyber-security.component';
import { ServicesComponent } from './pages/services/services.component';
import { SoftwareComponent } from './pages/software/software.component';
import { UiUxComponent } from './pages/ui-ux/ui-ux.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { FaqComponent } from './components/faq/faq.component';
import { GoalsComponent } from './components/goals/goals.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "android-development", component: AndroidDevelopmentComponent},
  {path: "contact-us", component: ContactUsComponent},
  {path: "cyber-security", component: CyberSecurityComponent},
  {path: "services", component: ServicesComponent},
  {path: "software", component: SoftwareComponent},
  {path: "ui-ux", component: UiUxComponent},
  {path: "web-development", component: WebDevelopmentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
