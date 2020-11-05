import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InvestorPageComponent } from './investor-page/investor-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComponent } from './team/team.component';
import { TechSupportComponent } from './tech-support/tech-support.component';


const routes: Routes = [
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'investor-page',
    component: InvestorPageComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tech-support',
    component: TechSupportComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'profile-info',
    component: ProfileInfoComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
