import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralParametrosComponent } from 'src/app/parametros/components/general-parametros/general-parametros.component';
import { MonitorListParametrosComponent } from 'src/app/parametros/components/monitor-list-parametros/monitor-list-parametros.component';

const routes: Routes = [
  { path: 'general', component: GeneralParametrosComponent },
  { path: '', component: MonitorListParametrosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
