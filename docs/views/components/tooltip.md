# Tooltip 文字提示

## 基础用法
在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
 <m-tooltip />

## 主体
Tooltip 组件提供了两个不同的主题：dark和light。
 <m-tooltip-effect />

## 更多 Content
展示多行文本或者是设置文本内容的格式。
 <m-tooltip-more />

## 高级扩展
除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

transition 属性可以定制显隐的动画效果，默认为fade-in-linear。 如果需要关闭 tooltip 功能，disabled 属性可以满足这个需求，它接受一个Boolean，设置为true即可。

事实上，这是基于 Vue-popper 的扩展，你可以自定义任意 Vue-popper 中允许定义的字段。 当然 Tooltip 组件实际上十分强大，文末的API文档会做一一说明。

 <m-tooltip-high />

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|effect	|默认提供的主题	|String	|dark/light	|dark|
|content	|显示的内容，也可以通过 slot#content 传入 DOM|	String|	—|	—|
|placement	|Tooltip 的出现位置	|String	|top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end|	bottom|
|value(v-model)|状态是否可见|	Boolean|	—	|false|
|disabled	|Tooltip| 是否可用|	Boolean|	—	|false|
|offset	|出现位置的偏移量	|Number|	—	|0|
|transition	|定义渐变动画	|String|	—	|el-fade-in-linear|
|visible-arrow|是否显示 Tooltip 箭头，更多参数可见Vue-popper|	Boolean|	—	|true|
|popper-options	|popper.js 的参数	|Object	|参考 popper.js 文档	|{ boundariesElement: 'body', gpuAcceleration: false }|
|open-delay|	延迟出现，单位毫秒	|Number|	—|	0|
|manual	|手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效	|Boolean|	—	|false|
|popper-class	|为 Tooltip 的 popper 添加类名|	String|	—	|—|
|enterable	|鼠标是否可进入到 tooltip 中	|Boolean|	—	|true|
|hide-after|	Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏	|number|	—	|0|
