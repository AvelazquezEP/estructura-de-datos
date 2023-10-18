class queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    enqueue(data) {
        this.items[this.end] = data;
        this.end++;
    }

    dequeue() {
        if (this.front === this.end) {
            return null;
        }

        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
    }

    getSize() {
        return this.end - this.front;
    }

    isEmpty() {
        return this.getSize() === 0;
    }

    peek() {
        if (this.getSize() === 0) return null;
        return this.items[this.front];
    }

    print() {
        if (this.getSize() === 0) return null;
        let result = '';

        for (let i = this.front; i < this.end; i++) {
            result += this.items[i] + ' ';
        }

        return result;
    }
}

const queue = new queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);