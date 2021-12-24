
var MyHashMap = function() {
    this.map = [];
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    if (this.map.some((hash) => hash[0] === key)) {
        this.map = this.map.map((hash) => {
            if (hash[0] === key) return [key, value];
            else return hash;
        })
    } else {
        this.map.push([key, value]);
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let idx = this.map.findIndex((hash) => hash[0] === key);
    if (idx > -1) {
        return this.map[idx][1];
    } else {
        return -1;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let idx = this.map.findIndex((hash) => hash[0] === key);
    if (idx > -1) {
        this.map.splice(idx, 1);
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */