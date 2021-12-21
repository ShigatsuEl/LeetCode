/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let result = [];
    for (let email of emails) {
        email = email.split("@");
        let [localName, domainName] = email;
        
        for (let i = 0; i < localName.length; i++) {
            if (localName[i] === '.') localName = localName.replace(".", "");
            else if (localName[i] === '+') {
                localName = localName.split("+")[0];
                break;
            }
        }
        
        email = localName + '@' + domainName;
        
        if (!result.includes(email)) result.push(email);
    }
    
    return result.length;
};