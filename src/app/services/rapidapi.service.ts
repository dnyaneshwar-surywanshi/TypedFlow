import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

  url = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  constructor(private httpClient: HttpClient) { }

  getDataBBFinance() {
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key' : 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177'
    })
    return this.httpClient.get(this.url, { headers: headers });
  }
}
