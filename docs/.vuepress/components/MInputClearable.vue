<template>
  <section class="input-demo">
    <coding-box :code="code" description="为组件添加clearable属性, 当输入内容时会输入框右边会出现一个删除图标, 用于清空input框中的内容.">
      <w-input v-model="value" placeholder="请输入..." clearable></w-input>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          value: '',
          code: `<template>
  <w-input v-model="value" placeholder="请输入..." clearable></w-input>
</template>
<script>
  export default {
    data () {
      return {
          value: ''
      }
    }
  }
<\/script>
`
        }
    }
}
</script>