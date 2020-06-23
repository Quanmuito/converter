// libs to kg converter

import { UnitConverterBase } from "../UnitConverterBase";

export class LibsToKg extends UnitConverterBase {
    constructor(public name: string) {
        super(name);
    }
    getInputUnit(): string {
        return "libs";
    }
    getOutputUnit(): string {
        return "kg";
    }
    convert(inValue: string): string {
        let libs = parseFloat(inValue);
        let kg = libs * 0.453592;
        return kg.toFixed(2);
    }
}