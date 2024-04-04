import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  P=''; //preço
  R=''; //Região
  IA=0; //imposto adicionado em dolar
  PF=0; //Prço final em dolar
  TD=0; // tempo de demora
  D=''; // valor do dolar
  IR=0; // Imposto adicionado em real
  PFR=0; // Preço final em real

  constructor() {}


  Calcular(){
    if (parseFloat(this.P) < 50) {
this.IA=0;
this.IR=0;
    }else{
      if (parseFloat(this.P) <=100 ){
        this.IA=parseFloat(this.P)*0.3;
        this.IR=this.IA*parseFloat(this.D);
      }else{
       this.IA=parseFloat(this.P)*0.5;
       this.IR=this.IA*parseFloat(this.D)
        }
      } this.PF= parseFloat(this.P)+this.IA;
      this.PFR= this.PF*parseFloat(this.D)

      if (this.R.toUpperCase() === 'SUDESTE' || this.R.toUpperCase() === 'SUL' ) {
        this.TD = 10;
      } else if (this.R.toUpperCase() === 'NORDESTE' || this.R.toUpperCase() === 'CENTRO-OESTE' ){
        this.TD = 15;
      }
      else if (this.R.toUpperCase() === 'NORTE'){
        this.TD = 20;
      }
      }
      }




