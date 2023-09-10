import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from "rxjs";
import { User } from "src/app/shared/models/user.model";
import { environment } from "src/environments/environment";
import { LoginVariable } from "src/app/shared/variables/login.variable"

@Injectable()

export class AuthentificationService {
    constructor(private http: HttpClient,
        private loginVariable: LoginVariable) { }

    LoginUser(Email: string, Password: string): Observable<any> {

        return this.http.post(`${environment.apiUrl}/Authentication/login`, { Email, Password }, { withCredentials: true }).pipe(
            map(sesion => {
                this.loginVariable.ParametroSesion(sesion);
                this.startRefreshTokenTimer();
                return sesion;
            }),
            catchError((err) => handleError(err))
        );
    }

    LogoutUser() {
        this.http.get(`${environment.apiUrl}/Authentication/logout`).pipe(
            map(sesion => {
                this.loginVariable.ParametroSesion(null);
            })
        ).subscribe();
    }

    prueba() {
        console.log('aaaa');
        this.http.get(`${environment.apiUrl}/Authentication/test`).pipe(
            map(sesion => {
                console.log('pepe');
            })
        ).subscribe();
    }

    refreshToken() {
        return this.http.post<any>(`${environment.apiUrl}/users/refresh-token`, {}, { withCredentials: true })
            .pipe(map((user) => {
                this.loginVariable.ParametroSesion(user);
                this.startRefreshTokenTimer();
                return user;
            }));
    }

    private refreshTokenTimeout?: NodeJS.Timeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        /*  const jwtBase64 = this.userValue!.jwtToken!.split('.')[1];
          const jwtToken = JSON.parse(atob(jwtBase64));
  
          // set a timeout to refresh the token a minute before it expires
          const expires = new Date(jwtToken.exp * 1000);
          const timeout = expires.getTime() - Date.now() - (60 * 1000);
          this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);*/
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}

function handleError(err: any): any {
    console.log(`error de llamada ${err}`);
    console.log(err.error);
}
