import { Component, OnInit } from '@angular/core';
import { CovidSummary } from 'src/app/Classes/covid-summary.model';
import { CovidService } from 'src/app/Services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vErrorMsg;
  vloadingSpinner:boolean = true;
  vLastUpdate:Date;
  vCovidSummary:CovidSummary = new CovidSummary();

  constructor(private vCovidService:CovidService) { }

  ngOnInit() {
      this.GetCovidSummary();
  }

  GetCovidSummary(){
    this.vloadingSpinner = true;
    this.vCovidService.GetCovidSummaryData().subscribe(
      (data) => {
        this.vCovidSummary = data["Global"];
        this.vLastUpdate = data["Date"];
        this.vloadingSpinner = false;
      },
      (error) => {
        this.vErrorMsg = error["message"];
        this.vloadingSpinner = false;
      }
    );
  }

}
