import { Component, inject } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';

interface TemperatureToday {
    stage: string;
    hour: number;
}

@Component({
    selector: 'app-temperatures-today',
    imports: [],
    templateUrl: './temperatures-today.component.html',
    styleUrl: './temperatures-today.component.scss',
})
export class TemperaturesTodayComponent {
    weatherService = inject(WeatherService);
    tempList: TemperatureToday[];

    constructor() {
        this.tempList = [
            { stage: 'Morning', hour: 8 },
            { stage: 'Noon', hour: 14 },
            { stage: 'Afternoon', hour: 18 },
            { stage: 'Night', hour: 22 },
        ];
    }

    getTemperature(item: TemperatureToday) {
        return this.weatherService.weatherData != undefined
            ? this.weatherService
                  .weatherData()
                  ?.forecast!.forecastday[0].hour[item.hour].temp_c.toFixed(0)
            : 0;
    }
}
