import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monitor-resumen',
  templateUrl: './monitor-resumen.component.html',
  styleUrls: ['./monitor-resumen.component.scss']
})
export class MonitorResumenComponent {

  @Input() ok!: number;
  @Input() error!: number;


}
