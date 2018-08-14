import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { IFormCandactivate } from "./iform-candactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCandactivate> {
    canDeactivate(
        component: IFormCandactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        
        return component.podeDesativar()
    }
}
