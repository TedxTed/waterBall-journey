// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class StringUtils {
  static lengthShouldBe (str: string, max: number, min: number): string {
    if (typeof str !== 'string') {
      throw new TypeError('Provided value must be a string')
    }

    if (typeof max !== 'number' || typeof min !== 'number') {
      throw new TypeError('Max and min values must be numbers')
    }

    if (str.length > max || str.length < min) {
      throw new Error(`Length of '${str}' should be between ${min} and ${max}`)
    }

    return str
  }
}
