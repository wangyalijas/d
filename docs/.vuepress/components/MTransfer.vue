<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-transfer v-model="value1" :data="data"></w-transfer>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data
      }
      return {
        code: ` <w-transfer v-model="value1" :data="data"></w-transfer>`,
        data: generateData(),
        value1: [1, 4]
      };
    }
  }
</script>
<style lang="scss">
  .tag-demo {
    .w-tag+.w-tag {
      margin-left: 5px;
    }
  }
</style>
