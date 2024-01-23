import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.sass'
})
export class CounterComponent { //aqui se encuentran varios aspectos del componente

  public counter: number = 15;

  increaseBy(value:number):void { //metodo
    this.counter +=value;
  }
  
  reset():void{
    this.counter=10;
  }

} 