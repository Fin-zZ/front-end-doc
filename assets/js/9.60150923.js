(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{251:function(t,e,r){t.exports=r.p+"assets/img/016-react-fiber.9af4c676.gif"},252:function(t,e,r){t.exports=r.p+"assets/img/017-react-fiber.706ceaa2.gif"},253:function(t,e,r){t.exports=r.p+"assets/img/018-react-fiber.61e6d3c9.png"},254:function(t,e,r){t.exports=r.p+"assets/img/019-react-fiber.ef639cfb.png"},255:function(t,e,r){t.exports=r.p+"assets/img/020-react-fiber.2f67f19b.png"},346:function(t,e,r){"use strict";r.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-react版本15以前的问题"}},[this._v("1. react版本15以前的问题")])]),e("li",[e("a",{attrs:{href:"#_2-react15版本卡顿解决思路"}},[this._v("2. react15版本卡顿解决思路")])]),e("li",[e("a",{attrs:{href:"#_3-react-fiber解决办法"}},[this._v("3. react fiber解决办法")])]),e("li",[e("a",{attrs:{href:"#_4-fiber对代码的影响"}},[this._v("4. Fiber对代码的影响")])]),e("li",[e("a",{attrs:{href:"#参考资料"}},[this._v("参考资料")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"react-fiber介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" react Fiber介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("注意")]),this._v("：react Fiber 是react的特性，不需要特别的引入，只要react版本在16.0以上就自动有了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-react版本15以前的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-react版本15以前的问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. react版本15以前的问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(251),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其根本原因，是大量的同步计算任务阻塞了浏览器的 UI 渲染。默认情况下，JS 运算、页面布局和页面绘制都是运行在浏览器的主线程当中，他们之间是互斥的关系。如果 JS 运算持续占用主线程，页面就没法得到及时的更新。当我们调用"),e("code",[this._v("setState")]),this._v("更新页面的时候，React 会遍历应用的所有节点，计算出差异，然后再更新 UI。整个过程是一气呵成，不能被打断的。如果页面元素很多，整个过程占用的时机就可能超过 16 毫秒，就容易出现掉帧的现象。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(252),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-react15版本卡顿解决思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-react15版本卡顿解决思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. react15版本卡顿解决思路")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("旧版 React 通过递归的方式进行渲染，使用的是 JS 引擎自身的函数调用栈，它会一直执行到栈空为止。而"),e("code",[this._v("Fiber")]),this._v("实现了自己的组件调用栈，它以链表的形式遍历组件树，可以灵活的暂停、继续和丢弃执行的任务。实现方式是使用了浏览器的"),e("code",[this._v("requestIdleCallback")]),this._v("这一 API。官方的解释是这样的：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("window.requestIdleCallback()会在浏览器空闲时期依次调用函数，这就可以让开发者在主事件循环中执行后台或低优先级的任务，而且不会对像动画和用户交互这些延迟触发但关键的事件产生影响。函数一般会按先进先调用的顺序执行，除非函数在浏览器调用它之前就到了它的超时时间。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-react-fiber解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-react-fiber解决办法","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. react fiber解决办法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Virtual DOM 层，描述页面长什么样。")]),this._v(" "),e("li",[this._v("Reconciler 层，负责调用组件生命周期方法，进行 Diff 运算等。")]),this._v(" "),e("li",[this._v("Renderer 层，根据不同的平台，渲染出相应的页面，比较常见的是 ReactDOM 和 ReactNative。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这次改动最大的当属 Reconciler 层了，React 团队也给它起了个新的名字，叫"),e("code",[this._v("Fiber Reconciler")]),this._v("。这就引入另一个关键词：Fiber。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fiber "),r("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    stateNode"),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),r("span",{attrs:{class:"token comment"}},[t._v("// 节点实例")]),t._v("\n    child"),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),r("span",{attrs:{class:"token comment"}},[t._v("// 子节点")]),t._v("\n    sibling"),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),r("span",{attrs:{class:"token comment"}},[t._v("// 兄弟节点")]),t._v("\n    "),r("span",{attrs:{class:"token keyword"}},[t._v("return")]),r("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),r("span",{attrs:{class:"token comment"}},[t._v("// 父节点")]),t._v("\n"),r("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为了加以区分，以前的 Reconciler 被命名为"),e("code",[this._v("Stack Reconciler")]),this._v("。Stack Reconciler 运作的过程是不能被打断的，必须一条道走到黑：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(253),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(254),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("synchronous，与之前的Stack Reconciler操作一样，同步执行")]),t._v(" "),r("li",[t._v("task，在next tick之前执行")]),t._v(" "),r("li",[t._v("animation，下一帧之前执行")]),t._v(" "),r("li",[t._v("high，在不久的将来立即执行")]),t._v(" "),r("li",[t._v("low，稍微延迟执行也没关系")]),t._v(" "),r("li",[t._v("offscreen，下一次render时或scroll时才执行")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(255),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("阶段一，生成 Fiber 树，得出需要更新的节点信息。这一步是一个渐进的过程，可以被打断。")]),this._v(" "),e("li",[this._v("阶段二，将需要更新的节点一次过批量更新，这个过程不能被打断。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-fiber对代码的影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-fiber对代码的影响","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. Fiber对代码的影响")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在React Fiber中，一次更新过程会分成多个分片完成，所以完全有可能一个更新任务还没有完成，就被另一个更高优先级的更新过程打断，这时候，优先级高的更新任务会优先处理完，而低优先级更新任务所做的工作则会"),e("strong",[this._v("完全作废，然后等待机会重头再来")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("componentWillMount")]),this._v(" "),e("li",[this._v("componentWillReceiveProps")]),this._v(" "),e("li",[this._v("shouldComponentUpdate")]),this._v(" "),e("li",[this._v("componentWillUpdate")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("componentDidMount")]),this._v(" "),e("li",[this._v("componentDidUpdate")]),this._v(" "),e("li",[this._v("componentWillUnmount")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在现有的React中，每个生命周期函数在一个加载或者更新过程中绝对只会被调用一次；"),e("strong",[this._v("在React Fiber中，不再是这样了，第一阶段中的生命周期函数在一次加载和更新过程中可能会被多次调用！")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],i=r(0),a=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p"),t._m(0),r("p"),t._v(" "),r("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("React Fibre是React核心算法的重新实现。它是React团队两年多的研究成果。")]),t._v(" "),r("p",[t._v("React Fiber的目标是提高其对动画，布局和手势等领域的适用性。它的主体特征是增量渲染：能够将渲染工作分割成块，并将其分散到多个帧中。")]),t._v(" "),r("p",[t._v("其他主要功能包括在进行更新时暂停，中止或重新使用工作的能力;为不同类型的更新分配优先权的能力;和新的并发原语。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("在页面元素很多，且需要频繁刷新的场景下，React 15 会出现掉帧的现象。请看以下例子：\n"),r("a",{attrs:{href:"https://claudiopro.github.io/react-fiber-vs-stack-demo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://claudiopro.github.io/react-fiber-vs-stack-demo/"),r("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("针对这一问题，React 团队从框架层面对 web 页面的运行机制做了优化，得到很好的效果。")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("解决主线程长时间被 JS 运算占用这一问题的基本思路，是将运算切割为多个步骤，分批完成。也就是说在完成一部分任务之后，将控制权交回给浏览器，让浏览器有时间进行页面的渲染。等浏览器忙完之后，再继续之前未完成的任务。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("有了解题思路后，我们再来看看 React 具体是怎么做的。")]),t._v(" "),t._m(10),t._v(" "),r("p",[t._v("React 框架内部的运作可以分为 3 层：")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("Fiber 其实指的是一种数据结构，它可以用一个纯 JS 对象来表示：")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),r("p",[t._v("而 Fiber Reconciler 每执行一段时间，都会将控制权交回给浏览器，可以分段执行：")]),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("为了达到这种效果，就需要有一个调度器 (Scheduler) 来进行任务分配。任务的优先级有六种：")]),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("优先级高的任务（如键盘输入）可以打断优先级低的任务（如Diff）的执行，从而更快的生效。")]),t._v(" "),r("p",[t._v("Fiber Reconciler 在执行过程中，会分为 2 个阶段。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),r("p",[t._v("阶段一可被打断的特性，让优先级更高的任务先执行，从框架层面大大降低了页面掉帧的概率。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),r("p",[t._v("因为一个更新过程可能被打断，所以React Fiber一个更新过程被分为两个阶段(Phase)：第一个阶段Reconciliation Phase和第二阶段Commit Phase。")]),t._v(" "),r("p",[t._v("在第一阶段Reconciliation Phase，React Fiber会找出需要更新哪些DOM，这个阶段是可以被打断的；但是到了第二阶段Commit Phase，那就一鼓作气把DOM更新完，绝不会被打断。")]),t._v(" "),r("p",[t._v("这两个阶段大部分工作都是React Fiber做，和我们相关的也就是生命周期函数。")]),t._v(" "),r("p",[t._v("以render函数为界，第一阶段可能会调用下面这些生命周期函数，说是“可能会调用”是因为不同生命周期调用的函数不同。")]),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("下面这些生命周期函数则会在第二阶段调用。")]),t._v(" "),t._m(23),t._v(" "),r("p",[t._v("因为第一阶段的过程会被打断而且“重头再来”，就会造成意想不到的情况。")]),t._v(" "),r("p",[t._v("比如说，一个低优先级的任务A正在执行，已经调用了某个组件的componentWillUpdate函数，接下来发现自己的时间分片已经用完了，于是冒出水面，看看有没有紧急任务，哎呀，真的有一个紧急任务B，接下来React Fiber就会去执行这个紧急任务B，任务A虽然进行了一半，但是没办法，只能完全放弃，等到任务B全搞定之后，任务A重头来一遍，注意，是重头来一遍，不是从刚才中段的部分开始，也就是说，componentWillUpdate函数会被再调用一次。")]),t._v(" "),t._m(24),t._v(" "),r("p",[t._v("使用React Fiber之后，一定要检查一下第一阶段相关的这些生命周期函数，看看有没有逻辑是假设在一个更新过程中只调用一次，有的话就要改了。")]),t._v(" "),r("p",[t._v("我们挨个看一看这些可能被重复调用的函数。")]),t._v(" "),r("p",[t._v("componentWillReceiveProps，即使当前组件不更新，只要父组件更新也会引发这个函数被调用，所以多调用几次没啥，通过！")]),t._v(" "),r("p",[t._v("shouldComponentUpdate，这函数的作用就是返回一个true或者false，不应该有任何副作用，多调用几次也无妨，通过！")]),t._v(" "),r("p",[t._v("render，应该是纯函数，多调用几次无妨，通过！")]),t._v(" "),r("p",[t._v("只剩下componentWillMount和componentWillUpdate这两个函数往往包含副作用，所以当使用React Fiber的时候一定要重点看这两个函数的实现。")]),t._v(" "),t._m(25),t._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000018250127",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Fiber 原理介绍 segmentfault"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26027085",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Fiber是什么 知乎"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://segmentfault.com/a/1190000012834204",target:"_blank",rel:"noopener noreferrer"}},[t._v("React系列——React Fiber 架构介绍资料汇总（翻译+中文资料）"),r("OutboundLink")],1)])])},s,!1,null,null,null);a.options.__file="012-react-fiber.md";e.default=a.exports}}]);