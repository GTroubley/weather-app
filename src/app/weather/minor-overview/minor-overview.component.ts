import { Component, inject, Input, output, Output } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';

@Component({
  selector: 'app-minor-overview',
  imports: [],
  templateUrl: './minor-overview.component.html',
  styleUrl: './minor-overview.component.scss'
})
export class MinorOverviewComponent {
  @Input({required:true}) title!:string;
  @Input({required:true}) image!:string;
  @Input({required:true}) value!:string;
  @Input({required:true}) unit!:string;
  @Input({required:true}) desc!:string;
}
