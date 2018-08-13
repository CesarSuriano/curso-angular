import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
    canDeactivate(
        component: AlunoFormComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        
        return component.alterouForm()
    }
}
