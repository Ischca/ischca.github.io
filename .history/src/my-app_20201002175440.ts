import { BigNumber } from "bignumber.js";

export class MyApp {
  night = 1;
  days = 2;
  people = 1;
  accommodationFee = 0;
  // transportFee = 0;

  get total(): number {
    let x = new BigNumber(this.accommodationFee)
    if (!x.isNaN())
      return x.times(this.night).toNumber();
    else return this.accommodationFee;
  }

  get discountAmount(): number {
    let x = new BigNumber(this.accommodationFee)
    if (!x.isNaN()) {
      let oneDay = x.times(0.5).times(0.7);
      if (oneDay.gt(20000)) oneDay = new BigNumber(20000);
      return oneDay.times(this.night).toNumber();
    }
    else return this.accommodationFee;
  }

  get couponAmount(): number {
    let x = new BigNumber(this.accommodationFee)
    if (!x.isNaN()) {
      let oneDay = x.times(0.5).times(0.3);
      if (oneDay.gt(20000)) oneDay = new BigNumber(20000);
      return oneDay.times(this.night).toNumber();
    }
    else return this.accommodationFee;
  }
}
