import type Mission from './mission'
import type Student from './student'

enum State {
  ONGOING,
  COMPLETED,
}

export default class MissionCarryOn {
  private _state: State = State.ONGOING
  private _student: Student
  private _mission: Mission

  constructor (student: Student, mission: Mission) {
    this.student = student
    this.mission = mission
  }

  public complete (): void {
    this.state = State.COMPLETED
    this.student.gainExp(this.mission.calculateExpAward())
  }

  public get student (): Student {
    return this._student
  }

  public set student (student: Student) {
    this._student = student
  }

  public get mission (): Mission {
    return this._mission
  }

  public set mission (mission: Mission) {
    this._mission = mission
  }

  public get state (): State {
    return this._state
  }

  public set state (state: State) {
    this._state = state
  }
}
