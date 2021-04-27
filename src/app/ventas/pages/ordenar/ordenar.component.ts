import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
  enMayuscula : boolean = true;


  cambiarMayuscula(){
    
    this.enMayuscula = !this.enMayuscula
    // console.log(this.enMayuscula);
    

  }



}
