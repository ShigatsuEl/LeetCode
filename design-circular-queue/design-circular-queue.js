/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = [];
    this.maxSize = k;
    this.currentSize = 0;
    this.front = 0;
    this.rear = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.currentSize >= this.maxSize) return false;
    
    this.rear = (++this.rear) % this.maxSize;
    // 원형 큐이므로 push를 하지않고 인덱스를 지정해준다
    this.queue[this.rear] = value;
    this.currentSize++;
    
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.currentSize === 0) return false;
    
    this.front = (++this.front) % this.maxSize;
    this.currentSize--;
    
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.currentSize === 0 ? -1 : this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.currentSize === 0 ? -1 : this.queue[this.rear];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currentSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currentSize === this.maxSize;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */