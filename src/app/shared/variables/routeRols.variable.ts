import { Injectable } from "@angular/core";
import { RouteRolsModel } from "src/app/shared/models/routeRols.model";

@Injectable({
    providedIn: "root"
})

export class RouteRolsVariable {

    Permiso(route: string, rols: string[]): boolean {
        return this.RouteRols.some(f => f.route === route && f.rols.some(role => rols.includes(role)));
    }

    RouteRols: RouteRolsModel[] = [
        {
            route: '/parametros/general',
            rols: ['admin']
        },
        {
            route: '/parametros',
            rols: ['prueb', 'admin']
        },
    ];



}