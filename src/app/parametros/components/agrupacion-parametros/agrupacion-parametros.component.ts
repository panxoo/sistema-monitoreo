import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Agrupation } from 'src/app/shared/models/agrupation.model';

@Component({
  selector: 'app-agrupacion-parametros',
  templateUrl: './agrupacion-parametros.component.html',
  styleUrls: ['./agrupacion-parametros.component.scss']
})
export class AgrupacionParametrosComponent {

  @Input() agrupaciones$!: Observable<Agrupation[]>;

}
