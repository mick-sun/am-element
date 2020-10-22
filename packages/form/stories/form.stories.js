import AmForm from '../'
import AmFormItem from '../../form-item'
import AmButton from '../../button'
import AmInput from '../../input'

export default {
  title: 'Form',
  component: AmForm
}

export const Login = () => (
  {
    components: {
      AmForm,
      AmInput,
      AmButton,
      AmFormItem
    },
    template: `
      <am-form class="form" ref="form" :model="user" :rules="rules">
       <am-form-item label="用户名" prop="username">
         <am-input v-model="user.username" placeholder="请输入用户名"/>
       </am-form-item>
       <am-form-item label="密码" prop="password">
         <am-input v-model="user.password" type="text"/>
       </am-form-item>
       <am-form-item>
         <am-button type="primary" @click="login()">登陆</am-button>
       </am-form-item>
     </am-form>`,
    data () {
      return {
        user: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {
              required: true,
              message: '请输入用户名'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码'
            },
            {
              min: 6,
              max: 12,
              message: '请输入6-12位密码'
            }
          ]
        }
      }
    },
    methods: {
      login () {
        this.$refs.form.validate(valid => {
          if (valid) {
            alert('验证成功')
          } else {
            alert('验证失败')
            return false
          }
        })
      }
    }
  }
)
