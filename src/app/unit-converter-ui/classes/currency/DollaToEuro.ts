// dolla to euro converter

import { UnitConverterBase } from '../UnitConverterBase';

export class DollaToEuro extends UnitConverterBase {
  constructor(public name: string) {
    super(name);
  }
  getInputUnit(): string {
    return 'dolla';
  }
  getOutputUnit(): string {
    return 'euro';
  }
  convert(inValue: string): string {
    let dolla = parseFloat(inValue);
    let euro = dolla / 0.91;
    return euro.toFixed(2);
  }
}
