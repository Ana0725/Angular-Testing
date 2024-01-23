
import {Component} from '@angular/core'; //angular core es una seccion de angular que ofrece muchas cosas, entre ellas la creacion de componentes.

//imports de angular material 
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({ //se compone de 2 secciones selector y template
  selector: 'app-header', //es como quiero llamar yo mi componente, estas son las etiquetas personalizadas de html
  standalone: true,
  imports: [MatSelectModule,MatInputModule,MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {

}
