import { Component, ViewChild } from '@angular/core';
import { Heroe } from '../interface/heroe.model';
import { HeroesService } from '../services/heroes.service';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  term: string = "";
  heroes: Heroe[] = [];
  heroe!: Heroe | undefined; 

  constructor(private heroesService: HeroesService){}

  setResults = () =>{
    this.heroesService.getResults(this.term.toLocaleLowerCase()).subscribe((heroes: Heroe[])=> this.heroes = heroes);
  }

  getSelectedOption = (event: MatAutocompleteSelectedEvent) =>{
    if(!event.option.value){this.heroe = undefined; return;}
    let heroe: Heroe = event.option.value;
    this.term = heroe.superhero;
    this.heroesService.getHeroePorId(heroe.id).subscribe((heroe: Heroe) => this.heroe = heroe);
  }
 }
