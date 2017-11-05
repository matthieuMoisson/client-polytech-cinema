import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterMovie',
    pure: false
})
export class filterMovie implements PipeTransform {
    transform(items: any[], title, category): any {
        if(items != undefined){
            for(var i = 0; i < items.length; i ++){
                items[i].show = true;
                if(items[i].title.slice(0, title.length) != title){
                    items[i].show = false;
                }if(category != "?" && items[i].category.code.slice(0, category.length) != category){
                    items[i].show = false;
                }
            }
        }
        return items;
    }
}

@Pipe({
    name: 'filterByActor',
    pure: false
})
export class filterByActor implements PipeTransform {
    transform(items: any[], name, firstName): any {
        if(items != undefined){
            for(var i = 0; i < items.length; i ++){
                items[i].show = true;
                if(items[i].name.slice(0, name.length) != name){
                    items[i].show = false;
                }
                if(items[i].firstName.slice(0, firstName.length) != firstName){
                    items[i].show = false;
                }
            }
        }
        return items;
    }
}

