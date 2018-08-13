import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosService } from './alunos.service';
import { AlunosDeactivateGuard } from '../guards/alunos.deactivate.guard';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from '../alunos/aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { AlunosRoutingModule } from './alunos.routing.module';


@NgModule({
    declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
    imports: [ CommonModule, AlunosRoutingModule, FormsModule ],
    exports: [AlunosComponent],
    providers: [
        AlunosService,
        AlunosDeactivateGuard
    ],
})
export class AlunosModule {}