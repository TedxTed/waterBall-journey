import Scene from './scence'

export default class ContentScence extends Scene {
  calculateExpAward (): number {
    return this.expAward * 1.1
  }
}
