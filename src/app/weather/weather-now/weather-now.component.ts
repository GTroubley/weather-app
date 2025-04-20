import { Component, inject } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';

@Component({
    selector: 'app-weather-now',
    imports: [],
    templateUrl: './weather-now.component.html',
    styleUrl: './weather-now.component.scss',
})
export class WeatherNowComponent {
    weatherService = inject(WeatherService);
}
