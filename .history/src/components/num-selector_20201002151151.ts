import { bindable, BindingMode } from "aurelia";

export class NumSelector {
    @bindable({ mode: BindingMode.twoWay }) min = 0;
    @bindable({ mode: BindingMode.twoWay }) max = 100;
    @bindable({ mode: BindingMode.twoWay }) num = 0;
    @bindable({ mode: BindingMode.twoWay }) suffix = "Select";
}