const array = [10, -5, 30, -123, 0, 320, 79, 15];
let res = 0;
const add = [];
for(addArr of array) {
    if(addArr > 0) {
        add.push(addArr)
    }
}
console.log(add)