import type Adventurer from './adventurer'
import LevelSheet from './levelSheet'
import type Mission from './mission'
import MissionCarryOn from './mission-carry-on'
import ValidatorUtils from './utils/validator-utils'

class Student {
  private static readonly levelSheet: LevelSheet = new LevelSheet()
  private _account: string
  private _password: string
  private _level = 1
  private _exp = 0
  private _missionCarryOns: MissionCarryOn[]
  private _adventures: Adventurer[]

  constructor (account: string, password: string, missionCarryOns: MissionCarryOn[], adventures: Adventurer[]) {
    this._account = account
    this._password = password
    this.missionCarryOns = missionCarryOns
    this.adventures = adventures
  }

  public gainExp (exp: number): void {
    this._exp += exp
    const newLevel = Student.levelSheet.query(this._exp)
    const levelUp = newLevel - this._level
    console.log(`獎勵學員獲得經驗值${this._exp}`)
    for (let index = 0; index < levelUp; index++) {
      this.levelUp()
    }
  }

  public carryOn (mission: Mission): MissionCarryOn {
    console.log('任務 學員開始新任務')
    const missionCarryOn = new MissionCarryOn(this, mission)
    this._missionCarryOns.push(missionCarryOn) // 單向關聯
    return missionCarryOn
  }

  private levelUp (): void {
    this._level++
    console.log('level up')
  }

  public get account (): string | undefined {
    return this._account
  }

  public get level (): number {
    return this._level
  }

  public get exp (): number {
    return this._exp
  }

  public get missionCarryOns (): MissionCarryOn[] {
    return this._missionCarryOns
  }

  public set missionCarryOns (missionCarryOns: MissionCarryOn[]) {
    this._missionCarryOns = ValidatorUtils.requireNonNull(missionCarryOns)
  }

  public get adventures (): Adventurer[] {
    return this._adventures
  }

  public set adventures (adventures: Adventurer[]) {
    this._adventures = ValidatorUtils.requireNonNull(adventures)
  }
}

export default Student
