import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  servico: CursosService
  cursos: string[]

  constructor(private _cursosService: CursosService) { 
    this.servico = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.servico.getCursos()

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
