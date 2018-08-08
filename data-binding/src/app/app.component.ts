import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor: number = 5;
  title = 'data-binding';

  deletarCiclo: boolean = false

  destruirCiclo() {
    this.deletarCiclo = true
  }

  mudarValor() {
    this.valor ++
  }
}
