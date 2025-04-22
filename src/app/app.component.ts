import { Component, inject } from '@angular/core';
import { WeatherNowComponent } from "./weather/weather-now/weather-now.component";
import { DataHandlingService } from './Services/DataHandlingService';
import { TemperaturesTodayComponent } from "./weather/temperatures-today/temperatures-today.component";
import { WeatherDateComponent } from "./weather/weather-date/weather-date.component";
import { WeekForecastComponent } from "./weather/week-forecast/week-forecast.component";
import { WindOverviewComponent } from "./weather/wind-overview/wind-overview.component";
import { UvIndexComponent } from "./weather/uv-index/uv-index.component";
import { SunriseSunsetComponent } from "./weather/sunrise-sunset/sunrise-sunset.component";
import { MinorOverviewComponent } from "./weather/minor-overview/minor-overview.component";
import { WeatherService } from './Services/WeatherService';
// import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
    WeatherNowComponent,
    TemperaturesTodayComponent,
    WeatherDateComponent,
    WeekForecastComponent,
    WindOverviewComponent,
    UvIndexComponent,
    SunriseSunsetComponent,
    MinorOverviewComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'weather-app';
    dataHandlingService = inject(DataHandlingService);
    weatherService = inject(WeatherService);
}
