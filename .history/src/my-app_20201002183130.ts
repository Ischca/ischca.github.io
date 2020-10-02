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
      return x.minus(this.discountAmount).toNumber();
    else return this.totalAccommodationFee;
  }

  get discountAmount(): number {
    let x = new BigNumber(this.totalAccommodationFee)
    if (!x.isNaN()) {
      return x.times(0.5).times(0.7).toNumber();
    }
    else return this.totalAccommodationFee;
  }

  get couponAmount(): number {
    let x = new BigNumber(this.totalAccommodationFee)
    if (!x.isNaN()) {
      return x.times(0.5).times(0.3).toNumber();
    }
    else return this.totalAccommodationFee;
  }

  get maxBenefitAmount(): number{
    return 20000 * this.night;
  }
}
