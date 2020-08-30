import { Injectable } from '@angular/core';
import { CovidSummary } from '../Classes/covid-summary.model';
import { CovidCountries } from '../Classes/covid-countries.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  vSummaryUrl:string = "https://api.covid19api.com/summary";
  vCountriesUrl:string = "https://api.covid19api.com/countries";
  vCountryHistoryUrl:string = "https://api.covid19api.com/dayone/country";

  constructor(private vHttpClient:HttpClient) { }

  GetCovidSummaryData() {
    return this.vHttpClient.get(this.vSummaryUrl);
  }

  GetCountries() {
    return this.vHttpClient.get(this.vCountriesUrl);
  }
  
  GetCountryHistory(pCountrySlug) {
    return this.vHttpClient.get(this.vCountryHistoryUrl + "/" + pCountrySlug);
  }

}
