import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DonationsComponent } from './components/donations/donations.component';
import { HomeComponent } from './components/home/home.component';
import { HowWeAreComponent } from './components/how-we-are/how-we-are.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienesSomos', component: HowWeAreComponent },
  { path: 'donativos', component: DonationsComponent },
  { path: 'contactos', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
