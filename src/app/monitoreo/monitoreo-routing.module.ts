import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorListComponent } from 'src/app/monitoreo/components/monitor-list/monitor-list.component';
import { MonitorVisualResolve } from 'src/app/monitoreo/resolvers/monitor-visual.resolve';
import { AgrupacionResolve } from 'src/app/shared/resolvers/agrupacion.resolve';


const routes: Routes = [
  {
    path: '', component: MonitorListComponent, resolve: {
      agrupaciones: AgrupacionResolve,
      monitores: MonitorVisualResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoreoRoutingModule { }
