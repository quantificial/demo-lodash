const _ = require("lodash");

const p = {age: 24, name: "Rebecca", occupation: "teacher"};

_.forIn(p, (value, key) => {

    console.log(`${key}: ${value}`);
})

