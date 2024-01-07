// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class ValidatorUtils {
  static requireNonNull<T>(value: T | null | undefined): T
  static requireNonNull<T>(value: T[] | null | undefined): T[]
  static requireNonNull<T>(value: T | T[] | null | undefined): T | T[] {
    if (value === null || value === undefined) {
      throw new Error('Value must not be null or undefined.')
    }

    if (Array.isArray(value) && value.some(item => item === null || item === undefined)) {
      throw new Error('Array must not contain null or undefined elements.')
    }

    return value
  }

  static checkNumberExceeds (num: number, target: number): number {
    if (num <= target) {
      throw new Error(`The number must be bigger than ${target}.`)
    }
    return num
  }

  static checkNumberShouldBePositive (num: number): number {
    if (num <= 0) {
      throw new Error('The number must be positive.')
    }
    return num
  }

  static lengthShouldBe (str: string, min: number, max: number): string {
    if (typeof str !== 'string') {
      throw new TypeError('Provided value must be a string.')
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
      throw new TypeError('Min and max values must be numbers.')
    }
    if (str.length < min || str.length > max) {
      throw new Error(`Length of string must be between ${min} and ${max}.`)
    }
    return str
  }
}
