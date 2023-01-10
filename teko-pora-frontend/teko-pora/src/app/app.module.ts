import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { HomePrestationsComponent } from './components/home-prestations/home-prestations.component';
import { HomeProjectsComponent } from './components/home-projects/home-projects.component';
import { HomeDonationsComponent } from './components/home-donations/home-donations.component';
import { HomeThanksComponent } from './components/home-thanks/home-thanks.component';
import { HomeQuotesComponent } from './components/home-quotes/home-quotes.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HomeSliderComponent,
    HomePrestationsComponent,
    HomeProjectsComponent,
    HomeDonationsComponent,
    HomeThanksComponent,
    HomeQuotesComponent,
    HomeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
