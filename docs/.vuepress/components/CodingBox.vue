<template>
  <section class="coding-box">
    <h2 v-text="title" class="coding-title"></h2>
    <div class="code-wrapper">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CodingBox',
  data () {
    return {
    }
  },
  props: {
    code: String,
    title: String
  }
}
</script>

<style lang="scss">
.coding-box {
  height: 100px;
  .code-wrapper {
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #eee;
  }
}
</style>
