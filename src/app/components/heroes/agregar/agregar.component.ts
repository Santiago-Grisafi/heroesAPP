import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../interface/heroe.model';
import { HeroesService } from '../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private heroeService: HeroesService, private activatedRouter: ActivatedRoute, private router: Router, private snackBar: MatSnackBar, private snackDialog: MatDialog) { }

  show: boolean = false;

  publishers = [
    {
      id: 1,
      publisher: "Marvel",
      desc: "Marvel Comics"
    },
    {
      id: 2,
      publisher: "DC",
      desc: "DC Comics"
    }
  ];

  heroe: Heroe = {
    id: "",
    superhero: "",
    alter_ego: "",
    characters: "",
    publisher: Publisher.MarvelComics,
    first_appearance: "",
    alt_img: "",
  }

  ngOnInit(): void {
    this.activatedRouter.params.pipe(switchMap(({ id }) => this.heroeService.getHeroePorId(id)))
      .subscribe((heroe: Heroe) => this.heroe = heroe);
  }

  saveHero = () => {
    if (this.heroe.superhero.trim().length == 0) {
      return;
    }
    if (this.heroe.id) {
      this.heroeService.putHeroe(this.heroe).subscribe(() => {
        this.show = false;
        this.showSnackBar("Heroe Actualizado con Éxito");
        return this.router.navigate(['/heroes/listado']);
      });
    } else {
      this.heroeService.postHeroe(this.heroe).subscribe((heroe: Heroe) => {
        this.show = true;
        this.showSnackBar("Heroe Dado de Alta con Éxito");
        return this.router.navigate(['/heroes', heroe.id]);
      });
    }
  }

  deleteHeroe = (id: string) => {
    this.heroeService.deleteHeroe(id).subscribe(() => {
      this.showSnackBar("Heroe Borrado con Éxito");
      return this.router.navigate(['/heroes/listado']);
    });
  }

  showSnackBar = (msg: string): void => {
    this.snackBar.open(msg, 'Cerrar', {
      duration: 2500
    });
  }

}
