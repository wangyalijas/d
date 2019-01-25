<template>
  <section class="cascader-demo">
    <coding-box :code="code">
      <w-cascader
        :options="options2"
        @active-item-change="handleItemChange"
        :props="props"
      ></w-cascader>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-cascader
  :options="options2"
  @active-item-change="handleItemChange"
  :props="props"
></w-cascader>`,
          options2: [{
            label: '江苏',
            cities: []
          }, {
            label: '浙江',
            cities: []
          }],
          props: {
            value: 'label',
            children: 'cities'
          }
        }
    },
    methods: {
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }];
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }];
          }
        }, 300);
      }
  }
}
</script>
<style lang="scss">
.cascader-demo {
    .block {
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;
      display: inline-block;
      width: 50%;
      box-sizing: border-box;
      float: left;
      &:last-child {
        border: none;
      }
    }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>
