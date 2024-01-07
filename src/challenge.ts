import { NumberUtils } from './utils/number-utils'
import { StringUtils } from './utils/string-utils'

export default class Challenge {
  private _name: string
  private _number: number

  constructor (name: string, number: number) {
    this.name = name
    this.number = number
  }

  public get name (): string {
    return this._name
  }

  public set name (value: string) {
    this._name = StringUtils.lengthShouldBe(value, 1, 30)
  }

  public get number (): number {
    return this._number
  }

  public set number (value: number) {
    this._number = NumberUtils.checkNumberShouldBePositive(value)
  }
}
