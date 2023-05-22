import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Job } from 'src/app/parametros/models/job.model';
import { Agrupation } from 'src/app/shared/models/agrupation.model';

@Component({
  selector: 'app-general-parametros',
  templateUrl: './general-parametros.component.html',
  styleUrls: ['./general-parametros.component.scss']
})
export class GeneralParametrosComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  jobMonitor$!: Observable<Job[]>
  agrupacion$!: Observable<Agrupation[]>


  ngOnInit(): void {
    this.jobMonitor$ = this.route.data.pipe(map((data) => data['jobs']));
    this.agrupacion$ = this.route.data.pipe(map((data) => data['agrupaciones']));
  }

}
