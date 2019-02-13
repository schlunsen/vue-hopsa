import Hopsa from './Hopsa.vue'
import BaseAnimation from '../animations/BaseAnimation.js'
import CircleAnimation from '../animations/Circle.js'
import BoxAnimation from '../animations/Box.js'

export function install(Vue, settings) {
    Vue.component(
        Hopsa.name,
        Hopsa
    )
}

export {
    Hopsa,
    BaseAnimation,
    CircleAnimation,
    BoxAnimation
}

export default install