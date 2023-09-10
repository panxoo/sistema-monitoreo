import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { LoginVariable } from "src/app/shared/variables/login.variable";
import { RouteRolsVariable } from "src/app/shared/variables/routeRols.variable";

@Injectable()

export class AuthGuard {
    constructor(private loginVariable: LoginVariable,
        private router: Router,
        private roteRols: RouteRolsVariable) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if (this.loginVariable._logeadoValue) {

            if (this.roteRols.Permiso(state.url, this.loginVariable._rolSesionValue ?? []))
                return true;
            this.router.navigateByUrl('parametros/login');
            return false;
        }
        else {
            this.router.navigateByUrl('parametros/login');
            return false;
        }
    }
}