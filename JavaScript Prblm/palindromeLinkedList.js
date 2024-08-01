/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let orginal=copy= "";
    let node = head;

    while(node!=null) {
        orginal = `${orginal}${node.val}`;
        copy = `${node.val}${copy}`;
        node = node.next
    }

    return orginal === copy
};