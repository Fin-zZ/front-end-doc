(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{355:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p"),t._m(0),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("DOM是javascript操作网页的接口，全称为文档对象模型(Document Object Model)。它的作用是将网页转为一个javascript对象，从而可以使用javascript对网页进行各种操作(比如增删内容)。浏览器会根据DOM模型，将HTML文档解析成一系列的节点，再由这些节点组成一个树状结构。DOM的最小组成单位叫做节点(node)，文档的树形结构(DOM树)由12种类型的节点组成。")]),t._v(" "),a("p",[t._v("一般地，节点至少拥有nodeType、nodeName和nodeValue这三个基本属性。节点类型不同，这三个属性的值也不相同")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("nodeType属性返回节点类型的常数值。不同的类型对应不同的常数值，12种类型分别对应1到12的常数值")]),t._v(" "),t._m(4),a("p",[t._v("DOM定义了一个Node接口，这个接口在javascript中是作为Node类型实现的，而在IE8-浏览器中的所有DOM对象都是以COM对象的形式实现的。所以，IE8-浏览器并不支持Node对象的写法")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("nodeName属性返回节点的名称")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("nodeValue属性返回或设置当前节点的值，格式为字符串")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("12 种不同的节点类型，其中可能会有不同节点类型的子节点：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("元素节点：对应网页的HTML标签元素。")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("属性节点：对应网页中HTML标签的属性，它只存在于元素的attributes属性中，并不是DOM文档树的一部分。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("文本节点：网页中的HTML标签内容。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),a("p",[t._v("表示网页中的HTML注释。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),a("p",[t._v("表示HTML文档，也称为根节点，指向document对象。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),a("p",[t._v("包含着与文档的doctype有关的所有信息。")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),a("p",[t._v("在文档中没有对应的标记，是一种轻量级的文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),a("p",[t._v("DTD声明节点notation代表DTD中声明的符号。")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.nodeType MDN"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u013243347/article/details/52122958",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM常用节点类型"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/zhuwq585/p/6075119.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("简述HTML DOM及其节点分类"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"http://www.cnblogs.com/xiaohuochai/p/5785189.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解DOM节点类型第一篇——12种DOM节点类型概述"),a("OutboundLink")],1)])])},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-节点说明"}},[t._v("1. 节点说明")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-1-nodetype"}},[t._v("1.1 nodeType")])]),a("li",[a("a",{attrs:{href:"#_1-2-nodename"}},[t._v("1.2 nodeName")])]),a("li",[a("a",{attrs:{href:"#_1-3-nodevalue"}},[t._v("1.3 nodeValue")])])])]),a("li",[a("a",{attrs:{href:"#_2-节点介绍"}},[t._v("2. 节点介绍")]),a("ul",[a("li",[a("a",{attrs:{href:"#_2-1-元素节点"}},[t._v("2.1 元素节点")])]),a("li",[a("a",{attrs:{href:"#_2-2-属性节点"}},[t._v("2.2 属性节点")])]),a("li",[a("a",{attrs:{href:"#_2-3-文本节点"}},[t._v("2.3 文本节点")])]),a("li",[a("a",{attrs:{href:"#_2-4-注释节点"}},[t._v("2.4 注释节点")])]),a("li",[a("a",{attrs:{href:"#_2-5-文档节点"}},[t._v("2.5 文档节点")])]),a("li",[a("a",{attrs:{href:"#_2-6-文档类型节点"}},[t._v("2.6 文档类型节点")])]),a("li",[a("a",{attrs:{href:"#_2-7-文档片段节点"}},[t._v("2.7 文档片段节点")])]),a("li",[a("a",{attrs:{href:"#_2-8-dtd声明节点"}},[t._v("2.8 DTD声明节点")])])])]),a("li",[a("a",{attrs:{href:"#_3-参考资料"}},[t._v("3. 参考资料")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"一、节点的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、节点的类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 一、节点的类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-节点说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-节点说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 节点说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-1-nodetype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-nodetype","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.1 nodeType")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("元素节点            　　Node.ELEMENT_NODE(1)\n属性节点            　　Node.ATTRIBUTE_NODE(2)\n文本节点            　　Node.TEXT_NODE(3)\nCDATA节点             Node.CDATA_SECTION_NODE(4)\n实体引用名称节点    　　 Node.ENTRY_REFERENCE_NODE(5)\n实体名称节点        　　Node.ENTITY_NODE(6)\n处理指令节点        　　Node.PROCESSING_INSTRUCTION_NODE(7)\n注释节点            　 Node.COMMENT_NODE(8)\n文档节点            　 Node.DOCUMENT_NODE(9)\n文档类型节点        　　Node.DOCUMENT_TYPE_NODE(10)\n文档片段节点        　　Node.DOCUMENT_FRAGMENT_NODE(11)\nDTD声明节点            Node.NOTATION_NODE(12)\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//在标准浏览器下返回1，而在IE8-浏览器中报错，提示Node未定义")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("ELEMENT_NODE")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-2-nodename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-nodename","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.2 nodeName")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-3-nodevalue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-nodevalue","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.3 nodeValue")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-节点介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-节点介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 节点介绍")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("节点类型")]),t._v(" "),a("th",[t._v("nodeType")]),t._v(" "),a("th",[t._v("nodeName")]),t._v(" "),a("th",[t._v("nodeValue")]),t._v(" "),a("th",[t._v("Named Constant")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("元素节点")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("标签名（大写）")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("ELEMENT_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("属性节点")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("属性名")]),t._v(" "),a("td",[t._v("属性值")]),t._v(" "),a("td",[t._v("ATTRIBUTE_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("文本节点")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[a("code",[t._v("#text")])]),t._v(" "),a("td",[t._v("文本内容")]),t._v(" "),a("td",[t._v("TEXT_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("CDTAT节点")]),t._v(" "),a("td",[t._v("4")]),t._v(" "),a("td",[t._v("cdata-section")]),t._v(" "),a("td",[t._v("CDATA区域的内容")]),t._v(" "),a("td",[t._v("CDATA_SECTION_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("实体引用名称节点")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("引用名称")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("ENTITY_REFERENCE_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("实体名称节点")]),t._v(" "),a("td",[t._v("6")]),t._v(" "),a("td",[t._v("实体名称")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("ENTITY_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("处理指令节点")]),t._v(" "),a("td",[t._v("7")]),t._v(" "),a("td",[t._v("target")]),t._v(" "),a("td",[t._v("entire content cluding the target")]),t._v(" "),a("td",[t._v("PROCESSING_INSTRUCTION_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("注释节点")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[a("code",[t._v("#comment")])]),t._v(" "),a("td",[t._v("注释内容")]),t._v(" "),a("td",[t._v("COMMENT_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("文档节点")]),t._v(" "),a("td",[t._v("9")]),t._v(" "),a("td",[a("code",[t._v("#document")])]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("DOCUMENT_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("文档类型节点")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("doctype的名称")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("DOCUMENT_TYPE_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("文档片段节点")]),t._v(" "),a("td",[t._v("11")]),t._v(" "),a("td",[t._v("document-fragment")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("DOCUMENT_FRAGMENT_NODE")])]),t._v(" "),a("tr",[a("td",[t._v("DTD声明节点")]),t._v(" "),a("td",[t._v("12")]),t._v(" "),a("td",[t._v("符号名称")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("NOTATION_NODE")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("节点类型")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("子节点")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Element")]),t._v(" "),a("td",[t._v("代表元素")]),t._v(" "),a("td",[t._v("Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference")])]),t._v(" "),a("tr",[a("td",[t._v("Attr")]),t._v(" "),a("td",[t._v("代表属性")]),t._v(" "),a("td",[t._v("Text, EntityReference")])]),t._v(" "),a("tr",[a("td",[t._v("Text")]),t._v(" "),a("td",[t._v("代表元素或属性中的文本内容")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[t._v("CDATASection")]),t._v(" "),a("td",[t._v("代表文档中的 CDATA 部分（不会由解析器解析的文本）")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[t._v("EntityReference")]),t._v(" "),a("td",[t._v("代表实体引用")]),t._v(" "),a("td",[t._v("Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference")])]),t._v(" "),a("tr",[a("td",[t._v("Entity")]),t._v(" "),a("td",[t._v("代表实体")]),t._v(" "),a("td",[t._v("Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference")])]),t._v(" "),a("tr",[a("td",[t._v("ProcessingInstruction")]),t._v(" "),a("td",[t._v("代表处理指令")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[t._v("Comment")]),t._v(" "),a("td",[t._v("代表注释")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[t._v("Document")]),t._v(" "),a("td",[t._v("代表整个文档（DOM 树的根节点）")]),t._v(" "),a("td",[t._v("Element, ProcessingInstruction, Comment, DocumentType")])]),t._v(" "),a("tr",[a("td",[t._v("DocumentType")]),t._v(" "),a("td",[t._v("向为文档定义的实体提供接口")]),t._v(" "),a("td",[t._v("None")])]),t._v(" "),a("tr",[a("td",[t._v("DocumentFragment")]),t._v(" "),a("td",[t._v("代表轻量级的 Document 对象，能够容纳文档的某个部分")]),t._v(" "),a("td",[t._v("Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference")])]),t._v(" "),a("tr",[a("td",[t._v("Notation")]),t._v(" "),a("td",[t._v("代表 DTD 中声明的符号")]),t._v(" "),a("td",[t._v("None")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-1-元素节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-元素节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.1 元素节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("nodeType: 1")]),this._v(" "),s("p",[this._v("nodeName: 大写的标签名")]),this._v(" "),s("p",[this._v("nodeValue: null")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 1 'BODY' null")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("ELEMENT_NODE")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-2-属性节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-属性节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.2 属性节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("nodeType: 2")]),this._v(" "),s("p",[this._v("nodeName: 属性名")]),this._v(" "),s("p",[this._v("nodeValue: 属性值")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" attr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" test"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//2 'id' 'test'")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("attr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("attr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("attr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("ATTRIBUTE_NODE")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//true    ")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-3-文本节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-文本节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.3 文本节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("nodeType: 3")]),this._v(" "),s("p",[this._v("nodeName:  "),s("code",[this._v("#text")])]),this._v(" "),s("p",[this._v("nodeValue: 标签内容值")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("测试"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" txt "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" test"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//3 '#text' '测试'")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("txt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("txt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("txt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("TEXT_NODE")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//true    ")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-4-注释节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-注释节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.4 注释节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("nodeType: 8")]),this._v(" "),s("p",[this._v("nodeName:  "),s("code",[this._v("#comment")])]),this._v(" "),s("p",[this._v("nodeValue: 注释的内容")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myDiv"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 我是注释内容 --\x3e")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" com "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" myDiv"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//8 '#comment' '我是注释内容'")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("com"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("COMMENT_NODE")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//true    ")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-5-文档节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-文档节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.5 文档节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("nodeType: 9")]),this._v(" "),s("p",[this._v("nodeName:  "),s("code",[this._v("#document")])]),this._v(" "),s("p",[this._v("nodeValue:  null")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v('//9 "#document" null')]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("DOCUMENT_NODE")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("9")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//true    ")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-6-文档类型节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-文档类型节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.6 文档类型节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("nodeType: 10")]),this._v(" "),s("p",[this._v("nodeName:  doctype的名称")]),this._v(" "),s("p",[this._v("nodeValue:  null")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nodeDocumentType "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstChild"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v('//10 "html" null')]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodeDocumentType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nodeDocumentType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nodeDocumentType"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("DOCUMENT_TYPE_NODE")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-7-文档片段节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-文档片段节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.7 文档片段节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("nodeType: 11")]),this._v(" "),s("p",[this._v("nodeName:  "),s("code",[this._v("#document-fragment")])]),this._v(" "),s("p",[this._v("nodeValue:  null")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nodeDocumentFragment "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createDocumentFragment")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n"),a("span",{attrs:{class:"token comment"}},[t._v('//11 "#document-fragment" null')]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodeDocumentFragment"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nodeDocumentFragment"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("nodeDocumentFragment"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Node"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("DOCUMENT_FRAGMENT_NODE")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("11")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-8-dtd声明节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-dtd声明节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.8 DTD声明节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("nodeType: 12")]),this._v(" "),s("p",[this._v("nodeName:  符号名称")]),this._v(" "),s("p",[this._v("nodeValue:  null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 参考资料")])}],!1,null,null,null);e.options.__file="001-节点的类型.md";s.default=e.exports}}]);