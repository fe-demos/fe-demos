/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
    if (head === null || head.next === null) return head;

    let slow = head;
    let current = head.next;

    while (current !== null) {
        if (current.val !== slow.val) {
            slow.next = current;
            slow = current;
        }
        current = current.next;
    }

    slow.next = null;
    return head;
}
