import { ConverterCategoryBase } from "../ConverterCategoryBase";
import { KgToLibs } from "./KgToLibs";
import { LibsToKg } from "./LibsToKg";

export class WeightConverterCategory extends ConverterCategoryBase {
    constructor(public name = "Weight converters") {
        super(name);
        this.converters[0] = new KgToLibs("Kg to Libs");
        this.converters[1] = new LibsToKg("Libs to Kg");
    }
}