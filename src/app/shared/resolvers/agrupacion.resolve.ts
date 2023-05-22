import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Agrupation } from "src/app/shared/models/agrupation.model";
import { ParametrosService } from "src/app/shared/services/parametros.service";

@Injectable()

export class AgrupacionResolve {
    constructor(private parametrosService: ParametrosService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agrupation[]> {
        return this.parametrosService.getAgrupacion();
    }
}