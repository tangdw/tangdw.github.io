(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{416:function(t,s,n){"use strict";n.r(s);var a=n(27),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"eslint-pretier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint-pretier","aria-hidden":"true"}},[t._v("#")]),t._v(" eslint + pretier")]),t._v(" "),n("h3",{attrs:{id:"先说结论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#先说结论","aria-hidden":"true"}},[t._v("#")]),t._v(" 先说结论：")]),t._v(" "),n("p",[t._v("1、先初始化一个项目")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" create react-app cra-demo --typescript\n \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" typescript @types/react @types/react-dom\n \n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" husky lint-staged prettier eslint-plugin-prettier eslint-config-prettier\n")])])]),n("p",[t._v("编辑器安装 eslint 插件、prettier 插件，可以进行手动格式化")]),t._v(" "),n("p",[t._v("注意：现在编辑器不需要再设置 eslint.validate 了，替代的设置是 eslint:probe 而且常用的文件已经默认设置了，无需再自己设置")]),t._v(" "),n("p",[t._v("2、再打开 package.json")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslintConfig"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/react"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/@typescript-eslint"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"overrides"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"files"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"**/*.ts?(x)"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"husky"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre-commit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[t._v("3、添加 .prettierrc.js 配置自己的代码格式化规则")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://prettier.io/docs/en/options.html")]),t._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tabWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  printWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  useTabs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  semi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  singleQuote"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"解释一下这些配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解释一下这些配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 解释一下这些配置")]),t._v(" "),n("p",[t._v("先看看 cra 自带的 eslint 里的 extends:  react-app https://www.npmjs.com/package/eslint-config-react-app")]),t._v(" "),n("p",[t._v("这里面包含那些东西呢？")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("eslint-config-react-app\n@typescript-eslint/eslint-plugin@2.x\n@typescript-eslint/parser@2.x\nbabel-eslint@10.x\neslint@6.x\neslint-plugin-flowtype@4.x\neslint-plugin-import@2.x\neslint-plugin-jsx-a11y@6.x\neslint-plugin-react@7.x\neslint-plugin-react-hooks@2.x\n")])])]),n("p",[t._v("这么多东西 cra 已经为我们集成了，包括 typescript-eslint eslint-plugin-react eslint-plugin-react-hooks 我们都不用去安装，也不用去配置（集成再 react-app 里了）")]),t._v(" "),n("p",[t._v("react-app 还包含一些基础的 eslint 规则，其实完全够了（不需要再装什么第三方 eslint 配置）")]),t._v(" "),n("p",[t._v("少部分需要约束的语法检查可以放在 rules 里")]),t._v(" "),n("p",[t._v("overrides 指的是针对特殊的文件应用哪些规则")]),t._v(" "),n("h3",{attrs:{id:"再来说说-prettier-和-eslint-的关系-以及相关配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#再来说说-prettier-和-eslint-的关系-以及相关配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 再来说说 prettier 和 eslint 的关系，以及相关配置")]),t._v(" "),n("p",[t._v("prettier 专门负责代码格式化的工具，github 上非常流行，也是 cra 推荐的 https://github.com/prettier/prettier")]),t._v(" "),n("p",[t._v("eslint 处理代码格式 + js 语法检查")]),t._v(" "),n("p",[t._v("我们希望使用 prettier 来替代 eslint 里的代码格式检查，语法检查仍然用 eslint")]),t._v(" "),n("p",[t._v("这里涉及到这些包 prettier eslint-plugin-prettier eslint-config-prettier 其中：")]),t._v(" "),n("p",[t._v("prettier 是基础包")]),t._v(" "),n("p",[t._v("eslint-plugin-prettier 的作用是：")]),t._v(" "),n("ol",[n("li",[t._v("替代 eslint 的代码格式检查，编辑器的 eslint 插件提示格式错误会使用 prettier，使用命令 eslint --fix 时也会使用 prettier 来处理代码格式化")]),t._v(" "),n("li",[t._v("阻止 eslint 的代码格式检查避免冲突，需要安装 eslint-config-prettier")])]),t._v(" "),n("p",[t._v("eslint-config-prettier 的作用是阻止某些 eslint 的代码格式检查，避免和 prettier 冲突")]),t._v(" "),n("p",[t._v("对应的设置是：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-app"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prettier 推荐的规则，需要修改的可以在 .prettierrc.js 文件里配置")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/react"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 由于 react-app 里包含了 eslint-plugin-react，这里的意思是阻止 eslint-plugin-react 的代码格式检查")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prettier/@typescript-eslint"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同上")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[t._v("再来看看 git 提交 commit 时进行格式化代码和语法检查，语法检查失败时会阻止")]),t._v(" "),n("p",[t._v("需要安装的包是 husky lint-staged 对应的配置：")]),t._v(" "),n("p",[t._v('husky 是 git 钩子，lint-staged 作用是对 git "将要提交的文件" 进行处理')]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对 git 将要提交的文件进行语法检查并格式化")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"husky"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hooks"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pre-commit"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lint-staged"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在提交代码前执行命令任务 lint-staged")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("h3",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),n("p",[t._v('"@typescript-eslint/no-unused-vars": "warn",')])])},[],!1,null,null,null);s.default=e.exports}}]);