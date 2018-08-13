import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing'
import { AppRoutingModule } from './app.routing.module'

import { AppComponent } from './app.component';
import "materialize-css";
import { MaterializeModule } from 'angular2-materialize';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
//import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,    
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    //routing
    //CursosModule,
    
    
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
