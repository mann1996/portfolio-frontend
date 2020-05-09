import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryModel } from '../model/country.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private hostUrl: string = 'http://localhost:8080/location/';
  constructor(private http: HttpClient) {}

  getCountries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.hostUrl + 'countries');
  }

  getStatesByCountry(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(this.hostUrl + 'countries');
  }
}
