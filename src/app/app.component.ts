import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primeNGConfig: PrimeNGConfig){};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    this.primeNGConfig.ripple = true;

  }
  
  
  // nombre : string = 'pablo alvarez';
  // valor : number = 1000;
  // obj ={
  //   nombre: 'fernando',
  //   edad : 50
  // }

  // mostrarNombre(){
  //     console.log(this.nombre);
  //     console.log(this.valor);
  //     console.log(this.obj);

  // }



}
