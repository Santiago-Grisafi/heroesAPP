import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  _auth: Auth | undefined;

  get auth() {
    return this.authService.auth;
  }

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.login().subscribe((auth)=> this._auth = auth);;
  }

  logout() {
    this.router.navigate(['./auth']);
  }


}
