const _ = require("lodash");
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 0];

const newItems = _.partition(items, (n) => n % 2);

console.log(newItems);
