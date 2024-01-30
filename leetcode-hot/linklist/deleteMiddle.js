/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteMiddle(head) {
    let fast = head;
    let slow = head;
    const dumb = { next: head };
    let previous = dumb;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        previous = slow;
        slow = slow.next;
    }

    const middle = slow;

    previous.next = middle.next;
    return dumb.next;
}
