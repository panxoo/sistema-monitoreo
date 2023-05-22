import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/parametros/models/job.model';

@Component({
  selector: 'app-job-parametros',
  templateUrl: './job-parametros.component.html',
  styleUrls: ['./job-parametros.component.scss']
})
export class JobParametrosComponent {
  @Input() jobs$!: Observable<Job[]>;

}
