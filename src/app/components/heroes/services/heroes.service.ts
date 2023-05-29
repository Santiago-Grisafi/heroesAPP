import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Heroe } from "../interface/heroe.model";

@Injectable({
    providedIn: 'root',
})
export class HeroesService {

    url: string = "http://localhost:3000";

    constructor(private http: HttpClient) { }

    getHeroes = (): Observable<Heroe[]> => {
        return this.http.get<Heroe[]>(`${this.url}/heroes`);
    }

    getHeroePorId = (id: string): Observable<Heroe> => {
        return this.http.get<Heroe>(`${this.url}/heroes/${id}`);
    }

    getResults = (term: string): Observable<Heroe[]> => {
        return this.http.get<Heroe[]>(`${this.url}/heroes?q=${term}&_limit=6`);
    }

    postHeroe = (heroe: Heroe): Observable<Heroe> => {
        return this.http.post<Heroe>(`${this.url}/heroes`, heroe);
    }

    putHeroe = (heroe: Heroe): Observable<Heroe> => {
        return this.http.put<Heroe>(`${this.url}/heroes/${heroe.id}`, heroe);
    }

    deleteHeroe = (id: string): Observable<any>=>{
        return this.http.delete<any>(`${this.url}/heroes/${id}`);
    }
}