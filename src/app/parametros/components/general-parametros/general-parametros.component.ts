import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, pipe } from 'rxjs';
import { Job } from 'src/app/parametros/models/job.model';
import { JobMonitoreoService } from 'src/app/parametros/services/job-monitoreo.service';
import { Agrupation } from 'src/app/shared/models/agrupation.model';

@Component({
  selector: 'app-general-parametros',
  templateUrl: './general-parametros.component.html',
  styleUrls: ['./general-parametros.component.scss']
})
export class GeneralParametrosComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private jobService: JobMonitoreoService) { }

  jobMonitor$!: Observable<Job[]>
  agrupacion$!: Observable<Agrupation[]>


  ngOnInit(): void {
    //this.jobMonitor$ = this.route.data.pipe(map((data) => data['jobs']));
    this.jobMonitor$ = this.jobService.getJobMonitor();
    this.agrupacion$ = this.route.data.pipe(map((data) => data['agrupaciones']));
  }

}
