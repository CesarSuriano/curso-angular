import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: Http) { }

  consultaCEP(cep: string) {
    console.log("CEP:" + cep)
    const URL = "https://viacep.com.br/ws/" + cep + "/json/"

    return this.http.get(URL)
  }
}
