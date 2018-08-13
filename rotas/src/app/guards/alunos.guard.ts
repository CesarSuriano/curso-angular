import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../login/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AlunosGuard implements CanActivateChild {


    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

       
        return true
    }

}