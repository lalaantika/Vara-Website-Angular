import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { TechSupportComponent } from './tech-support/tech-support.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { environment } from'../environments/environment'
import { NgForm } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { UserAuthserviceService } from './services/user-authservice.service';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { InvestorPageComponent } from './investor-page/investor-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutUsComponent,
    TeamComponent,
    ContactComponent,
    TechSupportComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    ProfileInfoComponent,
    PrivacyComponent,
    InvestorPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAk8AwKvL4wJ2JOj2-ctsZS0gSYFg5uvPQ"
    
    }),
    NgbModule,
  ],
  providers: [UserAuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
