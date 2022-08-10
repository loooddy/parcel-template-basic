// const { text } = require("express");

console.log("wgg");

async function test(){
    const promise = Promise.resolve(123);
    console.log(await promise);
}
test();