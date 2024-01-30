/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (head === null || head.next === null) return head;

    let previous = head;
    let current = head.next;

    while (current !== null) {
        const { next } = current;
        current.next = previous;
        previous = current;
        current = next;
    }
    head.next = null;
    return previous;
}
