import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { IFormCandactivate } from '../../guards/iform-candactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCandactivate {

  aluno: any;
  inscricao: Subscription

  private mudou: boolean = false

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']
        this.aluno = this.alunosService.getAluno(id)

        if(this.aluno == null){
          this.aluno = {}
        }
      }
    )
  }

  podeDesativar() {
    if(this.mudou) {
      if(confirm("Deseja sair do form? ")){
        return true
      }
    }
    return false
  }

  onInput() {
    this.mudou = true
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

}
