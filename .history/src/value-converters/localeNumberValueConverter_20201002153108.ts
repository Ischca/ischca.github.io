export class LocaleNumberValueConverter {
    toView(num: number) {
        console.log(num.toLocaleString('ja-JP'));
        console.log(num.toLocaleString(window.currentLocale));
        return num.toLocaleString('ja-JP');
    }
}
