import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(
      [
        { path: 'about-us', component: AboutUsComponent },
        { path: 'contact-us', component: ContactUsComponent },
        { path: '', component: HomeComponent},
        { path: 'sign-in', component: SignInComponent },
        { path: 'sign-up',component:SignUpComponent }
      ]
    ),
    MatSliderModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
