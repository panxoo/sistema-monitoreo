import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "src/app/shared/models/user.model";
import jwtDecode, { JwtPayload } from "jwt-decode"
import { DecodedToken } from "src/app/shared/models/decodedtoken.model";

@Injectable({
    providedIn: "root"
})

export class LoginVariable {
    private _sesion$: BehaviorSubject<User | null>;
    private _logeado$: BehaviorSubject<boolean>;
    private _rolSesion$: BehaviorSubject<string[] | null>;


    constructor() {
        this._sesion$ = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('tokens')!));
        this._logeado$ = new BehaviorSubject<boolean>(localStorage.getItem('tokens')! ? true : false);
        this._rolSesion$ = new BehaviorSubject<string[] | null>(null);
        if (localStorage.getItem('tokens')!) {
            this.DecodedToken();
        }
        else {
            this.RemoveDecodedToken();
        }
    }


    get _sesionValue(): User | null {
        return this._sesion$.value;
    }

    get _logeadoValue(): boolean {
        return this._logeado$.value;
    }

    get _rolSesionValue(): string[] | null {
        return this._rolSesion$.value;
    }

    get sesion$(): Observable<User | null> {
        return this._sesion$.asObservable();
    }

    get logeado$(): Observable<boolean> {
        return this._logeado$.asObservable();
    }

    get rolSesion$(): Observable<string[] | null> {
        return this._rolSesion$.asObservable();
    }


    get token(): string {
        return this._sesionValue?.token ?? '';
    }

    ParametroSesion(usr: User | null) {
        this._sesion$.next(usr);
        this._logeado$.next(!!usr);

        if (!usr) {
            localStorage.removeItem('tokens');
            this.RemoveDecodedToken();
        } else {
            localStorage.setItem('tokens', JSON.stringify(usr));
            this.DecodedToken();
        }
    }

    Parametrologeado(dato: boolean) {
        this._logeado$.next(dato);
    }

    DecodedToken() {
        let decodedToken: DecodedToken = jwtDecode(this.token);

        this._rolSesion$.next(decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
    }

    RemoveDecodedToken() {
        this._rolSesion$.next(null);
    }


}