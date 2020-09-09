let superheroes = require("superheroes");
console.log(superheroes.random());

superheroes.all.forEach(hero => {
    console.log(hero);
});

//console.log(superheroes.all);