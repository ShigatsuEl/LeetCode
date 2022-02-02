/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    for (let i = 0; i < s.length; i++){              //Iterating through the string
        if (s[i] === '?'){                           //If a '?' is encountered
            let rep = '';
            if (s[i-1] !== 'a' && s[i+1] !== 'a') rep = 'a';       //determine the replacement
            else if (s[i-1] !== 'b' && s[i+1] !== 'b') rep = 'b';
            else rep = 'c';
            s = s.slice(0,i)+rep+s.slice(i+1);                    //and replace in string
        }
    }
    return s;        //return modified string
};