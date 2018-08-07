import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  url : string = "http://google.com" 
  urlImagem : string = "http://tudosobrecachorros.com.br/wp-content/uploads/2013/09/nomes-para-cachorros.jpeg" 
  valorAtual : string = ''
  valorSalvo : string = ''
  isMouseOver: boolean = false;
  nome: string = 'ABC'

  constructor() { }

  ngOnInit() {
  }

  botaoClicado() {
    alert('ola')
  }

  onKeyUp(evento : KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(value) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver 
  }

}
