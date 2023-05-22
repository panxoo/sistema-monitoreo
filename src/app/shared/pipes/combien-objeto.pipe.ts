import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'combienObjeto'
})

export class CombienObjetoPipe implements PipeTransform {

    transform(data: any[], objetFiltre: string, valor: any): number {

        if (!data) {
            return 0;
        }
        return data.filter(item => item[objetFiltre] === valor).length;
    }

}