import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Job } from "src/app/parametros/models/job.model";
import { environment } from "src/environments/environment";

@Injectable()

export class JobMonitoreoService {
    constructor(private http: HttpClient) { }

    getJobMonitor(): Observable<Job[]> {
        return this.http.get<Job[]>(`${environment.apiUrl}/Parametros/jobmonitor`)
    }
}