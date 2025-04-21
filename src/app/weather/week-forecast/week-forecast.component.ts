import { Component, inject } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-week-forecast',
    imports: [DatePipe],
    templateUrl: './week-forecast.component.html',
    styleUrl: './week-forecast.component.scss',
})
export class WeekForecastComponent {
    weatherService = inject(WeatherService);
    forecastList: number[] = [];

    constructor() {
        this.forecastList = [0, 1, 2, 3, 4, 5, 6];
    }

    getDay(item: number) {
        return this.weatherService.weatherData()?.forecast!.forecastday[item]
            .date;
    }

    getIcon(item: number) {
        return this.weatherService.weatherData()?.forecast!.forecastday[item]
            .day.condition.icon;
    }

    getTemperature(item: number) {
        return this.weatherService
            .weatherData()
            ?.forecast!.forecastday[item].day.maxtemp_c.toFixed(0);
    }
}
