import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { LogoutService } from 'src/app/core/services/logout.service';
import { AuthentificationService } from 'src/app/parametros/services/authentification.service';
import { LoginVariable } from 'src/app/shared/variables/login.variable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginVariable: LoginVariable,
    private logoutService: LogoutService) { }
  sesion$!: Observable<boolean>;

  ngOnInit(): void {
    this.sesion$ = this.loginVariable.logeado$;
  }

  logout() {
    this.logoutService.LogoutUser();
  }

}
