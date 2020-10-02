import { bindable, BindingMode } from "aurelia";

export class NumSelector {
    @bindable({ mode: BindingMode.toView }) min = 0;
    @bindable({ mode: BindingMode.toView }) max = 100;
    @bindable({ mode: BindingMode.twoWay }) private _num = 0;
    @bindable({ mode: BindingMode.toView }) suffix = "Select";

    get num():number { return this._num; }
    set num(value: number) { this._num = Number(value);}
}