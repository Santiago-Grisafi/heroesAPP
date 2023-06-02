import { Component, Input } from '@angular/core';
import { Heroe } from '../interface/heroe.model';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent {

  @Input() heroe!: Heroe;

}
