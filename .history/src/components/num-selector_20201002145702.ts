import { bindable } from "aurelia";

export class NumSelector {
    @bindable min = 0;
    @bindable max = 100;
    @bindable num = 0;
    @bindable suffix = "Select";
}