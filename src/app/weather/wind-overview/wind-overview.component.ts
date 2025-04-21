import { Component, inject } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';

@Component({
  selector: 'app-wind-overview',
  imports: [],
  templateUrl: './wind-overview.component.html',
  styleUrl: './wind-overview.component.scss'
})
export class WindOverviewComponent {
  weatherService = inject(WeatherService);
}
