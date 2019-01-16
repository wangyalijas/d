<template>
  <section class="coding-box">
    <h2 v-text="title" class="coding-title"></h2>
    <section class="code-wrapper">
      <section class="slot-wrapper">
        <slot></slot>
      </section>
      <section class="collapse-wrapper">
        <div :class="['code-container', showCode ? 'code-container__show' : '']">
          <pre><code v-text="code" ref="code"></code></pre>
        </div>
        <h3 v-text="`${showCode ? '隐藏' : '查看'}代码`" class="toggle-collapse__button" @click="toggleCodingBox"></h3>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'CodingBox',
  data () {
    return {
      showCode: false
    }
  },
  props: {
    code: String,
    title: String
  },
  methods: {
    toggleCodingBox () {
      this.showCode = !this.showCode
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$highLight.highlightBlock(this.$refs.code)
    })
  }
}
</script>

<style lang="scss">
@import "../stylesheet/index";
.coding-box {
  position: relative;
  z-index: 9999;
  .code-wrapper {
    border-radius: 5px;
    border: 1px solid #eee;
    transition: all .25s ease-in-out;
    &:hover {
      border-color: $hover-border;
      box-shadow: 0 0 10px $hover-shadow;
    }
    .slot-wrapper {
      padding: 20px;
    }
    .collapse-wrapper {
      @import "../stylesheet/highlight-style";
      .code-container {
        max-height: 0;
        padding: 0 10px 0 20px;
        background-color: #fafafa;
        transition: all 0.2s ease-in-out;
        border-top: 1px solid transparent;
        overflow: hidden;
      }
      .code-container__show {
        max-height: $code-wrapper-maxheight;
        padding: 20px 10px 20px 20px;
        border-top: 1px solid #eee;
      }
      .toggle-collapse__button {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin: 0;
        color: #666;
        text-align: center;
        font-size: 14px;
        font-weight: normal;
        border-top: 1px solid #eee;
        transition: all .25s ease-in-out;
        cursor: pointer;
        &:hover {
          color: $primary-color;
        }
      }
    }
  }
}
</style>
