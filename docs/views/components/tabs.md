# Tabs 标签页

## 基础用法
基础的、简洁的标签页。
<m-tabs />

## 选项卡

选项卡样式的标签页。
<m-tabs-card />

## 卡片化
卡片化的标签页。
<m-tabs-border />

## 位置
可以通过 tab-position 设置标签的位置。

<m-tabs-position />

## 自定义标签页
可以通过具名 slot 来实现自定义标签页的内容。

<m-tabs-slot />

## 动态增减标签页
增减标签页按钮只能在选项卡样式的标签页下使用。

<m-tabs-add />

## 自定义增加标签页触发器

<m-tabs-diy-add />


## Tabs Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 风格类型 | string | card/border-card	 | — |
| closable | 标签是否可关闭 | boolean | — | false |
| addable | 标签是否可增加 | boolean | — | false |
| editable | 标签是否同时可增加和关闭 |boolean | — |	false |
| value	| 绑定值，选中选项卡的 name |	string | —	| 第一个选项卡的 name |
| tab-position | 选项卡所在位置 |	string | top/right/bottom/left | top |
|stretch|	标签的宽度是否自撑开|	boolean|	-	|false|
|before-leave	|切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。|	Function(activeName, oldActiveName)|	—|	—|

## Tabs Events
|事件名称|	说明|	回调参数|
|---------- |-------------- |---------- |
|tab-click	| tab被选中时触发 |	被选中的标签 tab 实例|
|tab-remove|点击 tab 移除按钮后触发	| 被删除的标签的 name|
|tab-add	|点击 tabs 的新增按钮后触发|	—|
|edit	|点击 tabs 的新增按钮或 tab 被关闭后触发|	(targetName, action)|

## Tab-pane Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|label |	选项卡标题 |	string |	—	 | — |
|disabled |	是否禁用 |	boolean	| —	| false |
|name |	与选项卡 activeName 对应的标识符，表示选项卡别名 |	string |	— |	该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
|closable |	标签是否可关闭 |	boolean	| — | false |
|lazy |	标签是否延迟渲染 |	boolean |	— |	false |
