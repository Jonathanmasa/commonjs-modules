// 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.

// 1. Importa la tua funzione da names.js
const createPerson = require('./names');
// stampo risultato a terminale
console.log(createPerson("Jonathan", "Masa"));

// 2. Importa la tua funzione da hobbies.js
const hobbys = require('./hobbies');
// stampo risultato a terminale
console.log(hobbys("hobbyOne", "hobbyTwo", "hobbyThree"));


// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.

function namesHobby() {
    const fullName = createPerson("Jonathan", "Masa");
    const hobbies = hobbys("hobbyOne", "hobbyTwo", "hobbyThree");
    return  { fullName: fullName, hobbies: hobbies };
}
// stampo risultato a terminale
console.log(namesHobby());


