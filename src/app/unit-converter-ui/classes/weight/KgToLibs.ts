// kg to libs converter

import { UnitConverterBase } from "../UnitConverterBase";

export class KgToLibs extends UnitConverterBase {
    constructor(public name: string) {
        super(name);
    }
    getInputUnit(): string {
        return "kg";
    }
    getOutputUnit(): string {
        return "libs";
    }
    convert(inValue: string): string {
        let kg = parseFloat(inValue);
        let libs = kg * 2.20462;
        return libs.toFixed(2);
    }
}