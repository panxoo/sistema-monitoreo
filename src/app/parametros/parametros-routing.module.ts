import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralParametrosComponent } from 'src/app/parametros/components/general-parametros/general-parametros.component';
import { LoginComponent } from 'src/app/parametros/components/login/login.component';
import { MonitorListParametrosComponent } from 'src/app/parametros/components/monitor-list-parametros/monitor-list-parametros.component';
import { AuthGuard } from 'src/app/parametros/guards/auth.guard';
import { JobMonitorResolver } from 'src/app/parametros/resolvers/job-monitor.resolver';
import { AgrupacionResolve } from 'src/app/shared/resolvers/agrupacion.resolve';

const routes: Routes = [
  {
    path: 'general', component: GeneralParametrosComponent, canActivate: [AuthGuard]//, resolve: { jobs: JobMonitorResolver,  agrupaciones: AgrupacionResolve  }
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: MonitorListParametrosComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
