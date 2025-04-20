import { Injectable, signal } from "@angular/core";
import { WeatherAPI } from "../Types/Types";

@Injectable({providedIn:'root'})
export class WeatherService{
    weatherData = signal<WeatherAPI | undefined>(undefined);
}