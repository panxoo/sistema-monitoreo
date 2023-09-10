import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthentificationService } from "src/app/parametros/services/authentification.service";
import { LoginVariable } from "src/app/shared/variables/login.variable";


@Injectable()

export class AuthInteceptor implements HttpInterceptor {
    constructor(private loginVariable: LoginVariable,
        private xsrfTokenExtractor: HttpXsrfTokenExtractor) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('interceptor');
        const token = this.loginVariable.token;
        let xsrfToken = this.xsrfTokenExtractor.getToken();
        console.log(token);

        if (token!) {
            console.log('intercepor token');
            req = req.clone({
                withCredentials: true,
                /* setHeaders: {
                     Authorization: `Bearer ${token}`,
                     'X-XSRF-TOKEN': xsrfToken ?? ''
                 }*/
                headers: new HttpHeaders({
                    'X-XSRF-TOKEN': xsrfToken ?? '',
                    'Authorization': `Bearer ${token}`
                })
            });
        }
        return next.handle(req);
    }
}