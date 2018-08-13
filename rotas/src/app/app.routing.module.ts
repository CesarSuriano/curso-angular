import { NgModule, ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
    { 
        path: 'cursos', 
        loadChildren: './cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'alunos', 
        loadChildren: './alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard]
    },
    
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}