import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Classes/country.model';
import { CovidService } from 'src/app/Services/covid.service';
import { CovidCountries } from 'src/app/Classes/covid-countries.model';
import { CountryHistory } from 'src/app/Classes/country-history.model';
declare var $: any; // To Use jquery

@Component({
  selector: 'app-countries-inquiry',
  templateUrl: './countries-inquiry.component.html',
  styleUrls: ['./countries-inquiry.component.css']
})
export class CountriesInquiryComponent implements OnInit {

  vErrorMsg;
  vNoDataFound;
  vShowModal;
  vFilterVal;
  vloadingSpinner:boolean = true;
  vCountries:Country[] = [];
  vCovidCountries:CovidCountries[] = [];
  vCountryHistory:CountryHistory[] = [];
  vCountryDetails:CovidCountries = new CovidCountries();

  constructor(private vCovidService:CovidService) { }

  ngOnInit() {
    this.GetAllCountries();
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

  GetAllCountries(){
    this.vloadingSpinner = true;
    this.vCovidService.GetCountries().subscribe(
      (data) => {
        this.vCountries = data as Country[];
        this.vCountries = this.vCountries.sort((a,b) =>  (a.Country > b.Country ? 1 : -1));
        this.vloadingSpinner = false;
      },
      (error) => {
        this.vErrorMsg = error["message"];
        this.vloadingSpinner = false;
      }
    );
  }

  FilterCountryDetails(pFilterVal: any) {
    this.vNoDataFound = "";
    this.vShowModal = false;
    this.vFilterVal = pFilterVal;
    if (pFilterVal == "")
        this.vCountryDetails = new CovidCountries();
    else
    {
        this.vCountryDetails = this.vCovidCountries.find((item) => item.Slug == pFilterVal);
        if(this.vCountryDetails == null)
        {
           this.vNoDataFound = "No Data Found For This Country";
           this.vCountryDetails = new CovidCountries();
        }
        else
           this.vShowModal = true;
    }
  }

  GetCountryHistory(){
    this.vCovidService.GetCountryHistory(this.vFilterVal).subscribe(
      (data) => {
        this.vCountryHistory = data as CountryHistory[];
        $("#myModal").modal('show');
      },
      (error) => {
        this.vErrorMsg = error["message"];
        $("#myModal").modal('hide');
      }
    );
 }

  showModal():void {
        $("#myModal").modal('show');
  }

  hideModal():void {
        $("#myModal").modal('hide');
  }

}
