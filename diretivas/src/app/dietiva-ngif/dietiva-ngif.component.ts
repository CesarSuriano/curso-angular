import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietiva-ngif',
  templateUrl: './dietiva-ngif.component.html',
  styleUrls: ['./dietiva-ngif.component.css']
})
export class DietivaNgifComponent implements OnInit {

  cursos: string[] = [];

  mostrar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onMostrar() {
    this.mostrar = !this.mostrar
  }

}
