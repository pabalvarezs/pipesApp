import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
    name:'vuela',
})
export class VuelaPipe implements PipeTransform{
    
    transform( vuela : boolean ) : string{
        
        return (vuela) ? 'vuela' : 'no vuela'
    }

}