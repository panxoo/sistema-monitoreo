import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from "rxjs";
import { User } from "src/app/shared/models/user.model";
import { environment } from "src/environments/environment";

@Injectable()

export class AuthentificationService {
    constructor(private http: HttpClient) { }

    private _sesion$ = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('tokens')!));
    private _logeado$ = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('tokens')!) ? true : false);

    // private _sesionOb$: Observable<User | null>;

    get _sesionValue(): User | null {
        return this._sesion$.value;
    }


    get sesion$(): Observable<User | null> {
        return this._sesion$.asObservable();
    }

    get logeado$(): Observable<boolean> {
        return this._logeado$.asObservable();
    }

    get token(): string {
        return this._sesionValue?.token ?? '';
    }



    LoginUser(Email: string, Password: string): Observable<any> {

        return this.http.post(`${environment.apiUrl}/Authentication/login`, { Email, Password }, { withCredentials: true }).pipe(
            map(sesion => {
                this.ParametroSesion(sesion);
                return sesion;
            })
            //, catchError((err) => handleError(err))
        );
    }

    LogoutUser() {
        this.http.get(`${environment.apiUrl}/Authentication/logout`).pipe(
            map(sesion => {
                this.ParametroSesion(null);
            })
        ).subscribe();
    }

    ParametroSesion(usr: User | null) {
        this._sesion$.next(usr);
        this._logeado$.next(!usr);

        if (!usr) {
            localStorage.setItem('tokens', JSON.stringify(usr));
        } else {
            localStorage.removeItem('tokens');
        }


    }



    prueba() {
        console.log('aaaa');
        this.http.post(`${environment.apiUrl}/Authentication/prueba`, { withCredentials: true }).pipe(
            map(sesion => {
                console.log('pepe');
            }
            )
        ).subscribe();
    }
}

function handleError(err: any): any {
    console.log(`error de llamada ${err}`);
    console.log(err.error);

}
