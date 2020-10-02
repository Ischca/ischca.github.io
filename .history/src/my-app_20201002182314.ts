import { BigNumber } from "bignumber.js";

export class MyApp {
  night = 1;
  days = 2;
  people = 1;
  totalAccommodationFee = 0;
  // transportFee = 0;

  get total(): number {
    let x = new BigNumber(this.totalAccommodationFee)
    if (!x.isNaN())
      return x.times(this.night).minus(this.discountAmount).toNumber();
    else return this.totalAccommodationFee;
  }

  get discountAmount(): number {
    let x = new BigNumber(this.totalAccommodationFee)
    if (!x.isNaN()) {
      let oneDay = x.times(0.5);
      if (oneDay.toNumber() > 20000) oneDay = new BigNumber(20000);
      return oneDay.times(0.7).times(this.night).toNumber();
    }
    else return this.totalAccommodationFee;
  }

  get couponAmount(): number {
    let x = new BigNumber(this.totalAccommodationFee)
    if (!x.isNaN()) {
      let oneDay = x.times(0.5);
      if (oneDay.toNumber() > 20000) oneDay = new BigNumber(20000);
      return oneDay.times(0.3).times(this.night).times(this.people).toNumber();
    }
    else return this.totalAccommodationFee;
  }

  get maxBenefitAmount(): number{
    return 20000 * this.night;
  }
}
