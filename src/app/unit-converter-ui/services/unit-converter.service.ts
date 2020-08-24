import { Injectable } from '@angular/core';
import { ConverterCategory, UnitConverter } from '../classes/templates';
import { TemperatureConverterCategory } from '../classes/temperatures/TemperatureConvertersCategory';
import { DistanceConverterCategory } from '../classes/distances/DistanceConvertersCategory';
import { WeightConverterCategory } from '../classes/weight/WeightConvertersCategory';
import { CurrencyConverterCategory } from '../classes/currency/CurrencyConvertersCategory';
import { ConverterCategoryBase } from '../classes/ConverterCategoryBase';

@Injectable({
  providedIn: 'root',
})
export class UnitConverterService {
  categories: ConverterCategory[] = [];

  constructor() {
    const temperatureConverterCategory = new TemperatureConverterCategory();
    const distanceConverterCategory = new DistanceConverterCategory();
    const weightConverterCategory = new WeightConverterCategory();
    const currencyConverterCategory = new CurrencyConverterCategory();

    this.categories = [
      temperatureConverterCategory,
      distanceConverterCategory,
      weightConverterCategory,
      currencyConverterCategory,
    ];
  }

  getCategories(): ConverterCategory[] {
    return this.categories;
  }
}
