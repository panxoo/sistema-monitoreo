import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoreoRoutingModule } from './monitoreo-routing.module';
import { MonitorItemComponent } from './components/monitor-item/monitor-item.component';
import { MonitorListComponent } from 'src/app/monitoreo/components/monitor-list/monitor-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MonitoreoService } from 'src/app/monitoreo/services/monitoreo.service';
import { MonitorVisualResolve } from 'src/app/monitoreo/resolvers/monitor-visual.resolve';
import { MonitorResumenComponent } from './components/monitor-resumen/monitor-resumen.component';
import { MonitorDetalleComponent } from './components/monitor-detalle/monitor-detalle.component';


@NgModule({
  declarations: [
    MonitorListComponent,
    MonitorItemComponent,
    MonitorResumenComponent,
    MonitorDetalleComponent
  ],
  imports: [
    CommonModule,
    MonitoreoRoutingModule,
    SharedModule
  ],
  providers: [
    MonitoreoService,
    MonitorVisualResolve]
})
export class MonitoreoModule { }
