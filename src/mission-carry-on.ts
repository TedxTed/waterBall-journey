import type Mission from './mission'
import type Student from './student'

enum State {
  ONGOING,
  COMPLETE,
}

export default class MissionCarryOn {
  private state: State = State.ONGOING
  private _student: Student
  private _mission: Mission

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
}
