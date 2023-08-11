import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthentificationService } from "src/app/shared/services/authentification.service";


@Injectable()

export class AuthInteceptor implements HttpInterceptor {
    constructor(private authService: AuthentificationService,
        private xsrfTokenExtractor: HttpXsrfTokenExtractor) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authService.token;
        let xsrfToken = this.xsrfTokenExtractor.getToken();
        if (token!) {
            req = req.clone({
                withCredentials: true,
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    'X-XSRF-TOKEN': xsrfToken ?? ''
                }
            });
        }
        return next.handle(req);
    }
}