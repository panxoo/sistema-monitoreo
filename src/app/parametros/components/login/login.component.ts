import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, first, map, tap } from 'rxjs';
import { AuthentificationService } from 'src/app/parametros/services/authentification.service';
import { User } from 'src/app/shared/models/user.model';
import { LoginVariable } from 'src/app/shared/variables/login.variable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private authService: AuthentificationService,
    private loginVariable: LoginVariable) { }

  UserCntrl!: FormControl;
  PasswordCntrl!: FormControl;
  error?: string;
  login$?: Observable<boolean>;

  ngOnInit(): void {
    this.UserCntrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.PasswordCntrl = this.formBuilder.control('', [Validators.required]);
    this.login$ = this.loginVariable.logeado$;
  }

  onSubmitLogin() {
    this.authService.LoginUser(this.UserCntrl.value, this.PasswordCntrl.value).pipe(
      first()
    ).subscribe({

      error: error => {
        console.log(error);
      }
    }

    );
    const usr = this.loginVariable.sesion$.subscribe();

    console.log(usr);
  }

  onSubmitPrueba() {
    this.authService.prueba();
    //let ff = this.authService.DatosToken();
    //console.log(ff);
  }


  private token(usr: User) {
    console.log(usr);
  }

}
