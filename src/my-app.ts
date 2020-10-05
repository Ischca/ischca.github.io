import { BigNumber } from "bignumber.js";
import flatpickr from "flatpickr";
import { Japanese } from "flatpickr/dist/l10n/ja";

export class MyApp {
  people = 1;
  totalAccommodationFee = 0;
  calendar: Element;
  fp: flatpickr.Instance;
  days = 0;
  night = 0;

  afterAttach() {
    this.fp = flatpickr(this.calendar, {
      mode: "range",
      locale: Japanese,
      dateFormat: 'Y/m/j',
      minDate: '2020/10/01',
      maxDate: '2021/2/1',
      onChange: (selectedDates) => {
        const start = selectedDates[0]?.getDate();
        const end = selectedDates[1]?.getDate();
        this.night = end >= start ? end - start : 0;
        this.days = this.night >= 0 ? this.night + 1 : 0;
      }
    });
  }

  get total(): number {
    const x = new BigNumber(this.totalAccommodationFee)
    if (!x.isNaN()) {
      return x.minus(this.discountAmount)
        .dp(0, BigNumber.ROUND_DOWN)
        .toNumber();
    }
    else return this.totalAccommodationFee;
  }

  get discountAmount(): BigNumber {
    const x = new BigNumber(this.totalAccommodationFee)
    if (!x.isNaN()) {
      const x2 = x.times(0.5).gt(this.maxBenefitAmount) ? this.maxBenefitAmount : x.times(0.5);
      return x2.times(0.7)
        .dp(0, BigNumber.ROUND_DOWN);
    }
    else return x;
  }

  get couponAmount(): BigNumber {
    const x = new BigNumber(this.totalAccommodationFee)
    if (!x.isNaN()) {
      const x2 = x.times(0.5).gt(this.maxBenefitAmount) ? this.maxBenefitAmount : x.times(0.5);
      const round = x2.times(0.3)
        .div(1000)
        .dp(0, BigNumber.ROUND_HALF_UP)
        .times(1000);
      return new BigNumber(round);
    }
    else return x;
  }

  get maxBenefitAmount(): BigNumber {
    const x = this.night === 0 ? 10000 : 20000;
    return new BigNumber(x)
      .times(this.night === 0 ? 1 : this.night)
      .times(this.people);
  }

  get yield(): number {
    if (this.totalAccommodationFee > 0) {
      return this.discountAmount
        .plus(this.couponAmount)
        .div(this.totalAccommodationFee)
        .times(100)
        .dp(0, BigNumber.ROUND_HALF_UP)
        .toNumber();
    }
    else return 0;
  }
}
