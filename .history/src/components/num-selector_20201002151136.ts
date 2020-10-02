import { bindable, BindingMode } from "aurelia";

export class NumSelector {
    @bindable({ mode: BindingMode.fromView }) min = 0;
    @bindable max = 100;
    @bindable num = 0;
    @bindable suffix = "Select";
}