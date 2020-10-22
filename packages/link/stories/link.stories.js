import AmLink from '../src/link.vue'

export default {
  title: 'Link',
  component: AmLink
}


export const Link = () => (
  {
    components: {
      AmLink
    },
    template: `
      <div>
        <am-link :disabled="true" href="https://www.baidu.com">百度</am-link>
      </div>
    `
  }
)
