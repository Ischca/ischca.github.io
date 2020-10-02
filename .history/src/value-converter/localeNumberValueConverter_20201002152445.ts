export class LocaleNumberValueConverter {
    signals = ['locale-changed'];
  
    toView(date) {
      return date.toLocaleString(window.currentLocale);
    }
  }
