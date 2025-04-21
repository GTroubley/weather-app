import { AfterContentInit, Component, inject } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-weather-date',
    imports: [DatePipe],
    templateUrl: './weather-date.component.html',
    styleUrl: './weather-date.component.scss',
})
export class WeatherDateComponent implements AfterContentInit {
    weatherService = inject(WeatherService);
    date = "";
    
    ngAfterContentInit(): void {
        this.date = this.weatherService.weatherData() != undefined
        ? Date.parse(this.weatherService.weatherData()?.location.localtime!).toString()
        : Date.now().toString();
    }
}
