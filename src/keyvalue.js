const _ = require("lodash");

const p = {age: 24, name: "Rebecca", occupation: "teacher"};

const keys = _.keys(p);
console.log(keys);

const values = _.values(p);
console.log(values);

const q = { 
    age: 10,
    name: {
        firstname: 'first',
        lastname: 'last'
    }
}

const v = _.values(q);

console.log(JSON.stringify(v));
