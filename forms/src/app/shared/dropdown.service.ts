import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: Http) {
    
   }

   getEstadosBr() {
     return this.http.get('assets/dados/estadosbr.json')
      .pipe(map((res: Response) => res.json()))
   }

   getCargos() {
     return [
       {nome: 'Dev', nivel: 'junior', desc: 'Dev js'},
       {nome: 'Dev', nivel: 'pleno', desc: 'Dev pl'},
       {nome: 'Dev', nivel: 'senior', desc: 'Dev sr'}
     ]
   }

   getTecnologias() {
     return [
       {nome: 'java', desc: 'Java'},
       {nome: 'javascript', desc: 'Javascript'},
       {nome: 'php', desc: 'PHP'},
       {nome: 'ruby', desc: 'Ruby'}
     ]
   }

   getNewsletter() {
     return [
       {valor: 's', desc: 'Sim'},
       {valor: 'n', desc: 'Não'}
     ]
   }
}
