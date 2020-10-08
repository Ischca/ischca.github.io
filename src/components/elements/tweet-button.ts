import { bindable } from "aurelia";

export class TweetButton {
    @bindable text: string;

    click() {
        if (!this.text) return;
        const encoded = encodeURI(this.text);
        const url = `https://twitter.com/intent/tweet?text=${encoded}&url=https://ischca.github.io/&hashtags=gotoキャンペーン`;
        window.open(url, '_blank', 'noopener');
    }
}