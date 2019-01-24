<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <div class="box">
        <div class="top">
          <w-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
            <w-button>上左</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <w-button>上边</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
            <w-button>上右</w-button>
          </w-tooltip>
        </div>
        <div class="left">
          <w-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
            <w-button>左上</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
            <w-button>左边</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
            <w-button>左下</w-button>
          </w-tooltip>
        </div>

        <div class="right">
          <w-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
            <w-button>右上</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <w-button>右边</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
            <w-button>右下</w-button>
          </w-tooltip>
        </div>
        <div class="bottom">
          <w-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
            <w-button>下左</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <w-button>下边</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
            <w-button>下右</w-button>
          </w-tooltip>
        </div>
      </div>
    </coding-box>
  </section>
</template>

<script>
  import WTooltip from '../../../packages/components/tooltip/src/main'
  export default {
    components: {WTooltip},
    data () {
      return {
        code: `<div class="box">
        <div class="top">
          <w-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
            <w-button>上左</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
            <w-button>上边</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
            <w-button>上右</w-button>
          </w-tooltip>
        </div>
        <div class="left">
          <w-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
            <w-button>左上</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
            <w-button>左边</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
            <w-button>左下</w-button>
          </w-tooltip>
        </div>

        <div class="right">
          <w-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
            <w-button>右上</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <w-button>右边</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
            <w-button>右下</w-button>
          </w-tooltip>
        </div>
        <div class="bottom">
          <w-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
            <w-button>下左</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
            <w-button>下边</w-button>
          </w-tooltip>
          <w-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
            <w-button>下右</w-button>
          </w-tooltip>
        </div>
      </div>`,
      }
    }
  }
</script>
<style lang="scss" scoped>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>
