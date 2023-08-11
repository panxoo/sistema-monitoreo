import { Component, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthentificationService) { }
  sesion$!: Observable<boolean>;

  ngOnInit(): void {
    this.sesion$ = this.authService.logeado$;

  }



}
