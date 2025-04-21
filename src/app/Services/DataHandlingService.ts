import { inject, Injectable } from '@angular/core';
import { WeatherAPI } from '../Types/Types';
import { WeatherService } from './WeatherService';

@Injectable({ providedIn: 'root' })
export class DataHandlingService {
    private apiKey = 'key goes here';
    private baseUrl = 'https://api.weatherapi.com/v1/forecast.json?';
    private location = 'New York';
    private days = '7';

    weatherService = inject(WeatherService);

    constructor() {
        const apiUrl =
            this.baseUrl +
            'q=' +
            this.location +
            '&days=' +
            this.days +
            '&key=' +
            this.apiKey;
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((weatherData: WeatherAPI) => {
                console.log('Weather Data:', weatherData);
                this.weatherService.weatherData.set(weatherData);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
