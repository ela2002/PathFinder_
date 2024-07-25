import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { AllLandingPagesComponent } from './all-landing-pages/all-landing-pages.component';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { ProfilComponent } from './profil/profil.component';
import { FavorisComponent } from './favoris/favoris.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './address/address.component';
import { Ca1Component } from './ca1/ca1.component';
import { Ca2Component } from './ca2/ca2.component';
import { ContactComponent } from './contact/contact.component';
import { GeneralComponent } from './general/general.component';
import { OthersComponent } from './others/others.component';
import { PaymentComponent } from './payment/payment.component';
import { ServicesComponent } from './services/services.component';
import {  Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    LandingPageComponent,
    ContactusComponent,
    FeedbackComponent,
    SearchpageComponent,
    AllLandingPagesComponent,
    CommentPageComponent,
    ProfilComponent,
    FavorisComponent,
    SignUpComponent,
    SignInComponent,
    AccountComponent,
    AddressComponent,
    Ca1Component,
    Ca2Component,
    ContactComponent,
    GeneralComponent,
    OthersComponent,
    PaymentComponent,
    ServicesComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,Ng2SearchPipeModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
