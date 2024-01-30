/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
    let currentA = headA;
    let currentB = headB;

    while (!(currentA === null && currentB === null)) {
        if (currentA === currentB) return currentA;

        if (currentA === null) {
            currentA = headB;
        } else {
            currentA = currentA.next;
        }

        if (currentB === null) {
            currentB = headA;
        } else {
            currentB = currentB.next;
        }
    }

    return null;
}
