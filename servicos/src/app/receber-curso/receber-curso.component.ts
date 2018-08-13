import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.css']
})
export class ReceberCursoComponent implements OnInit {

  curso: string;
  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }

}
