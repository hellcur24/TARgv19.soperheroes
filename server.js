let superheroes = require("superheroes");
console.log(superheroes.random());
let supervillains = require("supervillains");
console.log(supervillains.random());

supervillains.all.forEach(supervillain => {
    console.log(supervillain);
});
console.log("--------------");

console.log(`${superheroes.random()} fights ${supervillains.random()}`);
