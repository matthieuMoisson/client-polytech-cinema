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
    name: 'filterByName',
    pure: false
})
export class FilterByName implements PipeTransform {
    transform(items: any[], name): any {
        if(items != undefined){
            for(var i = 0; i < items.length; i ++){
                if(items[i].name.slice(0, name.length) != name){
                    items[i].show = false;
                }else{
                    items[i].show = true;
                }
            }
        }
        return items;
    }
}

