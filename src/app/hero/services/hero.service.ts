import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {
  private apiUrl = 'https://hotsapi.net/api/v1/heroes';
  constructor(private http: HttpClient) { }

  public fetchHero(name) {
    return this.http.get(`${this.apiUrl}/${name}`);
  }
}
