// este archivo es el cerebro y corazon del componente.

import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//import components
import { HeaderComponent } from './componentes/header/header.component';
import { CounterComponent } from './componentes/counter/counter.component';
import { HeroComponent } from './componentes/heroes/hero/hero.component';
import { ListComponent } from './componentes/heroes/list/list.component';


@Component({
  //decorador que tranforma mi clase a ser un componente
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,CounterComponent,HeroComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent { //aqui se encuentran varios aspectos del componente,como los  metodos
  public title: string = 'Angular';

} 