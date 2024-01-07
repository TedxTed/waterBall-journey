import ValidatorUtils from './utils/validator-utils'

export default abstract class Scene {
  private _name: string
  private _number: number
  protected _expAward: number

  constructor (name: string, number: number, expAward: number) {
    this.name = name
    this.number = number
    this.expAward = expAward
  }

  public get name (): string {
    return this._name
  }

  public set name (value: string) {
    this._name = ValidatorUtils.lengthShouldBe(value, 1, 30)
  }

  public get number (): number {
    return this._number
  }

  public set number (value: number) {
    this._number = ValidatorUtils.checkNumberShouldBePositive(value)
  }

  public get expAward (): number {
    return this._expAward
  }

  public set expAward (value: number) {
    this._expAward = value
  }

  abstract calculateExpAward (): number
}
