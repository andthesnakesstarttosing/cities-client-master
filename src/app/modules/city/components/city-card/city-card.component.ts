import { Component, Input } from '@angular/core';
import { ICity } from 'src/app/models/city.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent {
  @Input('city') city!: ICity;
}
