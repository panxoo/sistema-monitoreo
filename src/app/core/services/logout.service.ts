import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { LoginVariable } from "src/app/shared/variables/login.variable";
import { environment } from "src/environments/environment";

@Injectable()
export class LogoutService {
    constructor(private http: HttpClient,
        private loginVariable: LoginVariable) { }

    LogoutUser() {
        this.http.get(`${environment.apiUrl}/Authentication/logout`, { withCredentials: true }).pipe(
            map(sesion => {
                this.loginVariable.ParametroSesion(null);
            })
        ).subscribe();
    }

}                               