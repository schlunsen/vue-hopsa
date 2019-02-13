import Hopsa from './Hopsa.vue'
import CircleAnimation from '../animations/Circle.js'
import BoxAnimation from '../animations/Box.js'

export function install (Vue, settings) {
    Vue.component(
      Hopsa.name,
      Hopsa
    )
  }

export {
    Hopsa,
    CircleAnimation,
    BoxAnimation
}

export default install