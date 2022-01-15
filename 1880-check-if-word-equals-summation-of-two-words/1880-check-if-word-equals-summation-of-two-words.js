/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstNum = "", secondNum = "", targetNum ="";
    
    function convertStrToNum(strWord) {
        let strNum = "";
        for (let i = 0; i < strWord.length; i++) {
            strNum += strWord[i].charCodeAt(0) - 97;
        }
        return strNum;
    }
    
    firstNum = convertStrToNum(firstWord);
    secondNum = convertStrToNum(secondWord);
    targetNum = convertStrToNum(targetWord);
    
    return Number(firstNum) + Number(secondNum) === Number(targetNum) ? true : false;
};