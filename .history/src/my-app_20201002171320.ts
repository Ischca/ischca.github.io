import { BigNumber } from "bignumber.js";

export class MyApp {
  night = 1;
  days = 2;
  people = 1;
  accommodationFee:number = 0;
  // transportFee = 0;

  get total(): number {
    return new BigNumber(this.accommodationFee).times(this.night).toNumber();
  }

  get discountAmount(): number {
    return new BigNumber(this.accommodationFee).times(0.5,0.7).toNumber();
  }

  get couponAmount(): number {
    return new BigNumber(this.accommodationFee).times(0.5, 0.3).toNumber();
  }
}
