import Vue from 'vue'
import Hopsa from './Hopsa.vue'

import CircleAnimation from './animations/Circle.js'
import BoxAnimation from './animations/Box.js'

const Components = {
    Hopsa,
    CircleAnimation,
    BoxAnimation
}
Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components