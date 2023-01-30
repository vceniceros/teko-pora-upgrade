import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Projects } from '../models/projects';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  HOST = 'http://localhost/';
  API_URI = 'teko-pora/teko-pora-upgrade/backend/api/rest/src';
  constructor(private http: HttpClient) {}
  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(
      `${this.HOST + this.API_URI}/post-projects.php`
    );
  }
  getProject(id: number): Observable<Projects[]> {
    return this.http.get<Projects[]>(
      `${this.HOST + this.API_URI}/post-projects.php?id=${id}`
    );
  }
  public createProject(
    title: any,
    subtitle: any,
    descrip: any,
    img: any,
    img1: any,
    img2: any,
    img3: any,
    img4: any,
    img5: any,
    img6: any
  ) {
    return this.http
      .post<any>(`${this.HOST + this.API_URI}/projects/create.php`, {
        title,
        subtitle,
        descrip,
        img,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
      })
      .pipe(
        map((Projects) => {
          return Projects;
        })
      );
  }
  updateProject(
    id:any,
    title: any,
    subtitle: any,
    descrip: any,
    img: any,
    img1: any,
    img2: any,
    img3: any,
    img4: any,
    img5: any,
    img6: any) {
    return this.http.put<any>(`${this.HOST + this.API_URI}/projects/update.php?id=${id}`, {
      id,
      title,
      subtitle,
      descrip,
      img,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    })
    .pipe(
      map((Projects) => {
        return Projects;
      })
    );
  }
  deleteProject(id: number) {
    return this.http.delete<any>(
      `${this.HOST + this.API_URI}/projects/delete.php?id=${id}`
    );
  }
}
