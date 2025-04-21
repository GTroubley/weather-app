import { Component, inject } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';

@Component({
  selector: 'app-sunrise-sunset',
  imports: [],
  templateUrl: './sunrise-sunset.component.html',
  styleUrl: './sunrise-sunset.component.scss'
})
export class SunriseSunsetComponent {
  weatherService = inject(WeatherService);
}
