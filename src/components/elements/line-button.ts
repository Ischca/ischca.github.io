import { bindable } from "aurelia";

export class LineButton {
    @bindable text: string;

    click() {
        if (!this.text) return;
        const encoded = encodeURI(this.text);
        const url = `https://line.me/R/msg/text/?${encoded}`;
        window.open(url, '_blank', 'noopener');
    }
}