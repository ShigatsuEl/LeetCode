/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        image[i].reverse();
        image[i] = image[i].map((value) => {
            if (value === 1) {
                return 0;
            } else {
                return 1;
            }
        })
    }
    return image;
};