# Message 全局提示 (✓)

## 基础用法
从顶部出现，3 秒后自动消失。
<m-message />

## 不同状态
用来显示「成功、警告、消息、错误」类的操作反馈。
<m-message-status />

## 可关闭
可以添加关闭按钮。
<m-message-close />

## 文字居中
使用 center 属性让文字水平居中。
<m-message-center />

## 使用 HTML 片段
message 属性支持传入 HTML 片段
<m-message-html />

>message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。

## 全局方法
Element 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。

## 单独引用
单独引入 Message：

`import { Message } from 'element-ui';`

## Options

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|message|	消息文字|	string / VNode	|—|	—|
|type	|主题|	string|	success/warning/info/error	|info|
|iconClass|	自定义图标的类名，会覆盖 type|	string|	—|—|
|dangerouslyUseHTMLString	|是否将 message 属性作为 HTML 片段处理	|boolean|	—	|false|
|customClass|	自定义类名	|string	|—|	—|
|duration	|显示时间, 毫秒。设为 0 则不会自动关闭|	number	|—|	3000|
|showClose|	是否显示关闭按钮	|boolean	|—	|false|
|center|	文字是否居中	boolean	|—	|false|
|onClose	|关闭时的回调函数, 参数为被关闭的 message 实例	function	|—|	—|


## 方法
调用 Message 或 this.$message 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 close 方法。
| 参数      | 说明          |
|---------- |-------------- |
| close      | 关闭当前的 Message |
