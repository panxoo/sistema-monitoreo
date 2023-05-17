import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoreoRoutingModule } from './monitoreo-routing.module';
import { MonitorItemComponent } from './components/monitor-item/monitor-item.component';
import { MonitorListComponent } from 'src/app/monitoreo/components/monitor-list/monitor-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MonitorListComponent,
    MonitorItemComponent
  ],
  imports: [
    CommonModule,
    MonitoreoRoutingModule,
    SharedModule
  ]
})
export class MonitoreoModule { }
