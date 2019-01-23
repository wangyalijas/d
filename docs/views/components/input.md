# Input 输入 (✓)

## 基础用法

<m-input />

## 清空内容

<m-input-clearable />

## 禁用输入框

<m-input-disable />

## 尺寸选择

<m-input-size />

## 添加图标

可以通过prefix-icon和suffix-icon为input输入框首尾添加图标.

<m-input-icon />

## 输入建议(待完善)

<m-input-query />

## 远程搜索(待完善)

<m-input-remote />

## 文本域textarea

<m-input-textarea />

## Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| autofocus | 自动获取焦点 | Boolean | - | false |
| clearable | 是否可以被清空 | Boolean | - | false |
| disabled | 禁用输入框 | Boolean | - | false |
| maxlength | 最大输入长度 | Number | - | - |
| minlength | 最小输入长度 | Number | - | - |
| prefix-icon | 输入框首部图标 | String | - | - |
| placeholder | 占位文本 | String | - | - |
| rows | 输入框行数, 当type="textarea"时生效 | Number | - | - |
| readonly | 是否只读 |Boolean | - | - |
| resize | 是否可缩放 |String | none, both, horizontal, vertical | - |
| size | 大小 | String | medium / small / mini | normal |
| suffix-icon | 输入框尾部图标 | String | - | - |
| type | 类型 | String | text / textarea | text |
| tabindex | 输入框的tabindex | String | - | - |
| value | 绑定值 | String / Number | - | - |
| validate-event | 输入时是否触发表单的校验 | Boolean | - | true |

## Events

| 参数      | 说明          | 回调参数 |
|---------- |-------------- |---------- |
| blur | input 失去焦点 | - |
| focus | input 获取焦点 | - |
| select | 选中 input 中的文字 | - |