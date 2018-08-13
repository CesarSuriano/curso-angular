import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario = new Usuario()
  

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario)
  }

}
