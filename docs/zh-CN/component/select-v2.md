---
title: Virtualized Select 虚拟化选择器
lang: zh-CN
---

# Select V2 virtualized selector ^(beta)

:::tip

这个组件目前在测试当中，如果在使用中发现任何漏洞和问题，请在 [GitHub](https://github.com/element-plus/element-plus/issues) 中提交 issue 以便我们进行处理。

:::

:::tip

在 SSR 场景下，您需要将组件包裹在 `<client-only></client-only>` 之中 (如: [Nuxt](https://nuxt.com/v3)) 和 SSG (例如: [VitePress](https://vitepress.vuejs.org/)).

:::

## 背景

在某些使用情况下，单个选择器可能最终加载数万行数据。 将这么多的数据渲染至 DOM 中可能会给浏览器带来负担，从而造成性能问题。 为了更好的用户和开发者体验，我们决定添加此组件。

## 基础用法

适用广泛的基础选择器

:::demo

select-v2/basic-usage

:::

## 多选

最基础的多选选择器

:::demo

select-v2/multiple

:::

## 隐藏多余标签的多选

默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapse-tags`属性将它们合并为一段文字。 您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。

:::demo

select-v2/hide-extra-tags

:::

## 可过滤的多选

当选项太多时，你可以使用 `filterable` 选项来启用过滤功能来找到所需的选项。

:::demo

select-v2/filterable

:::

## 禁用选择器本身或选项

您可以选择禁用 Select 或者 Select 中的某个选项。

:::demo

select-v2/disabled

:::

## 给选项进行分组

只要数据格式满足特定要求，我们就可以按照自己的意愿为选项进行分组。

:::demo

select-v2/grouping

:::

## 自定义选项的渲染模板

我们也可以通过自定义模板来渲染自己想要的选项内容。

:::demo

select-v2/customized-option

:::

## 一键清除

我们可以同时清除所有选定的选项。此设定也适用于单选。

:::demo

select-v2/clearable

:::

## 创建临时选项

创建并选中未包含在初始选项中的条目。

通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create` 正常工作， `filterable` 的值必须为 `true`。

:::tip

最好在使用 `allow-create` 属性的同时设置 `:reserve-keyword="false"`。

:::

:::demo

select-v2/allow-create

:::

## 远程搜索

输入关键字以从远程服务器中查找数据。

:::demo 从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。

select-v2/remote-search

:::

## Use value-key attribute

when `options.value` is an object, you should set a unique identity key name for value

::: tip

Before ^(2.4.0), `value-key` was used both as the unique value of the selected object and as an alias for the value in `options`. Now `value-key` is only used as the unique value of the selected object, and the alias for the value in options is `props.value`.

:::

:::demo

select-v2/use-valueKey

:::

## Aliases for custom options ^(2.4.2)

When your `options` format is different from the default format, you can customize the alias of the `options` through the `props` attribute

:::demo

select-v2/props

:::

## SelectV2 Attributes

| 属性名                                 | 说明                                                                                                                                       | 类型                                 | 可选值                                                                                                       | 默认值           |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------- |
| model-value / v-model               | 绑定值                                                                                                                                      | string / number / boolean / object | —                                                                                                         | —             |
| options                             | data of the options, the key of `value` and `label` can be customize by `props`                                                          | Array                              | —                                                                                                         | —             |
| props ^(2.4.2)                      | configuration options, see the following table                                                                                           | object                             | —                                                                                                         | —             |
| multiple                            | is multiple                                                                                                                              | boolean                            | —                                                                                                         | false         |
| disabled                            | is disabled                                                                                                                              | boolean                            | —                                                                                                         | false         |
| value-key                           | unique identity key name for value, required when value is an object                                                                     | string                             | —                                                                                                         | value         |
| size                                | input box size                                                                                                                           | string                             | large/default/small                                                                                       | default       |
| clearable                           | whether select can be cleared                                                                                                            | boolean                            | —                                                                                                         | false         |
| clear-icon                          | custom clear icon                                                                                                                        | `string \| Component`             | —                                                                                                         | CircleClose   |
| collapse-tags                       | whether to collapse tags to a text when multiple selecting                                                                               | boolean                            | —                                                                                                         | false         |
| multiple-limit                      | maximum number of options user can select when multiple is true. No limit when set to 0                                                  | number                             | —                                                                                                         | 0             |
| name                                | the name attribute of select input                                                                                                       | string                             | —                                                                                                         | —             |
| effect                              | Tooltip theme, built-in theme: `dark` / `light`                                                                                          | string                             | string                                                                                                    | light         |
| autocomplete                        | autocomplete of select input                                                                                                             | string                             | —                                                                                                         | off           |
| placeholder                         | placeholder                                                                                                                              | string                             | —                                                                                                         | Please select |
| filterable                          | is filterable                                                                                                                            | boolean                            | —                                                                                                         | false         |
| allow-create                        | whether creating new items is allowed. To use this, `filterable` must be true                                                            | boolean                            | —                                                                                                         | false         |
| reserve-keyword                     | whether reserve the keyword after select filtered option.                                                                                | boolean                            | —                                                                                                         | true          |
| no-data-text                        | displayed text when there is no options, you can also use slot empty                                                                     | string                             | —                                                                                                         | No Data       |
| popper-class                        | custom class name for Select's dropdown                                                                                                  | string                             | —                                                                                                         | —             |
| popper-append-to-body ^(deprecated) | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false              | boolean                            | -                                                                                                         | false         |
| teleported                          | whether select dropdown is teleported to the body                                                                                        | boolean                            | true / false                                                                                              | true          |
| persistent                          | when select dropdown is inactive and `persistent` is `false`, select dropdown will be destroyed                                          | boolean                            | true / false                                                                                              | true          |
| popper-options                      | Customized popper option see more at [popper.js](https://popper.js.org/docs/v2/)                                                         | object                             | -                                                                                                         | -             |
| automatic-dropdown                  | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                                        | boolean                            | -                                                                                                         | false         |
| height                              | The height of the dropdown panel, 34px for each item                                                                                     | number                             | -                                                                                                         | 170           |
| item-height                         | The height of the dropdown item                                                                                                          | number                             | -                                                                                                         | 34            |
| scrollbar-always-on                 | Controls whether the scrollbar is always displayed                                                                                       | boolean                            | -                                                                                                         | false         |
| remote                              | whether search data from server                                                                                                          | boolean                            | —                                                                                                         | false         |
| remote-method                       | function that gets called when the input value changes. Its parameter is the current input value. To use this, `filterable` must be true | function(keyword: string)          | —                                                                                                         | —             |
| validate-event                      | whether to trigger form validation                                                                                                       | boolean                            | -                                                                                                         | true          |
| placement                           | position of dropdown                                                                                                                     | string                             | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start  |
| collapse-tags-tooltip ^(2.3.0)      | whether show all selected tags when mouse hover text of collapse-tags. To use this, `collapse-tags` must be true                         | boolean                            | true / false                                                                                              | false         |
| max-collapse-tags ^(2.3.0)          | The max tags number to be shown. To use this, `collapse-tags` must be true                                                               | number                             | —                                                                                                         | 1             |

<span style="display: none;">
<!-- | default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |
| filter-method | 自定义搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 | -->
</span>

## props

| Attribute | 说明                                                              | Type   | Default  |
| --------- | --------------------------------------------------------------- | ------ | -------- |
| value     | specify which key of node object is used as the node's value    | string | value    |
| label     | specify which key of node object is used as the node's label    | string | label    |
| options   | specify which key of node object is used as the node's children | string | options  |
| disabled  | specify which key of node object is used as the node's disabled | string | disabled |

## SelectV2 Events

| 插槽名            | 说明                                                            | Params                                    |
| -------------- | ------------------------------------------------------------- | ----------------------------------------- |
| change         | triggers when the selected value changes                      | current selected value                    |
| visible-change | triggers when the dropdown appears/disappears                 | true when it appears, and false otherwise |
| remove-tag     | triggers when a tag is removed in multiple mode               | removed tag value                         |
| clear          | triggers when the clear icon is clicked in a clearable Select | —                                         |
| blur           | triggers when Input blurs                                     | (event: FocusEvent)                       |
| focus          | triggers when Input focuses                                   | (event: FocusEvent)                       |

## SelectV2 Slots

| Name    | Description                   |
| ------- | ----------------------------- |
| default | Option renderer               |
| empty   | content when options is empty |
| prefix  | prefix content of input       |
