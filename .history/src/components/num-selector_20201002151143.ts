import { bindable, BindingMode } from "aurelia";

export class NumSelector {
    @bindable({ mode: BindingMode.fromView }) min = 0;
    @bindable({ mode: BindingMode.fromView }) max = 100;
    @bindable({ mode: BindingMode.fromView }) num = 0;
    @bindable({ mode: BindingMode.fromView }) suffix = "Select";
}