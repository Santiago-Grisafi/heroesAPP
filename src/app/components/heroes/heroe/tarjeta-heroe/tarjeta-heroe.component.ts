import { Component, Input } from '@angular/core';
import { Heroe } from '../../interface/heroe.model';

@Component({
  selector: 'app-tarjeta-heroe',
  templateUrl: './tarjeta-heroe.component.html',
  styleUrls: ['./tarjeta-heroe.component.css']
})
export class TarjetaHeroeComponent {

  @Input() heroe!: Heroe; 

  
}
