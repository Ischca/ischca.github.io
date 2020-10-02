export class LocaleNumberValueConverter {
    toView(num: string) {
        return parseInt(num).toLocaleString('ja-JP');
    }
}
