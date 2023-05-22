import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { MonitorVisual } from "src/app/monitoreo/models/monitor-visual.model";
import { MonitoreoService } from "src/app/monitoreo/services/monitoreo.service";

@Injectable()

export class MonitorVisualResolve {
    constructor(private monitoreoService: MonitoreoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MonitorVisual[]> {
        return this.monitoreoService.getMonitores();
    }
}