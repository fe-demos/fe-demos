function getMiddle(head) {
    let fast = head;
    let slow = head;
    const dumb = { next: head };
    let previous = dumb;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        previous = slow;
        slow = slow.next;
    }
    return slow;
}

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

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
    const middleNode = getMiddle(head);
    const middleNextNode = middleNode.next;
    const secondHalf = reverseList(middleNode);

    let previous = { next: head };
    let current1 = head;
    let current2 = secondHalf;

    while (current2 !== null) {
        if (current1.val !== current2.val) return false;

        previous = current1;
        current1 = current1.next;
        current2 = current2.next;
    }

    // 1 2 3
    // 1 2 3 4
    if (current1 === null) {
        previous.next = reverseList(secondHalf).next;
    } else {
        previous.next = reverseList(secondHalf);
    }

    console.log(head);
    return true;
}
