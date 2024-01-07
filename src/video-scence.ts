import Scene from './scene'

export default class VideoScence extends Scene {
  calculateExpAward (): number {
    return this.expAward * 1.2
  }
}
