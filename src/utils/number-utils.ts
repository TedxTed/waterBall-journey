import { Decimal } from 'decimal.js'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class NumberUtils {
  static checkDecimalAmountExceeds (decimal: Decimal, target: number): Decimal {
    const decimalTarget = new Decimal(target)
    if (decimal.lessThanOrEqualTo(decimalTarget)) {
      throw new Error(`The number must be bigger than ${target}`)
    }
    return decimal
  }

  static checkNumberExceeds (num: number, target: number): number {
    if (num <= target) {
      throw new Error(`The number must be bigger than ${target}`)
    }
    return num
  }

  static checkNumberShouldBePositive (num: number): number {
    if (num <= 0) {
      throw new Error('The number must be positive')
    }
    return num
  }
}
