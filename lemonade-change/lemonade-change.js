/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let obj = {
        five: 0,
        ten: 0,
        twenty: 0
    }
    
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            obj['five'] += 1;
        } else if (bills[i] === 10) {
            if (obj['five'] === 0) return false;
            else {
                obj['five'] -= 1;
                obj['ten'] += 1;
            }
        } else {
            if (obj['ten'] > 0) {
                if (obj['five'] === 0) return false;
                else {
                    obj['five'] -= 1;
                    obj['ten'] -=1;
                    obj['twenty'] += 1;
                }
            } else {
                if (obj['five'] < 3) return false;
                else {
                    obj['five'] -= 3;
                    obj['twenty'] += 1;
                }
            }
        }
    }
    
    return true;
};