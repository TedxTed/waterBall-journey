import { type Decimal } from 'decimal.js'
import { StringUtils } from './utils/string-utils'
import { NumberUtils } from './utils/number-utils'
import type Chapter from './chapter'
import Adventurer from './adventurer'
import type Student from './student'

export default class Journey {
  private _name: string
  private _description: string
  private _price: Decimal
  private _chapters: Chapter[]
  private _adventures: Adventurer[]

  constructor (name: string, description: string, price: Decimal, chapters: Chapter[], adventures: Adventurer[]) {
    this.name = name
    this.description = description
    this.price = price
    this.chapters = chapters
    this.adventures = adventures
  }

  public join (student: Student): Adventurer {
    const number = this.adventures.length + 1

    const adventurer: Adventurer = new Adventurer(number, student, this)

    this.adventures.push(adventurer)
    student.adventures.push(adventurer)

    return adventurer
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

  public get adventures (): Adventurer[] {
    return this._adventures
  }

  public set adventures (adventures: Adventurer[]) {
    this._adventures = adventures
  }
}
