import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number;
  aluno: any;
  inscricao: any

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private alunosService: AlunosService
  ) { }

  editarContrato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        console.log(params['id'])
        this.id = params['id']
        this.aluno = this.alunosService.getAluno(this.id);

        if(this.aluno == null) {
          this.router.navigate(['/alunos/naoEncontrado'])
        }
      }

    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()  
  }

}
