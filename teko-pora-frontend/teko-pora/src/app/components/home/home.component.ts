import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private metaService: Meta) {}
  ngOnInit() {
    this.metaService.addTags([
      {name: 'keywords', content: 'fundacion, teko pora, ong, donaciones, Misiones, Argentina, pueblos originarios, Comandante Andresito'},
      {name: 'description', content: 'La fundación Teko Pora Andresito es una ONG cuyo objetivo es ayudar a las personas vulnerables de la zona noreste del pais'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
