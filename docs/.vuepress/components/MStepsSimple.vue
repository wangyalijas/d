<template>
  <section class="tag-demo">
    <coding-box :code="code">
      <w-steps :active="1" simple>
        <w-step title="步骤 1" icon="w-icon-edit"></w-step>
        <w-step title="步骤 2" icon="w-icon-upload"></w-step>
        <w-step title="步骤 3" icon="w-icon-picture"></w-step>
      </w-steps>

      <w-steps :active="1" finish-status="success" simple style="margin-top: 20px">
        <w-step title="步骤 1" ></w-step>
        <w-step title="步骤 2" ></w-step>
        <w-step title="步骤 3" ></w-step>
      </w-steps>
    </coding-box>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        code: `<el-steps :active="1" simple>
  <el-step title="步骤 1" icon="w-icon-edit"></el-step>
  <el-step title="步骤 2" icon="w-icon-upload"></el-step>
  <el-step title="步骤 3" icon="w-icon-picture"></el-step>
</el-steps>

<el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
  <el-step title="步骤 1" ></el-step>
  <el-step title="步骤 2" ></el-step>
  <el-step title="步骤 3" ></el-step>
</el-steps>` ,
      }
    }
  }
</script>
<style lang="scss">
</style>
