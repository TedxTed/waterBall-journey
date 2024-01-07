import type Challenge from './challenge'
import type Scene from './scene'
import { NumberUtils } from './utils/number-utils'
import { StringUtils } from './utils/string-utils'
import ValidatorUtils from './utils/validator-utils'

class Mission {
  private name: string
  private number: number
  private challenge: Challenge
  private scenes: Scene[]

  constructor (name: string, num: number, challenge: Challenge, scenes: Scene[]) {
    this.setName(name)
    this.setNumber(num)
    this.setChallenge(challenge)
    this.setScenes(scenes)
  }

  public cacluateExpAward (): number {
    const sum = this.scenes.reduce((accumulator, scene) => {
      return accumulator + scene.calculateExpAward()
    }, 0)

    return sum
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

  public setNumber (num: number): void {
    this.number = NumberUtils.checkNumberShouldBePositive(num)
  }

  public setChallenge (challenge: Challenge): void {
    this.challenge = ValidatorUtils.requireNonNull(challenge)
  }

  public setScenes (scenes: Scene[]): void {
    this.scenes = ValidatorUtils.requireNonNull(scenes)
  }
}
