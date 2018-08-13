import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute } from '@angular/router';
import { query } from '@angular/core/src/render3/query';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  pagina: number;
  inscricao: Subscription
  constructor(private cursosService: CursosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos()

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina']
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
    
  }

}
