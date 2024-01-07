import { type Decimal } from 'decimal.js'
import { StringUtils } from './utils/string-utils'
import { NumberUtils } from './utils/number-utils'
import type Chapter from './chapter'

export default class Journey {
  private _name: string
  private _description: string
  private _price: Decimal
  private _chapters: Chapter[]

  constructor (name: string, description: string, price: Decimal, chapters: Chapter[]) {
    this.name = name
    this.description = description
    this.price = price
    this.chapters = chapters
  }

  public get name (): string {
    return this._name
  }

  public set name (value: string) {
    this._name = StringUtils.lengthShouldBe(value, 30, 1)
  }

  public get description (): string {
    return this._description
  }

  public set description (value: string) {
    this._description = StringUtils.lengthShouldBe(value, 300, 0)
  }

  public get price (): Decimal {
    return this._price
  }

  public set price (value: Decimal) {
    this._price = NumberUtils.checkDecimalAmountExceeds(value, 0)
  }

  public get chapters (): Chapter[] {
    return this._chapters
  }

  public set chapters (value: Chapter[]) {
    this._chapters = ArrayUtils.requireNonNull(value)
  }
}
