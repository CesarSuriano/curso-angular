import { Injectable } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Aluno 1', email: 'aluno01@gmail.com'},
    {id: 2, nome: 'Aluno 2', email: 'aluno02@gmail.com'},
    {id: 3, nome: 'Aluno 3', email: 'aluno03@gmail.com'},
  ]

  getAlunos() {
    return this.alunos
  }

  getAluno(id: number) {
    let alunos = this.getAlunos()
    let aluno
    for(let i = 0; i < alunos.length; i++) {
      aluno = alunos[i]
      if(i+1 == id){
        return aluno
      }
    }
    return null
  }

  constructor() { }
}
