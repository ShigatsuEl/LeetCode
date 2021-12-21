/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while (students.length !== 0 && sandwiches.length !== 0) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        } else {
            students.push(students.shift());
            if (students.every((student) => student !== sandwiches[0])) {
                return students.length;
            }
        }
    }
    
    return 0;
};