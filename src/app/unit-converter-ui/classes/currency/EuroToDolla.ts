// euro to dolla converter

import { UnitConverterBase } from "../UnitConverterBase";

export class EuroToDolla extends UnitConverterBase {
    constructor(public name: string) {
        super(name);
    }
    getInputUnit(): string {
        return "euro";
    }
    getOutputUnit(): string {
        return "dolla";
    }
    convert(inValue: string): string {
        let euro = parseFloat(inValue);
        let dolla = euro * 0.91;
        return dolla.toFixed(2);
    }
}