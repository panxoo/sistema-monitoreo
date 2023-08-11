import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInteceptor } from "src/app/parametros/interceptors/auth.interceptor";

export const HttpInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInteceptor, multi: true }
];