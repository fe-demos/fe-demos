# DOCTYPE - 文档类型

格式：

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
- 当没有 doctype 声明时，浏览器采用怪异模式渲染方式，多数浏览器会在开发工具中给出警告

## 在 doctype 方面和 HTML4 的区别

HTML4 基于 SGML(Standard Generalized Markup Language)，需要引用对应的 dtd 文件，HTML5 没有基于 SGML，不需要

## 渲染模式

- 标准模式：使用 W3C 的 HTML 和 CSS 标准渲染
- 怪异模式：模仿早期浏览器 Navigator 4 和 IE5 渲染
- 接近标准模式：标准模式 + 少量怪异模式行为

当一个 html 没有声明 doctype 的时候就是以 quirk 模式渲染。

## JS 判断当前采用哪种渲染模式

```javascript
document.compatMode === 'CSS1Compat' ? 'Standards' : 'Quirks';
```

document.compatMode 有两个值：`CSS1Compat` 和 `BackCompat`

## 参考链接

- ["html5 semantic" | Can I use](https://caniuse.com/?search=html5%20semantic)
- [HTML <!DOCTYPE> 声明 | W3CSchool](https://www.w3school.com.cn/tags/tag_doctype.asp)
- [怪异模式和标准模式 - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [How to tell if a browser is in "quirks" mode? | Stackoverflow](https://stackoverflow.com/questions/627097/how-to-tell-if-a-browser-is-in-quirks-mode)
