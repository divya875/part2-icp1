import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];
  formattedAddress = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  recepieApi = 'https://api.edamam.com/search?q=';
  recepieAppid = '&app_id=20142051';
  recepieKey = '&app_key=f51e46d3bf6aa3d4dfe02c3d07b1c497';

  placesApi = 'https://api.foursquare.com/v2/venues/search?';
  clientdId = 'client_id=U144GWH2VKUIQ1TXDUN0CYXD2FFH5IWB1GGJX3DBXNXXSJ5I';
  clientSecret = '&client_secret=0G5HVFCPORV4KPCGNQIYDA4Y5J3KZR512MMCMXTNXHA4WLME';
  version = '&v=20180323';
  near = '&near=';
  query = '&query=';
  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if (this.recipeValue !== null) {
      this._http.get( this.recepieApi + this.recipeValue + this.recepieAppid + this.recepieKey).subscribe((res: any) => {
        console.log("reciepe search object from edamam api");
        console.log(res);
        this.recipeList = Object.keys(res.hits).map(function (k) {
          const i = res.hits[k].recipe;
          return {name: i.label, icon: i.image, url: i.url};
        });

      });

    }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
      this._http.get( this.placesApi  + this.clientdId + this.clientSecret + this.version
        + this.near + this.placeValue).subscribe((res: any) => {
        console.log(res);
        this.venueList = Object.keys(res.response.venues).map(function (k) {
          const i = res.response.venues[k];
          return {name: i.name, location: i.location.formattedAddress, currentLat: '39.0349657', currentLong: '-94.5787524', formattedAddress: i.location.formattedAddress};
        });
      });
    }
  }
}
