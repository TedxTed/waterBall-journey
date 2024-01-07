import Scene from './scene'

export default class ContentScence extends Scene {
  calculateExpAward (): number {
    return this.expAward * 1.1
  }
}
