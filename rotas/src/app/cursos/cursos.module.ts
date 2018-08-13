import { CursosComponent } from './cursos.component';
import { NgModule } from '@angular/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CursosRoutingModule } from './cursos.routing.module'

@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
    ],
    imports: [ CommonModule, CursosRoutingModule ],
    exports: [],
    providers: [CursosService],
})
export class CursosModule {}