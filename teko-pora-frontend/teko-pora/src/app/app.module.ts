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
import { HomeQuotesComponent } from './components/home-quotes/home-quotes.component';
import { HomeContactComponent } from './components/home-contact/home-contact.component';
import { HowWeAreComponent } from './components/how-we-are/how-we-are.component';
import { HowWeAreTitleComponent } from './components/how-we-are-title/how-we-are-title.component';
import { HowWeAreBodyComponent } from './components/how-we-are-body/how-we-are-body.component';
import { DonationsComponent } from './components/donations/donations.component';
import { DonationsTitleComponent } from './components/donations-title/donations-title.component';
import { DonationsSliderComponent } from './components/donations-slider/donations-slider.component';
import { DonationsButtonsComponent } from './components/donations-buttons/donations-buttons.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactTitleComponent } from './components/contact-title/contact-title.component';
import { ContactContactformComponent } from './components/contact-contactform/contact-contactform.component';

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
    HomeQuotesComponent,
    HomeContactComponent,
    HowWeAreComponent,
    HowWeAreTitleComponent,
    HowWeAreBodyComponent,
    DonationsComponent,
    DonationsTitleComponent,
    DonationsSliderComponent,
    DonationsButtonsComponent,
    ContactComponent,
    ContactTitleComponent,
    ContactContactformComponent
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
