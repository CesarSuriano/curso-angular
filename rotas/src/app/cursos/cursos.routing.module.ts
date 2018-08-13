import { NgModule, ModuleWithProviders } from "@angular/core";

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule } from '@angular/router'

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: ':id', component: CursoDetalheComponent },


]


@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {

}