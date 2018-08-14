import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AlunosDeactivateGuard } from '../guards/alunos.deactivate.guard';
import { AlunoDetalheResolver } from '../alunos/guards/aluno-detalhe.resolver';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const alunosRoutes = [
    {
        path: '', component: AlunosComponent, children: [
            { path: 'novo', component: AlunoFormComponent },
            {
                path: ':id', component: AlunoDetalheComponent,
                resolve: { aluno: AlunoDetalheResolver }
            },
            {
                path: ':id/editar', component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            },

        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}