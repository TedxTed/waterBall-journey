import ValidatorUtils from './utils/validator-utils'

export default abstract class Scene {
  private name: string
  private number: number
  protected expAward: number

  constructor (name: string, number: number, expAward: number) {
    this.setName(name)
    this.setNumber(number)
    this.setExpAward(expAward)
  }

  public getName (): string {
    return this.name
  }

  public setName (name: string): void {
    this.name = ValidatorUtils.lengthShouldBe(name, 1, 30)
  }

  public getNumber (): number {
    return this.number
  }

  public setNumber (number: number): void {
    this.number = ValidatorUtils.checkNumberShouldBePositive(number)
  }

  public getExpAward (): number {
    return this.expAward
  }

  public setExpAward (expAward: number): void {
    this.expAward = expAward
  }

  abstract calculateExpAward (): number
}
