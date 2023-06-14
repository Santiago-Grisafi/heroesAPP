import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { MaterialModule } from '../material/material.module';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
  ],
  exports: [
    LoginComponent,
    RegistroComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
