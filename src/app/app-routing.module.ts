import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroeComponent } from "./components/heroes/heroe/heroe.component";
import { ListadoComponent } from "./components/heroes/listado/listado.component";
import { AgregarComponent } from "./components/heroes/agregar/agregar.component";
import { ErrorPageComponent } from "./shared/error-page/error-page.component";

let routes: Routes =
    [
        { path: '404', component: ErrorPageComponent },
        { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
        { path: 'heroes', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule) },
        { path: '**', redirectTo: '404', pathMatch: 'full' },
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }