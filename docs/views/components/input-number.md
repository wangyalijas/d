# InputNumber 数字输入框

## 基础用法

<m-input-number />

## 禁止输入

<m-input-number-disable />

## 尺寸选择

<m-input-number-size />

## 按钮位置

<m-input-number-position />

## 增量控制

设置数字输入框的增量规则.

<m-input-number-rule />


## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| controls | 是否使用控制按钮        | Boolean | - | true |
| controls-position | 控制按钮位置 | String | right | - |
| disabled | 是否禁用计数器        | Boolean | - | false |
| label | 输入框关联的label文字 | String | - | - |
| min      | 设置计数器允许的最小值 | Number | - | -Infinity |
| max      | 设置计数器允许的最大值 | Number | - | Infinity |
| name | 原生属性 | String | - | - |
| precision| 数值精度             | Number   | - | - |
| placeholder | 输入框默认 placeholder | String | - | - |
| step     | 计数器步长           | Number   | - | 1 |
| size     | 计数器尺寸           | String   | large, small | - |
| value    | 绑定值         | Number | - | - |

## Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在组件 Input 失去焦点时触发 | (event: Event) |
| change | 绑定值被改变时触发 | 最后变更的值 |
| focus | 在组件 Input 获得焦点时触发 | (event: Event) |
| select | 选中 input 中的文字 | - |
