import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre : string = 'Laura';
  genero : string = 'femenino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }

}
