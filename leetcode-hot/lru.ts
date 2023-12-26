interface LinkListNode {
    key: number | null;
    value: number | null;
    pre: LinkListNode;
    next: LinkListNode | null;
}

class LRUCache {
    private map: Map<number, LinkListNode> = new Map();
    private doubleLinkList: LinkListNode;

    constructor(private capacity: number) {
        // 越靠近头部节点越新
        this.doubleLinkList = {
            key: null,
            value: null,
            // 始终指向尾结点，也就是最旧的节点
            pre: this.doubleLinkList,
            next: null,
        };
    }

    private moveToFront(existed: boolean, node: LinkListNode) {
        // 如果已经存在，移动到头部
        if (existed) {
            // 已经是最新节点不需要移动
            if (node === this.doubleLinkList.next) return;

            // 移动最后一个节点需要更新尾结点
            if (node.next === null) {
                this.doubleLinkList.pre = node.pre;
            }

            node.pre.next = node.next;

            if (node.next) {
                node.next.pre = node.pre;
            }

            node.next = this.doubleLinkList.next;
            node.pre = this.doubleLinkList;
        } else {
            // 插到头部时只有当前链表为空时需要更新尾结点
            if (this.doubleLinkList.next === null) {
                this.doubleLinkList.pre = node;
            }
        }

        if (this.doubleLinkList.next) {
            this.doubleLinkList.next.pre = node;
        }
        this.doubleLinkList.next = node;
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1;

        const existedNode = this.map.get(key)!;
        this.moveToFront(true, existedNode);
        return existedNode?.value!;
    }

    put(key: number, value: number): void {
        // 满了需要先删除最旧的节点
        if (this.map.size === this.capacity && !this.map.has(key)) {
            const oldest = this.doubleLinkList.pre;
            this.doubleLinkList.pre = oldest.pre;
            oldest.pre.next = null;
            this.map.delete(oldest.key!);
        }

        const existedNode = this.map.get(key)!;
        if (existedNode) {
            existedNode.value = value;
        }

        const node = existedNode ?? {
            value,
            key,
            pre: this.doubleLinkList,
            next: this.doubleLinkList.next,
        };
        this.moveToFront(existedNode !== undefined, node);

        this.map.set(key, node);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const cache = new LRUCache(2);
console.log(cache.get(2));
cache.put(2, 6);
console.log(cache.get(1));
cache.put(1, 5);
cache.put(1, 2);
console.log(cache.get(1));
console.log(cache.get(2));
