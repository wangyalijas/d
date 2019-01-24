# Tree 树

## 基础用法
基础的树形结构展示。
<m-tree />

## 可选择
适用于需要选择层级时使用。
<m-tree-checked />

## 懒加载自定义叶子节点
<m-tree-lazy />

## 默认展开和默认选中
可将 Tree 的某些节点设置为默认展开或默认选中
<m-tree-default />

## 禁用状态
可将 Tree 的某些节点设置为禁用状态
<m-tree-disabled />

## 树节点的选择
本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key 来获取或设置，则必须设置node-key。
<m-tree-get />

## 自定义节点内容
节点的内容支持自定义，可以在节点区添加按钮或图标等内容
<m-tree-diy />

## 节点过滤
通过关键字过滤树节点
<m-tree-filter />

## 手风琴模式
对于同一级的节点，每次只能展开一个
<m-tree-accordion />

## 可拖拽节点
通过 draggable 属性可让节点变为可拖拽。
<m-tree-draggable  />

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|data|	展示数据|	array|	—|	—|
|empty-text	|内容为空的时候展示的文本|	String|	—	|—|
|node-key|	每个树节点用来作为唯一标识的属性，整棵树应该是唯一的	|String	|—|	—|
|props|	配置选项，具体看下表	|object|	—	|—|
|render-after-expand	|是否在第一次展开某个树节点后才渲染其子节点|	boolean|	—|	true|
|load	|加载子树数据的方法，仅当 lazy 属性为true 时生效	|function(node, resolve)	|—	|—|
|render-content	|树节点的内容区的渲染 |Function|	Function(h, { node, data, store }	|—	|—|
|highlight-current|	是否高亮当前选中节点，默认值是 false。|	boolean|	—	|false|
|default-expand-all	|是否默认展开所有节点|	boolean	|—	|false|
|expand-on-click-node	|是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。|	boolean	|—	|true|
|check-on-click-node	|是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。|	boolean|	—	|false|
|auto-expand-parent|	展开子节点的时候是否自动展开父节点|	boolean	|—	|true|
|default-expanded-keys	|默认展开的节点的 key 的数组|	array|	—	|—|
|show-checkbox|节点是否可被选择	|boolean	|—	|false|
|check-strictly|在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false	|boolean|	—	|false|
|default-checked-keys|	默认勾选的节点的 key 的数组|	array|	—	|—|
|current-node-key|	当前选中的节点|	string, number|	—	|—|
|filter-node-method	|对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏|	Function(value, data, node)|	—|	—|
|accordion|是否每次只打开一个同级树节点展开|boolean	|—	|false|
|indent|相邻级节点间的水平缩进，单位为像素|	number|	—	|16|
|icon-class|自定义树节点的图标|string|	—|	—|
|lazy|是否懒加载子节点，需与 load 方法结合使用	|boolean	|—	|false|
|draggable|是否开启拖拽节点功能	|boolean|	—	|false|
|allow-drag	|判断节点能否被拖拽	|Function(node)|	—|—|
|allow-drop|拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后|Function(draggingNode, dropNode, type)|—	|—|
