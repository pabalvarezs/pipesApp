import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas',
})
export class MayusculasPipe implements PipeTransform{
    
    transform( valor : string, enMayuscula : boolean = true ) : string{
        
        // if (enMayuscula===true) {
        // if (enMayuscula) {
            
        //     return valor.toUpperCase();
            
        // } else {
        //     return valor.toLowerCase();
        // }

        return (enMayuscula) ? valor.toUpperCase() : valor.toLowerCase();
    }

}