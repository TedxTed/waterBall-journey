import { type Decimal } from 'decimal.js'
import { StringUtils } from './utils/string-utils'
import { NumberUtils } from './utils/number-utils'
import type Chapter from './chapter'

export default class Journey {
  private name: string
  private description: string
  private price: Decimal
  private chapters: Chapter[]

  constructor (name: string, description: string, price: Decimal, chapters: Chapter[]) {
    this.setName(name)
    this.setDescription(description)
    this.setPrice(price)
  }

  public setName (name: string): void {
    this.name = StringUtils.lengthShouldBe(name, 30, 1)
  }

  public setDescription (description: string): void {
    this.description = StringUtils.lengthShouldBe(description, 0, 300)
  }

  public setPrice (price: Decimal): void {
    this.price = NumberUtils.checkDecimalAmountExceeds(price, 1)
  }

  public setChapter (chapters: Chapter[]): void {
    this.chapters = ArrayUtils.requireNonNull(chapters)
  }

  public getName (): string {
    return this.name
  }

  public getDescription (): string {
    return this.description
  }

  public getPrice (): Decimal {
    return this.price
  }

  public getChapters (): Chapter[] {
    return this.chapters
  }
}
