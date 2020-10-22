import AmLink from './src/link.vue'

AmLink.install = Vue => {
  Vue.component(AmLink.name, AmLink)
}

export default AmLink
