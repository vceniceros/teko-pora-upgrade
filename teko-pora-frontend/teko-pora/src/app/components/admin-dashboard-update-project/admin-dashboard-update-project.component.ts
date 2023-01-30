import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-admin-dashboard-update-project',
  templateUrl: './admin-dashboard-update-project.component.html',
  styleUrls: ['./admin-dashboard-update-project.component.css'],
  providers: [ProjectsService]
})
export class AdminDashboardUpdateProjectComponent implements OnInit {
  public Project: Projects[] |any;
  angForm: FormGroup;
  constructor(
    private _proyectService: ProjectsService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private fb: FormBuilder,
  ) {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      descrip: ['', Validators.required],
      img: ['', Validators.required],
      img1: ['', Validators.required],
      img2: ['', Validators.required],
      img3: ['', Validators.required],
      img4: ['', Validators.required],
      img5: ['', Validators.required],
      img6: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this._proyectService.getProject(id).subscribe((projects: Projects[])=>{
      this.Project = projects;
      console.log(this.Project)
    })
  }
  postdata(angForm1: {
    value: {
      title: any;
      subtitle: any;
      descrip: any;
      img: any;
      img1: any;
      img2: any;
      img3: any;
      img4: any;
      img5: any;
      img6: any;
    };
  }) {
    this._proyectService
      .updateProject(
        this.Project.id,
        angForm1.value.title,
        angForm1.value.subtitle,
        angForm1.value.descrip,
        angForm1.value.img,
        angForm1.value.img1,
        angForm1.value.img2,
        angForm1.value.img3,
        angForm1.value.img4,
        angForm1.value.img5,
        angForm1.value.img6
      )
      .pipe(first())
      .subscribe(
        (data) => {
          alert("proyecto actualizado exitosamente");
        },

        (error) => {
          alert("no se cargo una goma")
        }
      );
  }

  get title() {
    return this.angForm.get('title');
  }
  get subtitle() {
    return this.angForm.get('subtitle');
  }
  get descrip() {
    return this.angForm.get('descrip');
  }
  get img() {
    return this.angForm.get('img');
  }
  get img1() {
    return this.angForm.get('img1');
  }
  get img2() {
    return this.angForm.get('img2');
  }
  get img3() {
    return this.angForm.get('img3');
  }
  get img4() {
    return this.angForm.get('img4');
  }
  get img5() {
    return this.angForm.get('img5');
  }
  get img6() {
    return this.angForm.get('img6');
  }
}


