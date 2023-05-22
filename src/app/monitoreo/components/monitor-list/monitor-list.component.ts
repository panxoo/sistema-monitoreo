import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MonitorVisual } from 'src/app/monitoreo/models/monitor-visual.model';
import { Agrupation } from 'src/app/shared/models/agrupation.model';

@Component({
  selector: 'app-monitor-list',
  templateUrl: './monitor-list.component.html',
  styleUrls: ['./monitor-list.component.scss']
})
export class MonitorListComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  agrupaciones$!: Observable<Agrupation[]>
  monitores$!: Observable<MonitorVisual[]>
  countResultado$!: Observable<{ red: number, green: number }>


  ngOnInit(): void {
    this.agrupaciones$ = this.route.data.pipe(map((data) => data['agrupaciones']));
    this.monitores$ = this.route.data.pipe(map(data => data['monitores']));


  }


}
