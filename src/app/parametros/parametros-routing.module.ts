import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralParametrosComponent } from 'src/app/parametros/components/general-parametros/general-parametros.component';
import { MonitorListParametrosComponent } from 'src/app/parametros/components/monitor-list-parametros/monitor-list-parametros.component';
import { JobMonitorResolver } from 'src/app/parametros/resolvers/job-monitor.resolver';
import { AgrupacionResolve } from 'src/app/shared/resolvers/agrupacion.resolve';

const routes: Routes = [
  {
    path: 'general', component: GeneralParametrosComponent, resolve: {
      jobs: JobMonitorResolver,
      agrupaciones: AgrupacionResolve
    }
  },
  { path: '', component: MonitorListParametrosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
