(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{259:function(t,e,_){"use strict";_.r(e);var i=_(0),v=Object(i.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[_("p"),t._m(0),_("p"),t._v(" "),_("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),_("p",[t._v("转载整理自：https://cloud.tencent.com/developer/article/1071723")]),t._v(" "),_("p",[t._v("随着移动设备不断增强，web页面的性能体验逐渐变得可以接受，又因为web开发模式的诸多好处(跨平台、动态更新、减体积、无线扩展)，APP客户端出现越来越多内嵌web页面(以下把所有网页都称为H5页面)，很多APP把一些功能模块改用H5实现。")]),t._v(" "),_("p",[t._v("虽然H5页面性能变好了，但如果没针对性地做一些优化，体验还是很糟糕的，主要有两部分体验：")]),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("这里只讨论第一点，怎样减少白屏时间。对APP里的一些使用H5实现的功能模块，怎样加快它们的启动速度，让它们启动的体验接近原生。")]),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("打开一个H5页面会有一长段白屏时间？因为他做了很多事情，大概：")]),t._v(" "),t._m(4),_("p",[t._v("一些简单的页面可能没有JS请求数据这一步，但大部分功能模块是有的，根据当前用户信息，JS向后台请求相关数据在渲染，是常规开发方式。")]),t._v(" "),_("p",[t._v("一般页面在dom渲染后能显示页面雏形，在这之前用户看到的都是白屏，等到下载渲染图片后整个页面才完整显示，首屏秒开优化就是要减少这个过程的耗时。")]),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("上述打开一个页面的过程有很多优化点，包括前端和客户端，常规的前端和后端的性能优化在PC时代已经有最佳实践，主要是：")]),t._v(" "),_("p",[t._v("1、降低请求量：合并资源，减少HTTP请求数，minify / gzip 压缩， webP，lazyLoad")]),t._v(" "),_("p",[t._v("2、加载请求速度：预解析DNS，减少域名数，并行加载，CDN分发")]),t._v(" "),_("p",[t._v("3、缓存： HTTP协议缓存请求，离线缓存 manfest，离线数据缓存localStorage")]),t._v(" "),_("p",[t._v("4、渲染：JS/CSS优化，加载顺序，服务端渲染，pipeline")]),t._v(" "),_("p",[t._v("其中对首屏启动速度影响最大的就是网络请求，所以优化的重点就是缓存，这着重说一下前端对请求的缓存策略，我们再细分一下，分成HTML的缓存，JS/CSS/image 资源的缓存，以及json数据的缓存。")]),t._v(" "),_("p",[t._v("HTML 和 JS/CSS/image 资源都属于静态文件，HTTP本身提供了缓存协议，浏览器实现了这些协议，可以做到静态文件的缓存。")]),t._v(" "),_("p",[t._v("总的来说，就是两种缓存：")]),t._v(" "),_("p",[t._v("1、弱缓存(询问是否有更新)：根据 If-Modified-Since / ETag 等协议向后端请求询问是否有更新，没哟更新返回304，浏览器使用本地缓存")]),t._v(" "),_("p",[t._v("2、强缓存(直接使用本地缓存)：根据协议里的 Cache-Control / Expires 字段去确定多长时间内可以不去发请求询问更新，直接使用本地缓存")]),t._v(" "),_("p",[t._v("前端能做的最大限度的缓存策略是：HTML 文件每次都向服务器询问是否有更新，JS/CSS/image 资源文件则不请求更新，直接使用本地缓存。那 JS/CSS/image资源文件如何更新？常见做法是在构建过程中给每个资源文件一个版本号或hash值，若资源文件有更新，版本号和hash值变化，这个资源请求的URL就变化了，同时对应的HTML页面更新，变成请求新的资源URL，资源也就更新了。")]),t._v(" "),_("p",[t._v("json 数据的缓存可以用 localStorage 缓存请求下来的数据，可以在首次显示时先用本地数据，再请求更新，这都由前端 JS 控制。")]),t._v(" "),_("p",[t._v("这些缓存策略可以实现 JS/CSS 等资源文件以及用户数据的缓存的全缓存，可以做到每次都直接使用本地缓存数据，不用等待网络请求。但 HTML 文件的缓存做不到，对于 HTML 文件，如果把 Expires / max-age 时间设长了，长时间只使用本地缓存，那更新就不及时，如果设短了，每次打开页面都要发网络请求询问是否有更新，再确定是否使用本地资源，一般前端在这里的策略是每次都请求，这在弱网情况下用户感受到的白屏时间仍然会很长。所以 HTML 文件的“缓存”和跟“更新”间存在矛盾。")]),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("桌面时代受限于浏览器，H5 页面无法做更多的优化，现在 H5 页面是内嵌在客户端 APP 上，客户端有更多的权限，于是客户端上可以超出浏览器的范围，做更多的优化。")]),t._v(" "),t._m(7),t._v(" "),_("p",[t._v("在客户端有更自由的缓存策略，客户端可以拦截 H5 页面的所有请求，由自己管理缓存，针对上述 HTML 文件的“缓存”和“更新”之间的矛盾，我们可以用这样的策略解决：")]),t._v(" "),_("p",[t._v("1.在客户端拦截请求，首次请求 HTML 文件后缓存数据，第二次不发请求，直接使用缓存数据。")]),t._v(" "),_("p",[t._v("2.什么时候去请求更新？这个更新请求可以客户端自由控制策略，可以在使用本地缓存打开本地页面后再在后台发起请求询问更新缓存，下次打开时生效；也可以在 APP 启动时或某个时机在后台去发起请求预更新，提升用户访问最新代码的几率。")]),t._v(" "),_("p",[t._v("这样看起来已经比较完美了，HTML 文件在用客户端的策略缓存，其余资源和数据沿用上述前端的缓存方式，这样一个 H5 页面第二次访问从 HTML 到 JS/CSS/Image 资源，再到数据，都可以直接从本地读取，无需等待网络请求，同时又能保持尽可能的实时更新，解决了缓存问题，大大提升 H5 页面首屏启动速度。")]),t._v(" "),t._m(8),t._v(" "),_("p",[t._v("上述方案似乎已完整解决缓存问题，但实际上还有很多问题：")]),t._v(" "),t._m(9),t._v(" "),_("p",[t._v("这些问题在客户端上都是可以被解决的，只不过有点麻烦，简单描述下：")]),t._v(" "),t._m(10),t._v(" "),_("p",[t._v("上面的解决方案实现起来十分繁琐，原因就是各个 HTML 和资源文件很多很分散，管理困难，有个较好的方案可以解决这些问题，就是离线包。")]),t._v(" "),t._m(11),t._v(" "),_("p",[t._v("既然很多问题都是文件分散管理困难引起，而我们这里的使用场景是使用 H5 开发功能模块，那很容易想到把一个个功能模块的所有相关页面和资源打包下发，这个压缩包可以称为功能模块的离线包。使用离线包的方案，可以相对较简单地解决上述几个问题：")]),t._v(" "),t._m(12),t._v(" "),_("p",[t._v("到这里，对于使用 H5 开发功能模块，离线包是一个挺不错的方案了，简单复述一下离线包的方案：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),_("p",[t._v("离线包方案在缓存上已经做得差不多了，还可以再配上一些细节优化：")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),_("p",[t._v("早期 web 页面里，JS 只是负责交互，所有内容都是直接在 HTML 里，到现代 H5 页面，很多内容已经依赖 JS 逻辑去决定渲染什么，例如等待 JS 请求 JSON 数据，再拼接成 HTML 生成 DOM 渲染到页面上，于是页面的渲染展现就要等待这一整个过程，这里有一个耗时，减少这里的耗时也是白屏优化的范围之内。")]),t._v(" "),_("p",[t._v("优化方法可以是人为减少 JS 渲染逻辑，也可以是更彻底地，回归到原始，所有内容都由服务端返回的 HTML 决定，无需等待 JS 逻辑，称之为服务端渲染。是否做这种优化视业务情况而定，毕竟这种会带来开发模式变化/流量增大/服务端开销增大这些负面影响。手Q的部分页面就是使用服务端渲染的方式，称为动态直出，见文章：https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2650995689&idx=1&sn=4f77f121345004ae6e18f4b945e46f8e&scene=21#wechat_redirect")]),t._v(" "),t._m(19),t._v(" "),_("p",[t._v("从前端优化，到客户端缓存，到离线包，到更多的细节优化，做到上述这些点，H5 页面在启动上差不多可以媲美原生的体验了。")]),t._v(" "),_("p",[t._v("总结起来，大体优化思路就是：缓存/预加载/并行，缓存一切网络请求，尽量在用户打开之前就加载好所有内容，能并行做的事不串行做。这里有些优化手段需要做好一整套工具和流程支持，需要跟开发效率权衡，视实际需求优化。")]),t._v(" "),_("p",[t._v("另外上述讨论的是针对功能模块类的 H5 页面秒开的优化方案，客户端 APP 上除了功能模块，其他一些像营销活动/外部接入的 H5 页面可能有些优化点就不适用，还需要视实际情况和需求而定。另外微信小程序就是属于功能模块的类别，差不多是这个套路。")]),t._v(" "),_("p",[t._v("这里讨论了 H5 页面首屏启动时间的优化，上述优化过后，基本上耗时只剩 webview 本身的启动/渲染机制问题了，这个问题跟后续的响应流畅度的问题一起属于另一个优化范围，就是类 RN / Weex 这样的方案，有机会再探讨。")]),t._v(" "),t._m(20),t._v(" "),_("p",[_("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1071723",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动 H5 首屏秒开优化方案探讨"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://segmentfault.com/a/1190000020102343",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度APP-Android H5首屏优化实践"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/5d12cd09e51d4510a73280f1",target:"_blank",rel:"noopener noreferrer"}},[t._v("客户端内H5页面的首屏性能优化"),_("OutboundLink")],1)])])},[function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#_1-启动页面过程"}},[t._v("1. 启动页面过程")])]),_("li",[_("a",{attrs:{href:"#_2-前端优化"}},[t._v("2. 前端优化")])]),_("li",[_("a",{attrs:{href:"#_3-客户端优化"}},[t._v("3. 客户端优化")]),_("ul",[_("li",[_("a",{attrs:{href:"#_3-1-html缓存"}},[t._v("3.1 HTML缓存")])]),_("li",[_("a",{attrs:{href:"#_3-2-html缓存问题"}},[t._v("3.2 HTML缓存问题")])]),_("li",[_("a",{attrs:{href:"#_3-3-离线包"}},[t._v("3.3 离线包")])]),_("li",[_("a",{attrs:{href:"#_3-4-更多优化"}},[t._v("3.4 更多优化")])])])]),_("li",[_("a",{attrs:{href:"#_4-服务端渲染"}},[t._v("4. 服务端渲染")])]),_("li",[_("a",{attrs:{href:"#_5-最后"}},[t._v("5. 最后")])]),_("li",[_("a",{attrs:{href:"#参考资料"}},[t._v("参考资料")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"移动h5首屏秒开优化方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动h5首屏秒开优化方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 移动H5首屏秒开优化方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("页面启动白屏时间")]),this._v("：打开一个H5页面需要做一系列处理，会有一段白屏时间，体验糟糕")]),this._v(" "),e("li",[e("strong",[this._v("响应流畅度")]),this._v("：由于webkit的渲染机制，单线程，历史包袱等原因，页面刷新、交互的性能体验不如原生。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-启动页面过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动页面过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 启动页面过程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("初始化 webview -> 请求页面 -> 下载数据 -> 解析HTML -> 请求 js/css 资源 -> dom 渲染 -> 解析 JS 执行 -> JS 请求数据 -> 解析渲染 -> 下载渲染图片\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-前端优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-前端优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 前端优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-客户端优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-客户端优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 客户端优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-1-html缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-html缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.1 HTML缓存")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-2-html缓存问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-html缓存问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.2 HTML缓存问题")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ol",[_("li",[_("strong",[t._v("没有预加载")]),t._v("：第一次打开的体验很差，所有数据都要从网络请求。")]),t._v(" "),_("li",[_("strong",[t._v("缓存不可控")]),t._v("：缓存的存取由系统 webview 控制，无法控制它的缓存逻辑，带来的问题包括： i. 清理逻辑不可控，缓存空间有限，可能缓存几张大图片后，重要的 HTML/JS/CSS 缓存就被清除了。 ii.磁盘 IO 无法控制，无法从磁盘预加载数据到内存。")]),t._v(" "),_("li",[_("strong",[t._v("更新体验差")]),t._v("：后台 HTML/JS/CSS 更新时全量下载，数据量大，弱网下载耗时长。")]),t._v(" "),_("li",[_("strong",[t._v("无法防劫持")]),t._v("：若 HTML 页面被运营商或其他第三方劫持，将长时间缓存劫持的页面。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("可以配置一个预加载列表，在APP启动或某些时机时提前去请求，这个预加载列表需要包含所需 H5 模块的页面和资源，还需要考虑到一个H5模块有多个页面的情况，这个列表可能会很大，也需要工具生成和管理这个预加载列表。")]),this._v(" "),e("li",[this._v("客户端可以接管所有请求的缓存，不走 webview 默认缓存逻辑，自行实现缓存机制，可以分缓存优先级以及缓存预加载。")]),this._v(" "),e("li",[this._v("可以针对每个 HTML 和资源文件做增量更新，只是实现和管理起来比较麻烦。")]),this._v(" "),e("li",[this._v("在客户端使用 httpdns + https 防劫持。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-3-离线包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-离线包","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.3 离线包")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("可以预先下载整个离线包，只需要按业务模块配置，不需要按文件配置，离线包包含业务模块相关的所有页面，可以一次性预加载。")]),this._v(" "),e("li",[this._v("离线包核心文件和页面动态的图片资源文件缓存分离，可以更方便地管理缓存，离线包也可以整体提前加载进内存，减少磁盘 IO 耗时。")]),this._v(" "),e("li",[this._v("离线包可以很方便地根据版本做增量更新。")]),this._v(" "),e("li",[this._v("离线包以压缩包的方式下发，同时会经过加密和校验，运营商和第三方无法对其劫持篡改。")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ol",[_("li",[t._v("后端使用构建工具把同一个业务模块相关的页面和资源打包成一个文件，同时对文件加密/签名。")]),t._v(" "),_("li",[t._v("客户端根据配置表，在自定义时机去把离线包拉下来，做解压/解密/校验等工作。")]),t._v(" "),_("li",[t._v("根据配置表，打开某个业务时转接到打开离线包的入口页面。")]),t._v(" "),_("li",[t._v("拦截网络请求，对于离线包已经有的文件，直接读取离线包数据返回，否则走 HTTP 协议缓存逻辑。")]),t._v(" "),_("li",[t._v("离线包更新时，根据版本号后台下发两个版本间的 diff 数据，客户端合并，增量更新。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-4-更多优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-更多优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.4 更多优化")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("公共资源包")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("每个包都会使用相同的 JS 框架和 CSS 全局样式，这些资源重复在每一个离线包出现太浪费，可以做一个公共资源包提供这些全局文件。\n")])])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ul",[_("li",[_("p",[t._v("预加载 webview")]),t._v(" "),_("p",[t._v("无论是 iOS 还是 Android，本地 webview 初始化都要不少时间，可以预先初始化好 webview。这里分两种预加载：")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("首次预加载")]),t._v("：在一个进程内首次初始化 webview 与第二次初始化不同，首次会比第二次慢很多。原因预计是 webview 首次初始化后，即使 webview 已经释放，但一些多 webview 共用的全局服务或资源对象仍没有释放，第二次初始化时不需要再生成这些对象从而变快。我们可以在 APP 启动时预先初始化一个 webview 然后释放，这样等用户真正走到 H5 模块去加载 webview时就变快了。")]),t._v(" "),_("li",[_("strong",[t._v("webview 池")]),t._v("：可以用两个或多个 webview 重复使用，而不是每次打开 H5 都新建 webview。不过这种方式要解决页面跳转时清空上一个页面，另外若一个 H5 页面上 JS 出现内存泄漏，就影响到其他页面，在 APP 运行期间都无法释放了。")])]),t._v(" "),_("p",[t._v("可以参考美团点评的这篇文章：https://tech.meituan.com/WebViewPerf.html")])]),t._v(" "),_("li",[_("p",[t._v("预加载数据")]),t._v(" "),_("p",[t._v("理想情况下离线包的方案第一次打开时所有 HTML/JS/CSS 都使用本地缓存，无需等待网络请求，但页面上的用户数据还是需要实时拉，这里可以做个优化，在 webview 初始化的同时并行去请求数据，webview 初始化是需要一些时间的，这段时间没有任何网络请求，在这个时机并行请求可以节省不少时间。")]),t._v(" "),_("p",[t._v("具体实现上，首先可以在配置表注明某个离线包需要预加载的 URL，客户端在 webview 初始化同时发起请求，请求由一个管理器管理，请求完成时缓存结果，然后 webview 在初始化完毕后开始请求刚才预加载的 URL，客户端拦截到请求，转接到刚才提到的请求管理器，若预加载已完成就直接返回内容，若未完成则等待。")])]),t._v(" "),_("li",[_("p",[t._v("Fallback")]),t._v(" "),_("p",[t._v("如果用户访问某个离线包模块时，这个离线包还没有下载，或配置表检测到已有新版本但本地是旧版本的情况如何处理？几种方案：")]),t._v(" "),_("ol",[_("li",[t._v("简单的方案是如果本地离线包没有或不是最新，就同步阻塞等待下载最新离线包。这种用户打开的体验更差了，因为离线包体积相对较大。")]),t._v(" "),_("li",[t._v("也可以是如果本地有旧包，用户本次就直接使用旧包，如果没有再同步阻塞等待，这种会导致更新不及时，无法确保用户使用最新版本。")]),t._v(" "),_("li",[t._v("还可以对离线包做一个线上版本，离线包里的文件在服务端有一一对应的访问地址，在本地没有离线包时，直接访问对应的线上地址，跟传统打开一个在线页面一样，这种体验相对等待下载整个离线包较好，也能保证用户访问到最新。")])]),t._v(" "),_("p",[t._v("第三种 Fallback 的方式还带来兜底的好处，在一些意外情况离线包出错的时候可以直接访问线上版本，功能不受影响，此外像公共资源包更新不及时导致版本没有对应上时也可以直接访问线上版本，是个不错的兜底方案。")]),t._v(" "),_("p",[t._v("上述几种方案策略也可以混着使用，看业务需求。")])]),t._v(" "),_("li",[_("p",[t._v("使用客户端接口")]),t._v(" "),_("p",[t._v("网路和存储接口如果使用 webkit 的 ajax 和 localStorage 会有不少限制，难以优化，可以在客户端提供这些接口给 JS，客户端可以在网络请求上做像 DNS 预解析/IP直连/长连接/并行请求等更细致的优化，存储也使用客户端接口也能做读写并发/用户隔离等针对性优化。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-服务端渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-服务端渲染","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 服务端渲染")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-最后","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 最后")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);v.options.__file="012-移动H5首屏秒开优化方案.md";e.default=v.exports}}]);