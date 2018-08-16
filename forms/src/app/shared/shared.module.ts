import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [CampoControlErroComponent, FormDebugComponent],
  exports:[CampoControlErroComponent, FormDebugComponent, ]
})
export class SharedModule { }
