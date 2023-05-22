import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filtreObjeto'
})

export class FiltreObjetoPipe implements PipeTransform {
    transform(data: any[], objetFiltre: string, valor: any): any {
        if (!data || !objetFiltre) {
            return data;
        }

        return data.filter(item => item[objetFiltre] === valor);
    }
}