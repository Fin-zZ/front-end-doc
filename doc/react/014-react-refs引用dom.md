[[TOC]]

[TOC]

# refs引用dom或类子组件实例方法

Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

在react典型的数据流中，要修改一个子组件，你需要使用新的 props 来重新渲染它。但是，在某些情况下，你需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。refs就是解决方法

适合使用`refs`的情况：

-   管理焦点，文本选择或媒体播放。
-   触发强制动画。
-   集成第三方 DOM 库。

避免使用 refs 来做任何可以通过声明式实现来完成的事情。

>   ***注意：***
>
>   React 16.3 版本以上使用`React.createRef()` API来创建`refs`
>
>   React 16.3 版本以前使用`回调形式refs`

## 1. 创建、访问 Refs

Refs 是使用 `React.createRef()` 创建的，并通过 `ref` 属性附加到 React 元素。在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

当 ref 被传递给 `render` 中的元素时，对该节点的引用可以在 ref 的 `current` 属性中被访问。

```js
const node = this.myRef.current;
```

ref 的值根据节点的类型而有所不同：

-   当 `ref` 属性用于 HTML 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` 接收底层 DOM 元素作为其 `current` 属性。
-   当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的挂载实例作为其 `current` 属性。
-   **你不能在函数组件上使用 `ref` 属性**，因为他们没有实例。

React 会在组件挂载时给 `current` 属性传入 DOM 元素，并在组件卸载时传入 `null` 值。`ref` 会在 `componentDidMount` 或 `componentDidUpdate` 生命周期钩子触发前更新。

 

## 2. 实际使用例子

以下代码使用 `ref` 去存储 DOM 节点的引用：

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点, 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="button" value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

为class组件添加refs：

如果我们想包装上面的 `CustomTextInput`，来模拟它挂载之后立即被点击的操作，我们可以使用 ref 来获取这个自定义的 input 组件并手动调用它的 `focusTextInput` 方法：

```jsx
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
```

请注意，这仅在 `CustomTextInput` 声明为 class 时才有效









## 参考资料



[react 官网介绍Refs](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html)