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
import { LoginComponent } from './components/login/login.component';
import { AuthentificationService } from 'src/app/parametros/services/authentification.service';
import { HttpInterceptorProvider } from 'src/app/parametros/interceptors';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from 'src/app/parametros/guards/auth.guard';
//import { AuthInteceptor } from 'src/app/parametros/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    MonitorListParametrosComponent,
    MonitorItemParametroComponent,
    JobParametrosComponent,
    AgrupacionParametrosComponent,
    GeneralParametrosComponent,
    JobModalComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    //JobMonitorResolver,
    JobMonitoreoService,
    HttpInterceptorProvider,
    AuthentificationService,
    AuthGuard
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInteceptor, multi: true }
  ]
})
export class ParametrosModule { }
