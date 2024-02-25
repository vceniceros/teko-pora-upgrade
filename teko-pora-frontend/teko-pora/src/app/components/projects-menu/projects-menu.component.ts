import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projects } from 'src/app/models/projects';
@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.css'],
  providers: [ProjectsService]
})
export class ProjectsMenuComponent implements OnInit{
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
  },)
}
}
