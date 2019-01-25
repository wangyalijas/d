<template>
  <section class="coding-box">
    <p v-if="content" v-text="content" class="coding-content"></p>
    <section class="code-wrapper">
      <section class="slot-wrapper">
        <slot></slot>
      </section>
      <section class="collapse-wrapper">
        <div :class="['code-container', showCode ? 'code-container--show' : '']">
          <p v-if="description" v-text="description" class="code-description"></p>
          <pre><code v-text="code" ref="code"></code></pre>
        </div>
        <h3 v-text="`${showCode ? '隐藏' : '查看'}代码`"
            class="toggle-collapse--button" @click="toggleCodingBox"></h3>
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
    content: String,
    description: String
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
  .coding-content {
    margin-top: 25px;
    font-size: 14px;
    color: #666;
  }
  .code-wrapper {
    margin-top: 25px;
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
      .code-description {
        position: relative;
        margin: 0;
        padding: 20px 15px;
        font-size: 14px;
        color: #888;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #eee;
        &:after {
          position: absolute;
          top: 5px;
          right: 5px;
          font-size: 12px;
          color: #ccc;
          content: 'Description'
        }
      }
      .code-container {
        max-height: 0;
        padding: 0 10px 0 20px;
        background-color: #fafafa;
        transition: all 0.2s ease-in-out;
        border-top: 1px solid transparent;
        overflow: hidden;
      }
      .code-container--show {
        max-height: calc(#{$code-wrapper-maxheight} + 100px);
        padding: 20px 10px 20px 20px;
        border-top: 1px solid #eee;
      }
      .toggle-collapse--button {
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
