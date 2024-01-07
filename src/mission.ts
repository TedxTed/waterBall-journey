import type Challenge from './challenge'
import type Scene from './scene'
import { NumberUtils } from './utils/number-utils'
import { StringUtils } from './utils/string-utils'
import ValidatorUtils from './utils/validator-utils'

export default class Mission {
  private _name: string
  private _number: number
  private _challenge: Challenge
  private _scenes: Scene[]

  constructor (name: string, num: number, challenge: Challenge, scenes: Scene[]) {
    this.name = name
    this.number = num
    this.challenge = challenge
    this.scenes = scenes
  }

  public calculateExpAward (): number {
    const sum = this._scenes.reduce((accumulator, scene) => {
      return accumulator + scene.calculateExpAward()
    }, 0)

    return sum
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

  public get challenge (): Challenge {
    return this._challenge
  }

  public set challenge (value: Challenge) {
    this._challenge = ValidatorUtils.requireNonNull(value)
  }

  public get scenes (): Scene[] {
    return this._scenes
  }

  public set scenes (value: Scene[]) {
    this._scenes = ValidatorUtils.requireNonNull(value)
  }
}
