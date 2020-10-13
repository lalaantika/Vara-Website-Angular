import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{AngularFireModule} from '@angular/fire';
import{AngularFireDatabaseModule} from '@angular/fire/database'
import{AngularFirestoreModule} from '@angular/fire/firestore'
import{FormsModule} from '@angular/forms';
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
import{environment} from'../environments/environment'
import { NgForm } from '@angular/forms';
import{AgmCoreModule} from '@agm/core';

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
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAk8AwKvL4wJ2JOj2-ctsZS0gSYFg5uvPQ"
    
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
