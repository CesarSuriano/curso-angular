import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../login/auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CursosGuard implements CanActivateChild {

    constructor(
      
    ) { }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        console.log("guarda de rota filha")
        return true
    }

}