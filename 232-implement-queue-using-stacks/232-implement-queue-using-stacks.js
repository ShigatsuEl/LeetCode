
var MyQueue = function() {
  this.front = [];
  this.back = [];    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.back.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (!this.front.length) {
        while (this.back.length) { // move back to front
            this.front.push(this.back.pop());
        }
    }
    return this.front.pop();    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (!this.front.length) {
        while (this.back.length) { // move back to front
            this.front.push(this.back.pop());
        }
    }
    return this.front[this.front.length - 1];    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.front.length && !this.back.length;    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */