import Vue from 'vue'
import Hopsa from './Hopsa.vue'

const Components = {
    Hopsa
}
Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components