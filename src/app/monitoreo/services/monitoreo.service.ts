import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MonitorVisual } from "src/app/monitoreo/models/monitor-visual.model";
import { environment } from "src/environments/environment";

@Injectable()
export class MonitoreoService {
    constructor(private http: HttpClient) { }

    getMonitores(): Observable<MonitorVisual[]> {
        return this.http.get<MonitorVisual[]>(`${environment.apiUrl}/monitores`);
    }




}
