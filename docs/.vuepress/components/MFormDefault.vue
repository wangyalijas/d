<template>
  <section class="alert-demo">
    <coding-box :code="code">
      <w-form ref="form" :model="form" label-width="80px">
        <w-form-item label="活动名称">
          <w-input v-model="form.name"></w-input>
        </w-form-item>
        <w-form-item label="活动区域">
          <w-select v-model="form.region" placeholder="请选择活动区域">
            <w-option label="区域一" value="shanghai"></w-option>
            <w-option label="区域二" value="beijing"></w-option>
          </w-select>
        </w-form-item>
        <w-form-item label="活动时间">
          <div class="span-11">
            <w-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></w-date-picker>
          </div>
          <div class="line span-2">-</div>
          <div class="span-11">
            <w-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></w-time-picker>
          </div>
        </w-form-item>
        <w-form-item label="即时配送">
          <w-switch v-model="form.delivery"></w-switch>
        </w-form-item>
        <w-form-item label="活动性质">
          <w-checkbox-group v-model="form.type">
            <w-checkbox label="美食/餐厅线上活动" name="type"></w-checkbox>
            <w-checkbox label="地推活动" name="type"></w-checkbox>
            <w-checkbox label="线下主题活动" name="type"></w-checkbox>
            <w-checkbox label="单纯品牌曝光" name="type"></w-checkbox>
          </w-checkbox-group>
        </w-form-item>
        <w-form-item label="特殊资源">
          <w-radio-group v-model="form.resource">
            <w-radio label="线上品牌商赞助"></w-radio>
            <w-radio label="线下场地免费"></w-radio>
          </w-radio-group>
        </w-form-item>
        <w-form-item label="活动形式">
          <w-input type="textarea" v-model="form.desc"></w-input>
        </w-form-item>
        <w-form-item>
          <w-button type="primary" @click="onSubmit">立即创建</w-button>
          <w-button>取消</w-button>
        </w-form-item>
      </w-form>
    </coding-box>
  </section>
</template>

<script>
export default {
    data () {
        return {
          code: `<w-alert title="成功的提示内容" type="success"></w-alert>
<w-alert title="警告的提示内容" type="warning"></w-alert>
<w-alert title="错误的提示内容" type="error"></w-alert>
<w-alert title="普通的提示内容" type="info"></w-alert>`,
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          }
        }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
<style lang="scss">
.alert-demo {
    .w-alert+.w-alert {
        margin-top: 15px;
    }
}
</style>
