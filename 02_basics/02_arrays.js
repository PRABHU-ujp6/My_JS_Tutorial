const marvel_heros = ["spiderman", 'Ironman', 'Loki', 'Thor']
const dc_heros = ["superman", "Batman", 'Flash', 'Shazam']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// marvel_heros.concat(dc_heros)
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[4,[5,6]]]

const new_another_array = another_array.flat(Infinity)
// console.log(new_another_array);


// console.log(Array.isArray("urmik"));
// console.log(Array.from("urmik"));
// console.log(Array.from({name: "Urmik"})); /// interesting....


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));


