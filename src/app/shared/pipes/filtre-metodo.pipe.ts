import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'filtreMetodo',
    pure: false
})

export class filtreMetodoPipe implements PipeTransform {

    transform(items: any[], callback: (items: any) => boolean): any {
        if (!items || !callback) {
            return items;
        }
        return items.filter(item => callback(item));
    }
}