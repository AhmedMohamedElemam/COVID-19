import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { CountriesDetailsComponent } from './Components/countries-details/countries-details.component';
import { CountriesInquiryComponent } from './Components/countries-inquiry/countries-inquiry.component';
import { AboutComponent } from './Components/about/about.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'countries-details', component: CountriesDetailsComponent},
  {path: 'countries-inquiry', component: CountriesInquiryComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
