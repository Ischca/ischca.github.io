import { bindable, BindingMode } from "aurelia";

export class NumSelector {
    @bindable({ mode: BindingMode.toView }) min = 0;
    @bindable({ mode: BindingMode.toView }) max = 100;
    @bindable({ mode: BindingMode.twoWay }) num:number = 0;
    @bindable({ mode: BindingMode.toView }) suffix = "Select";
}