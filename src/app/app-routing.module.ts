import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllLandingPagesComponent } from './all-landing-pages/all-landing-pages.component';
import { ProfilComponent } from './profil/profil.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { FavorisComponent } from './favoris/favoris.component';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './account/account.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { GeneralComponent } from './general/general.component';
import { ContactComponent } from './contact/contact.component';
import { OthersComponent } from './others/others.component';
import {  Ca2Component } from './ca2/ca2.component';
import { Ca1Component } from './ca1/ca1.component';







const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"contactus" ,component:ContactusComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"acceuil",component:AllLandingPagesComponent},
  {path:"Account",component:ProfilComponent},
  {path:"Listings",component:SearchpageComponent},
  {path:"Favorit",component:FavorisComponent},
  {path:"comment",component:CommentPageComponent },
  {path: 'sign-in' , component: SignInComponent},
  {path:'sign-up', component: SignUpComponent},
  { path :'', redirectTo : '/acceuil',pathMatch : 'full'},
 
  {path :'services', component : ServicesComponent},
  {path: 'account2' , component: AccountComponent},
  {path:'payment',component:PaymentComponent},
 
  {path:'general',component:GeneralComponent},
  {path :'address',component:AddressComponent},
  {path:'contact',component:ContactComponent},
  {path:'others',component:OthersComponent},

  {path:'ca1',component:Ca1Component},
  {path:'**',component:Ca2Component},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
