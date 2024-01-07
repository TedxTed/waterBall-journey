import type Mission from './mission'
import { NumberUtils } from './utils/number-utils'
import { StringUtils } from './utils/string-utils'
import ValidatorUtils from './utils/validator-utils'

export default class Chapter {
  private _name: string
  private _number: number
  private _missions: Mission[]

  constructor (name: string, number: number, missions: Mission[]) {
    this.name = name
    this.number = number
    this.missions = missions
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

  public get missions (): Mission[] {
    return this._missions
  }

  public set missions (value: Mission[]) {
    this._missions = ValidatorUtils.requireNonNull(value)
  }
}
