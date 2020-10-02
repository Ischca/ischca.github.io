import { bindable, BindingMode } from "aurelia";

export class NumSelector {
    @bindable({ mode: BindingMode.toView }) min = 0;
    @bindable({ mode: BindingMode.toView }) max = 100;
    @bindable({ mode: BindingMode.fromView }) num = 0;
    @bindable({ mode: BindingMode.fromView }) suffix = "Select";
}