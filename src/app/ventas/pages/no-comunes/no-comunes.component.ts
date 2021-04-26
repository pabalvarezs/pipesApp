import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  // i18nselect
  nombre : string = 'Laura';
  genero : string = 'femenino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }
  // i18nplural

  clientes : string[] = ['María','Pedro','Fernando'];
  
  // ['María','Pedro','Fernando']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() : void{

    this.nombre = 'Pablo';
    this.genero = 'masculino';

    console.log(this.nombre);
    
  }

  borrarCliente(): void{
    this.clientes.pop();
    console.log(this.clientes);

  }

  // Key value pipe

  persona = {
    nombre : 'Pablo',
    edad: 30,
    direccion: 'Santiago, Chile'

  }
}
