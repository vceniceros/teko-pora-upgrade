import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { AdminDashboardPanelFormComponent } from './components/admin-dashboard-panel-form/admin-dashboard-panel-form.component';
import { AdminDashboardUpdateProjectComponent } from './components/admin-dashboard-update-project/admin-dashboard-update-project.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonationsComponent } from './components/donations/donations.component';
import { HomeComponent } from './components/home/home.component';
import { HowWeAreComponent } from './components/how-we-are/how-we-are.component';
import { ProjectsMenuComponent } from './components/projects-menu/projects-menu.component';
import { ProjectsComponent } from './components/projects/projects.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quienesSomos', component: HowWeAreComponent },
  { path: 'donativos', component: DonationsComponent },
  { path: 'contactos', component: ContactComponent},
  {path: 'proyectos', component: ProjectsMenuComponent},
  {path: 'proyectos/:id', component: ProjectsComponent},
  { path: 'admintk', component: AdminComponent},
  { path: 'dc7161be3dbf2250c8954e560cc35060dashboard', component: AdminDashboardComponent,canActivate: [AuthguardGuard]},
  { path: 'dc7161be3dbf2250c8954e560cc35060dashboard/createNewProject', component: AdminDashboardPanelFormComponent,canActivate: [AuthguardGuard]},
  { path: 'dc7161be3dbf2250c8954e560cc35060dashboard/updateProject/:id', component: AdminDashboardUpdateProjectComponent,canActivate: [AuthguardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
