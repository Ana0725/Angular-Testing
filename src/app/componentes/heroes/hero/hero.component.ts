import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.sass'
})
export class HeroComponent {
  public name:string ="ironman";
  public age:number=30;

  //getter o get 
  get CapitalizedName():string{ // propiedad pero metodo (?)
    return this.name.toUpperCase();
  }

  // metodos jaja

  getHeroDescription():string{
    return `${this.name}-${this.age}`
  }

  changeHero():void{
    //throw 'metodo no implementado' 
    // algo que se acostumbra a ahcer implementando metodos, es hacer este throw cuando aun no se implementa nada en un metodo que se planea realizar
    this.name='Marco'
  }

  changeAge():void{
    this.age=20;
  }

}
