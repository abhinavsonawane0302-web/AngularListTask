import { Component } from '@angular/core';
import { animals, animalsText, cities, citiesText, colors, colorsText, countries, countriesText, fruits, fruitsText, languages, languagesText, products, productsText, sports, sportsText, subjects, subjectsText, vehicles, vehiclesText } from './const/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularListTask';

    productsText : string = productsText
  products : string[]= products

  fruitsText: string = fruitsText
  fruits: string[] = fruits

  colorsText : string = colorsText
  colors : string[] = colors

  citiesText : string = citiesText
  cities : string[] = cities

  subjectsText : string = subjectsText
  subjects : string[] = subjects

  vehiclesText : string = vehiclesText
  vehicles : string[] = vehicles

  animalsText : string = animalsText
  animals : string[] = animals

  sportsText : string = sportsText
  sports : string[] = sports

  countriesText : string = countriesText
  countries : string[] = countries

  languagesText : string = languagesText
  languages : string[] = languages




}
