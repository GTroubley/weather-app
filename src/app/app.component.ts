import { Component, inject } from '@angular/core';
import { WeatherNowComponent } from "./weather/weather-now/weather-now.component";
import { DataHandlingService } from './Services/DataHandlingService';
import { TemperaturesTodayComponent } from "./weather/temperatures-today/temperatures-today.component";
// import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
    WeatherNowComponent,
    TemperaturesTodayComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'weather-app';
    dataHandlingService = inject(DataHandlingService);
}
