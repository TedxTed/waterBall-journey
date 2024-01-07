import type Journey from './journey'
import type Student from './student'
import ValidatorUtils from './utils/validator-utils'

export default class Adventurer {
  private _number: number
  private _student: Student
  private _journey: Journey

  constructor (number: number, student: Student, journey: Journey) {
    this.number = number
    this.student = student
    this.journey = journey
  }

  public get number (): number {
    return this._number
  }

  public set number (number: number) {
    this._number = ValidatorUtils.checkNumberShouldBePositive(number)
  }

  public get student (): Student {
    return this._student
  }

  public set student (student: Student) {
    this._student = ValidatorUtils.requireNonNull(student)
  }

  public get journey (): Journey {
    return this._journey
  }

  public set journey (journey: Journey) {
    this._journey = ValidatorUtils.requireNonNull(journey)
  }
}
