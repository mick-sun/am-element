import AmInput from '../'

export default {
  title: 'AM Input',
  component: AmInput
}

export const Text = () => (
  {
    components: { AmInput },
    template: '<am-input v-model="value"></am-input>',
    data () {
      return {
        value: 'admin'
      }
    }
  }
)

export const Password = () => (
  {
    components: { AmInput },
    template: '<am-input type="password" v-model="value"></am-input>',
    data () {
      return {
        value: 'admin'
      }
    }
  }
)
