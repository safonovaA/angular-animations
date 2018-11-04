import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroesService {
  private apiUrl = 'https://hotsapi.net/api/v1/heroes';
  constructor(private http: HttpClient) { }

  public fetchHeroes() {
    return this.http.get(this.apiUrl);
  }
}
