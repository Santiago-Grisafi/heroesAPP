import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../interface/heroe.model';
import { HeroesService } from '../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe!: Heroe;

  constructor(private activatedRouter: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRouter.params.pipe(switchMap(({id})=> this.heroeService.getHeroePorId(id)))
    .subscribe((heroe : Heroe)=> this.heroe = heroe);
  }
}
