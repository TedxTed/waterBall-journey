class Challenge {
  private name: string
  private number: number

  constructor (name: string, number: number) {
    this.setName(name)
    this.setNumber(number)
  }

  public getName (): string {
    return this.name
  }

  public getNumber (): number {
    return this.number
  }

  public setName (name: string): void {
    this.name = StringUtils.lengthShouldBe(name, 1, 30)
  }

  public setNumber (number: number): void {
    this.number = NumberUtils.checkNumberShouldBePositive(number)
  }
}
