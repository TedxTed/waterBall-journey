// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class ArrayUtils {
  static requireNonNull<T>(list: T[]): T[] {
    if (list === null) {
      throw new Error('The array must not be null.')
    }

    const hasNull = list.some(element => element === null || element === undefined)

    if (hasNull) {
      throw new Error('The array must not contain null or undefined elements.')
    }

    return list
  }
}
