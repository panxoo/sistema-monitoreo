import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { MonitorListParametrosComponent } from './components/monitor-list-parametros/monitor-list-parametros.component';
import { MonitorItemParametroComponent } from './components/monitor-item-parametro/monitor-item-parametro.component';
import { JobParametrosComponent } from './components/job-parametros/job-parametros.component';
import { AgrupacionParametrosComponent } from './components/agrupacion-parametros/agrupacion-parametros.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobMonitorResolver } from 'src/app/parametros/resolvers/job-monitor.resolver';
import { JobMonitoreoService } from 'src/app/parametros/services/job-monitoreo.service';
import { GeneralParametrosComponent } from './components/general-parametros/general-parametros.component';
import { JobModalComponent } from './components/job-parametros/modal/job-modal/job-modal.component';


@NgModule({
  declarations: [
    MonitorListParametrosComponent,
    MonitorItemParametroComponent,
    JobParametrosComponent,
    AgrupacionParametrosComponent,
    GeneralParametrosComponent,
    JobModalComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    SharedModule
  ],
  providers: [
    JobMonitorResolver,
    JobMonitoreoService
  ]
})
export class ParametrosModule { }
