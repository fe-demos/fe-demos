/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (head === null || head.next === null) return head;

    let pre = head;
    let current = head.next;

    while (current !== null) {
        const { next } = current;
        current.next = pre;
        pre = current;
        current = next;
    }
    head.next = null;
    return pre;
}
