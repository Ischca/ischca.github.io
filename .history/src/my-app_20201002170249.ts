export class MyApp {
  night = 1;
  days = 2;
  people = 1;
  accommodationFee = 0;
  // transportFee = 0;

  get total(): number {
    return this.accommodationFee * this.night;
  }

  get discountAmount(): number {
    return this.accommodationFee * 0.5 * 0.7;
  }

  get couponAmount(): number {
    return Math.floor(this.accommodationFee * 0.5 * 0.3);
  }
}
