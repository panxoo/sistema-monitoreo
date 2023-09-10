import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/parametros/services/authentification.service';
import { Observable, map, tap } from 'rxjs';
import { LoginVariable } from 'src/app/shared/variables/login.variable';


@Component({
  selector: 'app-monitor-list-parametros',
  templateUrl: './monitor-list-parametros.component.html',
  styleUrls: ['./monitor-list-parametros.component.scss']
})
export class MonitorListParametrosComponent implements OnInit {

  constructor(private loginVariable: LoginVariable) { }
  sesion$!: Observable<boolean>;

  cambioValor(val: boolean) {
    this.loginVariable.Parametrologeado(val);
  }

  ngOnInit(): void {
    this.sesion$ = this.loginVariable.logeado$;

  }
}
