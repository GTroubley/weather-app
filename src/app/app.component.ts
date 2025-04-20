import { Component, inject } from '@angular/core';
import { WeatherNowComponent } from "./weather/weather-now/weather-now.component";
import { DataHandlingService } from './Services/DataHandlingService';
// import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
    WeatherNowComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'weather-app';
    dataHandlingService = inject(DataHandlingService);
}
