# DOCTYPE - 文档类型

格式：

<https://www.w3school.com.cn/tags/tag_doctype.asp>

```html
HTML 5 版本声明
<!DOCTYPE html>

XHTML 1.0 严格版声明
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

XHTML 1.0 框架版声明
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">

XHTML 1.0 过渡版声明
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

HTML 4.01 严格版声明
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

HTML 4.01 框架版声明
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

HTML 4.01 过渡版声明
```

- 它不是标签，是指令
- 大小写不敏感

### 还在使用 HTML4 的网站

主要是一些老旧网站像[吾爱破解](https://www.52pojie.cn/)，银行网站例如[农业银行](https://www.abchina.com/cn/) 和[中国银行](https://www.boc.cn/)，令人意外的是政府网站基本上没看大还用 HTML4 的。

### 渲染模式

- 标准模式：使用 w3c 的 HTML 和 CSS 标准渲染
- 怪异模式：模仿早期浏览器 Navigator 4 和 IE5 渲染
- 接近标准模式：标准模式 + 少量怪异模式行为

当一个 html 没有声明 doctype 的时候就是以 quirk 模式渲染。

### 和 HTML4 的区别

- HTML4 基于 SGML(standard generalized markup language)，需要引用对应的 dtd 文件，HTML5 没有基于 SGML，不需要
- HTML5 移除了 frameset 支持，新增了很多新特性
  - 新标签和废弃部分标签（主要是哪些文本样式标签例如 font)，参考：<https://blog.csdn.net/lizhengxv/article/details/79443730>
  - 多媒体和绘图能力
  - 本地缓存
  - 离线缓存
  - 地理

### JS 判断当前处理哪种渲染模式

```javascript
document.compatMode === 'CSS1Compat' ? 'Standards' : 'Quirks';
```

document.compatMode 优两个值：`CSS1Compat` 和 `BackCompat`

当没有 doctype 声明时 chrome 和 firefox 都是用后者。
