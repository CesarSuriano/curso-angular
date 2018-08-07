import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  link: string
  linguagens: string[];

  constructor(private cursosService: CursosService) { 
    this.link = "https://www.google.com"
    this.linguagens = cursosService.getCursos();
  }

  ngOnInit() {
  }

}
