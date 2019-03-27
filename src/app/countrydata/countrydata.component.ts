import { Component, OnInit } from '@angular/core';
import { CountrydetailsService } from '../countrydetails.service';
import{ICountry} from '../country'

@Component({
  selector: 'app-countrydata',
  templateUrl: './countrydata.component.html',
  styleUrls: ['./countrydata.component.css'],
  providers:[CountrydetailsService]
})
export class CountrydataComponent implements OnInit {

  constructor(private countryservice: CountrydetailsService) { }
  countryinfo:ICountry[];
  ngOnInit() {
    this.getcountryinfo();
    console.log(this.countryinfo)
  }

  getcountryinfo() {

    this.countryservice.getData().subscribe(data => {
      this.countryinfo = data;
      console.log(this.countryinfo)
    });

  }
}

