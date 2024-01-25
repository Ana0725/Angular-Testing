import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass',
})
export class ListComponent {

  public heroNames: string[] = [
    'Iron man',
    'spider man',
    'kamala',
    'Ant man',
    'Super man',
  ];

  // para que esas variables vivan fuera se tieen que crear como propiedad de clase

  public deletedHero?:string;

  removeLastHero(): void { // las variables declaradas dentro de estos metodos, solo viven ahi
    this.deletedHero = this.heroNames.pop();
  }
}
