import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipe',
  templateUrl: './exemplos-pipe.component.html',
  styleUrls: ['./exemplos-pipe.component.css']
})
export class ExemplosPipeComponent implements OnInit {

  livro: any = {
    titulo: "Algum livro",
    rating: 4.5444,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://google.com'
  }

  constructor() { }

  ngOnInit() {
  }

}
