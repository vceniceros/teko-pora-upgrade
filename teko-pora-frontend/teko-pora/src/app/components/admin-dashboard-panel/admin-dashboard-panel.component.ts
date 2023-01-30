import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projects } from 'src/app/models/projects';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard-panel',
  templateUrl: './admin-dashboard-panel.component.html',
  styleUrls: ['./admin-dashboard-panel.component.css'],
  providers: [ProjectsService],
})
export class AdminDashboardPanelComponent implements OnInit {
  projects: Projects[] | any;
  selectedProject: Projects = {
    id: 0,
    title: '',
    subtitle: '',
    descrip: '',
    img: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    img6: ''
  };
  constructor(private _projectService: ProjectsService) {

   }
  ngOnInit(){
    this._projectService.getProjects().subscribe((projects: Projects[])=>{
      this.projects = projects;
      console.log(this.projects);
    })
  }
  eliminarProyecto(id: any){
    this._projectService.deleteProject(id).subscribe((project: Projects)=>{
      alert('proyecto eliminado')
    })
  }
}
