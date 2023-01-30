import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

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
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminSingupComponent } from './components/admin-singup/admin-singup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersService } from './services/users.service';
import { AdminDashboardPanelComponent } from './components/admin-dashboard-panel/admin-dashboard-panel.component';
import { AdminDashboardTitleComponent } from './components/admin-dashboard-title/admin-dashboard-title.component';
import { AdminDashboardUsersComponent } from './components/admin-dashboard-users/admin-dashboard-users.component';
import { AdminDashboardPanelFormComponent } from './components/admin-dashboard-panel-form/admin-dashboard-panel-form.component';
import { AdminDashboardUpdateProjectComponent } from './components/admin-dashboard-update-project/admin-dashboard-update-project.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsMenuComponent } from './components/projects-menu/projects-menu.component';
import { ProjectsSliderComponent } from './components/projects-slider/projects-slider.component';
import { ProjectsTextComponent } from './components/projects-text/projects-text.component';


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
    ContactContactformComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminSingupComponent,
    AdminDashboardComponent,
    AdminDashboardPanelComponent,
    AdminDashboardTitleComponent,
    AdminDashboardUsersComponent,
    AdminDashboardPanelFormComponent,
    AdminDashboardUpdateProjectComponent,
    ProjectsComponent,
    ProjectsMenuComponent,
    ProjectsSliderComponent,
    ProjectsTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFileUploaderModule
  ],
  providers: [
    CookieService,
    HttpClientModule,
    UsersService,
    HttpClient,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
