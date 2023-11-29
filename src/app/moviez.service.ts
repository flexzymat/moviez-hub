import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environmrnt';

@Injectable({
  providedIn: 'root'
})
export class MoviezService {

  url = environment.baseUrl
  favMovieUrl = environment.apiUrl
  token = environment.bearer

  constructor( private http: HttpClient) { }

  fetchMovies(page:any) {
    const apiUrl = `${this.url}`;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    headers = headers.append('Content-Type', 'application/json');

    return this.http.get<any>(`${this.url}upcoming?language=en-US&page=${page}`, {headers});
  }

  createFavorite(data: any) {
    return this.http.post<any>(`${this.favMovieUrl}`, data)
  }
  getFavorite() {
    return this.http.get<any>(`${this.favMovieUrl}`)
  }
  deleteFavorite(id: any) {
    return this.http.delete<any>(`${this.favMovieUrl}/${id}`, {})
  }
  
}
