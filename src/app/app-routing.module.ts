import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'monitor-visual', loadChildren: () => import('./monitoreo/monitoreo.module').then(m => m.MonitoreoModule) },
  { path: 'parametros', loadChildren: () => import('./parametros/parametros.module').then(m => m.ParametrosModule) },
  { path: '**', redirectTo: 'monitor-visual' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
