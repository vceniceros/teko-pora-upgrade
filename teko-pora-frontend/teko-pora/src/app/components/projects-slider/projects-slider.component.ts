import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';
@Component({
  selector: 'app-projects-slider',
  templateUrl: './projects-slider.component.html',
  styleUrls: ['./projects-slider.component.css'],
  providers: [ProjectsService]
})
export class ProjectsSliderComponent implements OnInit{
  public Project: Projects[] |any;
  constructor(
    private _proyectService: ProjectsService,
    private router: Router,
    private activatedRouter: ActivatedRoute,

  ) {

    };
 ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
    this._proyectService.getProject(id).subscribe((projects: Projects[])=>{
      this.Project = projects;
      console.log(this.Project)
    })
 }
}
