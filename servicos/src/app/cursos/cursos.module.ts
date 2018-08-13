import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';
//import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CursosComponent,
    //ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursosComponent],
  providers: [CursosService]
})
export class CursosModule { }
