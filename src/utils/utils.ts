/**
 * Stack
 */
class Stack {
    items: Array<any>;
    constructor() {
        this.items = []
    }
    push(ele: any) {
        this.items.push(ele);
    }
    pop() {
        this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString())
    }
}

let s = new Stack();
s.push(1);
s.print();