import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  P=''; //preço
  R=''; //Região
  IA=0; //imposto adicionado
  PF=0; //Prço final
  TD=0; // tempo de demora

  constructor() {}


  Calcular(){
    if (parseFloat(this.P) < 50) {
this.IA=0;
    }else{
      if (parseFloat(this.P) < 100 ){
        this.IA=parseFloat(this.P)*0.3;
      }else{
        if (parseFloat(this.P) > 100.1){
          this.IA=parseFloat(this.P)*0.5;
        }
      }
    }

    this.PF= parseFloat(this.P)+this.IA;

    if (this.R == "Sudeste") {
      this.TD = 10;
    }else {
      if (this.R == "Sul"){
        this.TD = 10;
      }else {
        if (this.R == "Centro-Oeste") {
          this.TD = 15;
        }else {
          if (this.R == "Nordeste") {
            this.TD = 15;
      }else {
        if (this.R == "Norte") {
          this.TD = 20;
    }


  }
}
  }
} }}
