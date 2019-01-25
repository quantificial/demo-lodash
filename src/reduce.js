const _ = require("lodash");

const nums = [4, 5, 3, 2, 1, 7, 6, 8, 9];

const sum = _.reduce(nums, (total, next) => { return total + next });
console.log(sum);

const colours = ["red", "green", "white", "blue", "black"];

const res = _.reduceRight(colours, (next, total) => { return `${total}-${next}` });
console.log(res);

const betterSum = _.reduce(nums, ((acc, next) => { 
    //console.log("inside reduce: " + JSON.stringify(acc))
    return { a: acc.a + next, b: acc.b+1} 
}),
{ a:0, b:0}
)

console.log(JSON.stringify(betterSum))

const average = _.map(betterSum, e => 
    {
        console.log(e);
        return e.a;
    });

console.log(JSON.stringify(average));
