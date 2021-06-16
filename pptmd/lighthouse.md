### 使用 lighthouse 分析&改善网页质量

![](./image/lighthouse-0.jpg)

---

### <a href="https://github.com/GoogleChrome/lighthouse" target="_blank">lighthouse</a> 是什么？

- Lighthouse 是一个开源的自动化工具，用于改善网络应用的质量。已集成到 Chrome 扩展程序里，也可以作为命令行脚本运行。

- 只要为 Lighthouse 提供一个需要审查的网址，它将针对此页面运行一连串的测试，然后生成一个有关页面性能的评分报告。

---

### 为什么需要性能评分报告？

- 每次打开网页时的网络环境不一样

- 不同用户的设备性能不一样

- 通过视觉判断太过主观，因人而异，不可测量

---

- 所以需要的是多个用户、多个网络环境的多次测量才能得到相对准确的结果，而且测量结果要有客观的程序进行评分

---

### lighthouse 的使用

---

#### 作为 Node module 使用

- 便于集成到自动化测试、持续部署系统里

---

```js
const fs = require('fs')
const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')

const setup = async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })
  const runnerResult = await lighthouse('https://example.com', {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance'],
    port: chrome.port,
  })
  const reportHtml = runnerResult.report

  fs.writeFileSync('lhreport.html', reportHtml)

  console.log('性能得分', runnerResult.lhr.categories.performance.score * 100)

  await chrome.kill()
}

setup()
```

---

```sh
npm install -g lighthouse

lighthouse https://test-loan-calc.xxx.cn/loan-calc?user_id=1187278186286739459&orgcode=fangzhiadmin_test&app_code=1&color=f22148 --view
```

---

#### Chrome 扩展程序

<!-- https://test-loan-calc.xxx.cn/loan-calc?user_id=1187278186286739459&orgcode=fangzhiadmin_test&app_code=1&color=f22148 -->

![](./image/lighthouse-1.png)

---

### 评分类别

- 性能 Performance

- 可访问性 Accessibility

- 最佳实践 Best Practices

- 搜索引擎优化 SEO

---

- 每个类别都包含一系列的审计项（audit），针对审计项的运行结果，Lighthouse 会给出特定的优化建议与诊断结果帮助开发者有针对性地进行优化。

---

### 性能

- 首屏加载速度

- 用户操作的响应速度

- 用户操作的流畅程度

---

介绍几个性能测量指标

---

- First Contentful Paint (FCP)

标记页面开始加载到第一个文本或图像被绘制的时间。

---

- Speed Index

衡量内容在页面加载过程中的视觉显示速度。Lighthouse 首先会在浏览器中捕获一段页面加载的视频，并计算出各帧之间的视觉进度

---

- Largest Contentful Paint (LCP)

衡量标准视口内可见的最大内容元素的渲染时间。

---

- Time to Interactive (TTI)

衡量页面所有资源加载成功并能够可靠地快速响应用户输入的时间

---

- Total Blocking Time (TBT)

衡量从 FCP 到 TTI 之间主线程被阻塞时长的总和（阻塞：任务长度超过 50ms）

---

- Cumulative Layout Shift (CLS)

衡量一个元素从显示到隐藏，页面元素的偏移程度（用户体验）

---

### 可访问性 Accessibility

- 自动检测一部分可访问性、视觉问题

---

### 最佳实践 Best Practices

- 提供优化建议

---

### 搜索引擎优化 SEO

- 这些检查可确保页面针对搜索引擎结果排名进行了优化
