import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipeComponent } from './exemplos-pipe/exemplos-pipe.component';
import { CamelCasePipe } from './camel-case.pipe';
import { PipeImpuroPipe } from './pipe-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipeComponent,
    CamelCasePipe,
    PipeImpuroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
