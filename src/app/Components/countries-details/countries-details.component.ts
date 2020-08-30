import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/Services/covid.service';
import { CovidCountries } from 'src/app/Classes/covid-countries.model';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.css']
})
export class CountriesDetailsComponent implements OnInit {

  vErrorMsg;
  vloadingSpinner:boolean = true;
  vCovidCountries:CovidCountries[] = [];

  constructor(private vCovidService:CovidService) { }

  ngOnInit() {
    this.GetCovidCountriesDetails();
  }

  GetCovidCountriesDetails(){
    this.vloadingSpinner = true;
    this.vCovidService.GetCovidSummaryData().subscribe(
      (data) => {
        this.vCovidCountries = data["Countries"];
        this.vloadingSpinner = false;
      },
      (error) => {
        this.vErrorMsg = error["message"];
        this.vloadingSpinner = false;
      }
    );
  }

}
