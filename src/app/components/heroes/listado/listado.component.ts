import { Component } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Heroe } from '../interface/heroe.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: Heroe[] = [];

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.heroeService.getHeroes().subscribe((heroes: Heroe[]) => this.heroes = heroes);
  }



}
