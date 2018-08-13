import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class AuthService {
  mostrarMenuEmitter = new EventEmitter<boolean>()

  private usuarioAutenticado: boolean = false;
  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'cesar' && usuario.senha === '123'){
      this.usuarioAutenticado = true;
      this.router.navigate(['/'])
      this.mostrarMenuEmitter.emit(true)
      return true;
    }
    return false;
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado
  }
}
