import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { AgregarComponent } from './heroes/agregar/agregar.component';
import { HeroesRoutingModule } from './heroes/heroes-routing/heroes-routing.module';
import { HomeComponent } from './heroes/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroesService } from './heroes/services/heroes.service';
import { GridComponent } from './heroes/listado/grid/grid.component';
import { CardComponent } from './heroes/listado/grid/card/card.component';
import { TarjetaHeroeComponent } from './heroes/heroe/tarjeta-heroe/tarjeta-heroe.component';
import { PipeImage } from './heroes/pipes/pipeImage.pipe';
import { BuscadorComponent } from './heroes/buscador/buscador.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoComponent,
    HeroeComponent,
    AgregarComponent,
    HomeComponent,
    GridComponent,
    CardComponent,
    TarjetaHeroeComponent,
    PipeImage,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ListadoComponent,
    HeroeComponent,
    AgregarComponent,
    BuscadorComponent,
    PipeImage,
    TarjetaHeroeComponent
  ],
  providers:[
    HeroesService
  ]
})
export class ComponentsModule { }
