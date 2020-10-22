<template>
 <div>
   <label>{{ label }}</label>
   <div>
     <slot></slot>
     <p v-if="errorMsg">{{ errorMsg }}</p>
   </div>
 </div>
</template>

<script>
import AsyncValidator from 'async-validator'

export default {
  name: 'AmFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      errorMsg: ''
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      if (!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = { [this.prop]: rules }
      const validator = new AsyncValidator(descriptor)
      return validator.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMsg = errors[0].message
        } else {
          this.errorMsg = ''
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
