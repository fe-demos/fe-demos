function findCloseTagIndex(html: string, openTag: string, closeTag: string) {
    const tagRegexp = new RegExp(`${openTag}|${closeTag}`, 'g');
    let match = tagRegexp.exec(html);
    let openTagCount = 0;
    let closeTagCount = 0;
    while (match) {
        if (match[0].includes('/')) {
            closeTagCount++;
        } else {
            openTagCount++;
        }

        if (closeTagCount === openTagCount) {
            return match.index;
        }
        match = tagRegexp.exec(html);
    }
    return -1;
}

const input = '<div><div>6</div><h1> Title </h1><p>Some description. </p></div>';

function parseHtml(html: string): any {
    const elements = [];
    const openTagRegexp = /^<(\w+)>/;

    while (html.length) {
        const match = html.match(openTagRegexp);
        if (match) {
            const openTag = match[0];
            const tagName = match[1];
            const closeTag = `</${tagName}>`;
            // 需要考虑子节点标签和父标签相同的情况，所以不能 closeTagIndex = html.indexOf(closeTag)
            const closeTagIndex = findCloseTagIndex(html, openTag, closeTag);
            const childrenHtml = html.slice(openTag.length, closeTagIndex);
            // console.log({
            //     openTag,
            //     closeTag,
            //     childrenHtml,
            // });
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
console.log(JSON.stringify(parseHtml(input), null, 4));
// {
//     "tagName": "div",
//     "children": [
//         {
//             "tagName": "div",
//             "children": [
//                 "6"
//             ]
//         },
//         {
//             "tagName": "h1",
//             "children": [
//                 "Title"
//             ]
//         },
//         {
//             "tagName": "p",
//             "children": [
//                 "Some description."
//             ]
//         }
//     ]
// }
