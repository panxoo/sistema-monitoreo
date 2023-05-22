import { Component, Input } from '@angular/core';
import { MonitorVisual } from 'src/app/monitoreo/models/monitor-visual.model';
import { Agrupation } from 'src/app/shared/models/agrupation.model';

@Component({
  selector: 'app-monitor-item',
  templateUrl: './monitor-item.component.html',
  styleUrls: ['./monitor-item.component.scss']
})
export class MonitorItemComponent {

  @Input() grupo!: Agrupation;
  @Input() monitores!: MonitorVisual[];

}
