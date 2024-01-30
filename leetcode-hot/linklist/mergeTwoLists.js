/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    const dumb = { next: null };
    let tail = dumb;
    let current1 = list1;
    let current2 = list2;

    while (current1 !== null && current2 !== null) {
        let minNode;
        if (current1.val < current2.val) {
            minNode = current1;
            current1 = current1.next;
        } else {
            minNode = current2;
            current2 = current2.next;
        }

        tail.next = minNode;
        tail = minNode;
    }

    const rest = current1 === null ? current2 : current1;
    tail.next = rest;
    return dumb.next;
}
