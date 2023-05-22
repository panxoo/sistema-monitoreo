import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Job } from "src/app/parametros/models/job.model";
import { JobMonitoreoService } from "src/app/parametros/services/job-monitoreo.service";

@Injectable()

export class JobMonitorResolver {

    constructor(private jobService: JobMonitoreoService) { }

    resolve(): Observable<Job[]> {
        return this.jobService.getJobMonitor();
    }


}
