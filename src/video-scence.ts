import Scene from './scence'

export default class VideoScence extends Scene {
  calculateExpAward (): number {
    return this.expAward * 1.2
  }
}
