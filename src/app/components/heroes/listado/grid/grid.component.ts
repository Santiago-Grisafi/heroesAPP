import { Component, Input } from '@angular/core';
import { Heroe } from '../../interface/heroe.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  @Input() heroes: Heroe[] = [];

}
