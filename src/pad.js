const _ = require("lodash");

const nums = [657, 122, 3245, 345, 99, 18];

nums.forEach( e => {

    console.log(_.padStart(e.toString(), 20, '.'));
});
