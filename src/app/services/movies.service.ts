import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private http: HttpClient) {}

  getInfoMovies(page: number) {
    const route = `${environment.API_MOVIE}?page=${page}&language=es&api_key=${environment.API_KEY}`;
    return this.http.get(route);
  }

  getNameMovie(name: string) {
    const route = `${environment.API_MOVIE_SEARCH}?query=${name}&language=es&api_key=${environment.API_KEY}`;
    return this.http.get(route);
  }
}
