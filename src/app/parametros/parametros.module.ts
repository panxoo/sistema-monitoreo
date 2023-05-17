import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { MonitorListParametrosComponent } from './components/monitor-list-parametros/monitor-list-parametros.component';
import { MonitorItemParametroComponent } from './components/monitor-item-parametro/monitor-item-parametro.component';
import { JobParametrosComponent } from './components/job-parametros/job-parametros.component';
import { AgrupacionParametrosComponent } from './components/agrupacion-parametros/agrupacion-parametros.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MonitorListParametrosComponent,
    MonitorItemParametroComponent,
    JobParametrosComponent,
    AgrupacionParametrosComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    SharedModule
  ]
})
export class ParametrosModule { }
