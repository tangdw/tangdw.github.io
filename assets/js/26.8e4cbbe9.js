(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{420:function(t,e,a){"use strict";a.r(e);var s=a(27),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-进阶","aria-hidden":"true"}},[t._v("#")]),t._v(" Typescript 进阶")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/utility-types.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts 内置 utility-types"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/piotrwitek/utility-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("第三方扩展 utility-types"),a("OutboundLink")],1),t._v(" 在内置的基础上增强了功能")]),t._v(" "),a("h2",{attrs:{id:"常用内置工具类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用内置工具类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用内置工具类型")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Props1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Props2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Props3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  readony a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  readony b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("Partial<Type>")]),t._v(" 将属性都设为可选 eg: "),a("code",[t._v("Partial<Props1>")]),t._v(" = "),a("code",[t._v("Props2")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Required<Type>")]),t._v(" 将属性都设为必填 eg: "),a("code",[t._v("Required<Props2>")]),t._v(" = "),a("code",[t._v("Props1")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Readonly<Type>")]),t._v(" 将属性都设为必填 eg: "),a("code",[t._v("Readonly<Props1>")]),t._v(" = "),a("code",[t._v("Props3")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Record<Keys, Type>")]),t._v(" 构建 Object 类型")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Pick<Type, Keys>")]),t._v(" 选取部分属性构建 Object 类型 "),a("code",[t._v('Pick<Props1, "a" | "b">')])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Omit<Type, Keys>")]),t._v(" 剔除部分属性构建 Object 类型")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Exclude<Type, ExcludedUnion>")]),t._v(" 排除集合里的部分可能，补集")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("Extract<Type, Union>")]),t._v(" 类型交集")])])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toHex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[a("code",[t._v("Parameters<Type>")]),t._v(" 返回函数的参数的类型 "),a("code",[t._v("Parameters<typeof toHex>")]),t._v(" = "),a("code",[t._v("number")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ReturnType<Type>")]),t._v(" 返回函数的返回值的类型 "),a("code",[t._v("ReturnType<typeof toHex>")]),t._v(" = "),a("code",[t._v("string")])])])]),t._v(" "),a("h2",{attrs:{id:"第三方补充常用工具类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方补充常用工具类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三方补充常用工具类型")]),t._v(" "),a("h3",{attrs:{id:"取对象类型的键类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取对象类型的键类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 取对象类型的键类型")]),t._v(" "),a("p",[a("code",[t._v("FunctionKeys<T>")]),t._v(" "),a("code",[t._v("NonFunctionKeys<T>")]),t._v(" "),a("code",[t._v("MutableKeys<T>")]),t._v(" "),a("code",[t._v("ReadonlyKeys<T>")]),t._v(" "),a("code",[t._v("RequiredKeys<T>")]),t._v(" "),a("code",[t._v("OptionalKeys<T>")])]),t._v(" "),a("h3",{attrs:{id:"取对象类型的值类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取对象类型的值类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 取对象类型的值类型")]),t._v(" "),a("p",[a("code",[t._v("ValuesType<T>")])]),t._v(" "),a("h3",{attrs:{id:"取对象类型的部分属性构建类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取对象类型的部分属性构建类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 取对象类型的部分属性构建类型")]),t._v(" "),a("p",[a("code",[t._v("PickByValue<T, ValueType>")]),t._v(" "),a("code",[t._v("PickByValueExact<T, ValueType>")]),t._v(" "),a("code",[t._v("OmitByValue<T, ValueType>")]),t._v(" "),a("code",[t._v("OmitByValueExact<T, ValueType>")])]),t._v(" "),a("h3",{attrs:{id:"两对象类型之间操作-类似-lodash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两对象类型之间操作-类似-lodash","aria-hidden":"true"}},[t._v("#")]),t._v(" 两对象类型之间操作（类似 lodash）")]),t._v(" "),a("p",[a("code",[t._v("Intersection<T, U>")]),t._v(" "),a("code",[t._v("Diff<T, U>")]),t._v(" "),a("code",[t._v("Subtract<T, T1>")]),t._v(" "),a("code",[t._v("Overwrite<T, U>")]),t._v(" "),a("code",[t._v("Assign<T, U>")])]),t._v(" "),a("h3",{attrs:{id:"增强功能的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增强功能的","aria-hidden":"true"}},[t._v("#")]),t._v(" 增强功能的")]),t._v(" "),a("p",[a("code",[t._v("Required<T, K>")]),t._v(" 相比 "),a("code",[t._v("Required<T>")]),t._v(" 多加了一个可选参数，可使部分属性为 required:")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v('Required<{ a?: number; b?: string; }, "a">')]),t._v(" => "),a("code",[t._v("{ a: number; b?: string; }")])])]),t._v(" "),a("p",[a("code",[t._v("Mutable<T>")]),t._v(" 使全部属性变成可变类型，"),a("code",[t._v("Readonly<T>")]),t._v(" 反操作")]),t._v(" "),a("p",[a("code",[t._v("PromiseType<T>")]),t._v(" 获取 Promise 的 resolve 类型")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("PromiseType<Promise<string>>")]),t._v(" => string")])]),t._v(" "),a("h3",{attrs:{id:"嵌套对象操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套对象操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 嵌套对象操作")]),t._v(" "),a("p",[a("code",[t._v("DeepReadonly<T>")]),t._v(" 所有嵌套属性都设为只读\n"),a("code",[t._v("DeepRequired<T>")]),t._v(" "),a("code",[t._v("DeepNonNullable<T>")]),t._v(" "),a("code",[t._v("DeepPartial<T>")])])])},[],!1,null,null,null);e.default=n.exports}}]);