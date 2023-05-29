import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from '../agregar/agregar.component';
import { ListadoComponent } from '../listado/listado.component';
import { HeroeComponent } from '../heroe/heroe.component';
import { HomeComponent } from '../home/home.component';
import { BuscadorComponent } from '../buscador/buscador.component';

const routes: Routes =
  [
    {
      path: '',
      component: HomeComponent,
      children: [
        { path: 'agregar', component: AgregarComponent },
        { path: 'listado', component: ListadoComponent },
        { path: 'heroe/:id', component: HeroeComponent },
        { path: 'editar/:id', component: AgregarComponent },
        { path: 'buscador', component: BuscadorComponent },
        { path: '**', redirectTo: 'listado' }
      ]
    }
  ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
