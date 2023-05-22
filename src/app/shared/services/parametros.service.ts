import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Agrupation } from "src/app/shared/models/agrupation.model";
import { environment } from "src/environments/environment";

@Injectable()

export class ParametrosService {
    constructor(private http: HttpClient) { }

    getAgrupacion(): Observable<Agrupation[]> {
        return this.http.get<Agrupation[]>(`${environment.apiUrl}/parametros/grupomonitor`);
    }

}