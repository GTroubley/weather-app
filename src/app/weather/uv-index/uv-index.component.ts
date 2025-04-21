import { Component, inject } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';

@Component({
    selector: 'app-uv-index',
    imports: [],
    templateUrl: './uv-index.component.html',
    styleUrl: './uv-index.component.scss',
})
export class UvIndexComponent {
    weatherService = inject(WeatherService);
}
