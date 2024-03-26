// 模仿 Vue 的模板，写一个字符串模版渲染函数 render。支持{{ 表达式 }}语法，例如：
const data = {
    name: 'xiaoming',
    age: 20,
    info: {
        address: 'chengdu',
    },
};

const template =
    '我叫{{ name }}, 家住{{ info.address }}, 今年{{ age }}岁了，明年就{{ age + 1 }}岁了。';

function render(template, data) {
    with (data) {
        template = template.replaceAll(/\{\{([\s\S]*?)\}\}/g, '${$1}');
        console.log(template);
        return eval(`\`${template}\``);
    }
}

console.log(render(template, data));
