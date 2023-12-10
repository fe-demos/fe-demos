# HTML5

IE 从 [IE 9](https://en.wikipedia.org/wiki/IE_9) 开始部分支持 HTML5 的语义化标签。

## 还在使用 HTML4 的网站

主要是一些老旧网站像[吾爱破解](https://www.52pojie.cn/)，银行网站例如[农业银行](https://www.abchina.com/cn/)和[中国银行](https://www.boc.cn/)，令人意外的是政府网站基本上没看到还在用 HTML4 的。

## 废弃的元素 (Element)

下面这些废弃的元素并不是都是从 html5 废弃的有些可能 html3 或者 html4 就废弃了

- 文本样式标签，没有语义，这类标签应该使用 CSS 替代，例如
  - center: text-align: center
  - basefont/font: font-size, font-family, color
  - big: font-size
  - strike, s, u: text-decoration
  - xmp: font-family: generic-font
  - marquee: css animation
- 使用更通用的替代品，dir(ul), menu(ul), plaintext(pre), tt(code), isindex(input type=search), applet, embed(object),
- 使用更强大的标签替代，acronym 使用 abbr 替代，frame/frameset/noframes 可访问性很差使用 iframe 替代

## 废弃的属性（Attribute）

由于 CSS 变得越来越强大以及样式分离的设计理念，很多原本用于描述视觉样式的属性被废弃，应该使用 CSS 来设置：

- 部分可以内嵌文本的块级元素例如 p 标签的 align：使用 text-align: center 替代
- body 的 background 属性

## 新标签

HTML5 其中一个设计理念就是标签语义化，也就是说针对不同的语义设计了很多新的对应的标签。

这些标签有些语义主要和页面布局相关，例如 header/footer/main，有些描述和其本身内容例如 figure，还有一些描述本身和其它内容相关性例如 mark。

- 语义化标签

  - header
  - nav
  - aside
  - main
  - footer
  - article
  - section
  - time
  - mark
  - figure/figurecaption

- ## 功能补充

## 相关链接

- [HTML5 学习笔记简明版（10）：废弃的元素和属性 - tlnshuju - 博客园](https://www.cnblogs.com/tlnshuju/archive/2017/05/09/6832836.html)
- [HTML/New HTML5 Elements - W3C Wiki](https://www.w3.org/wiki/HTML/New_HTML5_Elements)
