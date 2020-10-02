export class LocaleNumberValueConverter {
    toView(num: number) {
        console.log(num.toLocaleString('ja-JP'));
        return num.toLocaleString('ja-JP');
    }
}
