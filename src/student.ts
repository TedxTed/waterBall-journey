import LevelSheet from './levelSheet'

class Student {
  private static readonly levelSheet: LevelSheet = new LevelSheet()
  private _account: string
  private _password: string
  private _level = 1
  private _exp = 0

  constructor (account: string, password: string) {
    this._account = account
    this._password = password
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
}

export default Student
