import { ConverterCategoryBase } from '../ConverterCategoryBase';
import { DollaToEuro } from './DollaToEuro';
import { EuroToDolla } from './EuroToDolla';

export class CurrencyConverterCategory extends ConverterCategoryBase {
  constructor(public name = 'Currency converters') {
    super(name);
    this.converters[0] = new DollaToEuro('Dolla To Euro');
    this.converters[1] = new EuroToDolla('Euro To Dolla');
  }
}
