import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, tap, of } from "rxjs";
import { Auth } from "../interfaces/auth.interface";
import { environment } from "src/environments/environment.prod";

@Injectable({
    providedIn: 'root',
})
export class AuthService {


    private baseUrl: string = environment.baseUrl;
    private _auth!: Auth | undefined;

    get auth(): Auth {
        return { ...this._auth! }
    }

    constructor(private http: HttpClient) { }


    verificaAutenticacion(): Observable<boolean> {
        if (!localStorage.getItem('token')) {
            return of(false);
        }

        return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(map(auth => {
                this._auth = auth;
                return true;
            }
            )
            );

    }


    login() {
        return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
            .pipe(
                tap(auth => { return this._auth = auth }),
                tap(auth => localStorage.setItem('token', auth.id)),
            );
    }

    logout() {
        this._auth = undefined;
    }


}