import { Component } from '@angular/core';

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss'],
})

export class GoogleMapComponent {
  // Google map lat-long
  lat: number = 51.678418;
  lng: number = 7.809007;

  lat1: number = 51.373858;
  lng1: number = 7.215982;

  lat2: number = 52.373858;
  lng2: number = 8.215982;
}