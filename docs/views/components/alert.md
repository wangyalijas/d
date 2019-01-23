# Alert 警告 (✓)

## 基础用法

<m-alert />

## 图标提示

<m-alert-icon />

## 添加描述内容

<m-alert-content />

## 自定义关闭按钮

<m-alert-close />

## Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| closable | 是否可关闭 | Boolean | - | true |
| close-text | 文本关闭按钮 | String | - | - |
| show-icon | 是否显示图标 | Boolean | - | false |
| title | 标题 | String | - | - |
| type | 提示类型 | String | success / warning / info / error | info |

## Events

| 参数      | 说明          | 回调参数 |
|---------- |-------------- |---------- |
| close | 关闭alert时触发的事件 | - |