import LevelSheet from './levelSheet'

class Student {
  private static readonly levelSheet: LevelSheet = new LevelSheet()
  private account: string
  private password: string
  private level = 1
  private exp = 0

  constructor (account: string, password: string) {
    this.account = account
    this.password = password
  }

  public gainExp (exp: number): void {
    this.exp += exp
    const newLevel = Student.levelSheet.query(this.exp)
    const levelUp = newLevel - this.level
    console.log(`獎勵學員獲得經驗值${this.exp}`)
    for (let index = 0; index < levelUp; index++) {
      this.levelUp()
    }
  }

  private levelUp (): void {
    this.level++
    console.log('level up')
  }

  public getAccount (): string | undefined {
    return this.account
  }

  public getLevel (): number {
    return this.level
  }

  public getExp (): number {
    return this.exp
  }
}

export default Student
