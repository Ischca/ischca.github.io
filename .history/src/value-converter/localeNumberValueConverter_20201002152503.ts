export class LocaleNumberValueConverter {
    toView(num: number) {
        return num.toLocaleString('ja-JP');
    }
}
