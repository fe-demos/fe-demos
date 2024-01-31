const input = '<div><h1> Title </h1><p>Some description. </p></div>';
function parseHtml(html: string): any {
    const elements = [];
    const openTagRegexp = /^<(\w+)>/;

    while (html.length) {
        const match = html.match(openTagRegexp);
        if (match) {
            const openTag = match[0];
            const tagName = match[1];
            const closeTag = `</${tagName}>`;
            const closeTagIndex = html.indexOf(closeTag);
            const childrenHtml = html.slice(openTag.length, closeTagIndex);
            html = html.slice(closeTagIndex + closeTag.length);
            const children = parseHtml(childrenHtml);
            const element = {
                tagName,
                children: Array.isArray(children) ? children : [children],
            };
            elements.push(element);
        } else {
            const trimmed = html.trim();
            if (trimmed.length !== 0) {
                elements.push(trimmed);
                break;
            }
        }
    }

    if (elements.length === 1) {
        return elements[0];
    }

    if (elements.length > 1) {
        return elements;
    }

    return null;
}
console.log(parseHtml(input));
// {
//     tagName: 'div',
//     children: [
//         {
//             tagName: 'h1',
//             children: ['Title']
//         },
//         {
//             tagName: 'p',
//             children: ['Some description.']
//         }
//     ]
// }
