// // Métodos en Java Script
// const car = {
//     make: "Tesla",
//     model: "Model s",
//     year: "2021",
//     getDescription () {
//     return `This car is a ${this.year} ${this.make} ${this.model}`;
//     },

//     updateModel: function(newModel){
//         this.model = newModel;
//         return `The model has been updated to ${this.model}`
//     }
// };
// console.log(car.getDescription()) // las puedo llamar luego
// console.log(car.updateModel("model x"))

// // Métodos de Number
// let num = 123.4324322;
// const num2 = 10;
// console.log(num, num2, num.toFixed(2), num2.toString())
// console.log(num.toFixed(3) + num2.toString())
// // toFixed(x) // redondea y convierte de text. string() pasa un numero a string

// // Métodos de string
// let greeting = "Hello World"
// console.log(greeting.toUpperCase())
// // .toUpperCase(), toLoweCase(), charAt(n), includes(cadena), subsreing(inicio,fin), replace(viejo,nuevo)
// console.log(greeting.toLowerCase())
// console.log(greeting.charAt(2)) // devuelve el valor en la posicion
// console.log(greeting.includes("a")) // Busca y devuelve un booleano
// console.log(greeting.substring(2,5)) // devuelve un subestring en el rago establecido
// console.log(greeting.replace("He", "Hola")) // Cambia y muestra el string

// // typeof
// const a = [1, 2];
// console.log(Array.isArray(a)); // asi se averigua si es un array directamente
// console.log(typeof(a))

// // Arrays
// let numbers = [1, 2, 4, "HOla", , null, undefined, Object]  //acepta cualquier tipo de datos
// console.log(numbers)

// numbers.push(1)  // añade un elemento al final del arreglo
// console.log(numbers)
// console.log(typeof(numbers[8]))
// numbers.unshift(0); //agrega al principio
// console.log(numbers)


// let doubled = numbers.map(num => num*2); // aplica una funcio a cada elemento, y devuelve un nuevo array
// console.log(doubled)

// numbers.pop()  //elimina el ultimo
// console.log(numbers)
// numbers.shift();
// console.log(numbers) // elimina el primero

// const evens = numbers.filter(n => n % 2 === 0);  // filtra segun la condicion
// console.log(evens)

// const numberss = [1, 2, 3, 4, 5];
// const sum = numberss.reduce((acc, n) => acc + n, 0);
// console.log(sum)
// // array.reduce((acumulador, elementoActual) => {
// //   return nuevoAcumulador;
// // }, valorInicial);


// numbers.forEach(n => { //recorre cada elemento del array como un for clasico
//     console.log(n)
// })
// const found = numberss.find(n => n > 3); // devuelve el primer elemento que cumpla
// console.log(found)

// console.log(numberss.some(n => n > 4)); // si algun elemento cumple manda true o false de lo contrario

// console.log(numberss.every(n => n > 0));  // evalua si todos cumplen y manda un booleano}

// console.log(numberss)
// console.log(numberss.splice(2, 1)); // devuelve los elemento que elimino o corto
// console.log(numberss)

// console.log(numberss.sort((a, b) => b - a)); // segun defino puede ir en un orden u otro
// console.log(numbers.sort((a, b) => a - b));

// /* RESUYMEN ARRAYS
// Modifican el array
// -push
// -pop
// -shift
// -unshift
// -splice
// -sort
// -reverse

// No modifican
// -map
// -filter
// -reduce
// -slice
// -find
// -some
// -every
// -includes
// */

// /*************************************************
//  * OBJETOS EN JAVASCRIPT – EJEMPLOS COMENTADOS
//  *************************************************/

// /*
//  Un objeto es una colección de pares clave → valor.
//  Se usa para representar una entidad (persona, auto, producto, etc.)
// */

// const user = {
//     // PROPIEDADES (datos)
//     name: "Ana",
//     age: 25,
//     isAdmin: false,

//     // MÉTODO (función dentro de un objeto)
//     greet() {
//         // `this` hace referencia al objeto actual (user)
//         return `Hola, soy ${this.name}`;
//     }
// };

// // ------------------------------------------------
// // ACCEDER A PROPIEDADES
// // ------------------------------------------------
// console.log(user.name);      // "Ana"
// console.log(user["age"]);   // 25

// // ------------------------------------------------
// // MODIFICAR PROPIEDADES
// // ------------------------------------------------
// user.age = 26;               // modifica una propiedad existente
// user.email = "ana@mail.com"; // agrega una nueva propiedad

// // ------------------------------------------------
// // ELIMINAR PROPIEDADES
// // ------------------------------------------------
// delete user.isAdmin;

// // ------------------------------------------------
// // USAR UN MÉTODO
// // ------------------------------------------------
// console.log(user.greet()); // "Hola, soy Ana"

// // ------------------------------------------------
// // OBJETOS ANIDADOS
// // ------------------------------------------------
// const company = {
//     name: "Tech Corp",
//     address: {
//         city: "Madrid",
//         zip: 28001
//     }
// };

// console.log(company.address.city); // "Madrid"

// // ------------------------------------------------
// // DESTRUCTURING (extraer propiedades)
// // ------------------------------------------------
// const { name, age } = user;
// console.log(name); // "Ana"
// console.log(age);  // 26

// // ------------------------------------------------
// // RECORRER UN OBJETO CON for...in
// // ------------------------------------------------
// for (const key in user) {
//     console.log(key, user[key]);
// }
// // key = nombre de la propiedad
// // user[key] = valor de esa propiedad

// // ------------------------------------------------
// // MÉTODOS IMPORTANTES DE Object
// // ------------------------------------------------

// // Object.keys() → devuelve un array con las claves
// console.log(Object.keys(user));
// // ["name", "age", "email", "greet"]

// // Object.values() → devuelve un array con los valores
// console.log(Object.values(user));
// // ["Ana", 26, "ana@mail.com", ƒ]

// // Object.entries() → devuelve pares [clave, valor]
// console.log(Object.entries(user));
// // [["name","Ana"], ["age",26], ["email","ana@mail.com"], ["greet", ƒ]]

// // ------------------------------------------------
// // COPIAR OBJETOS
// // ------------------------------------------------

// // ❌ MAL: copia por referencia
// const refCopy = user;
// refCopy.name = "Laura";
// console.log(user.name); // "Laura" (se modificó el original)

// // ✔ BIEN: copia superficial
// const safeCopy = { ...user };
// safeCopy.name = "Carlos";
// console.log(user.name); // "Laura"
// console.log(safeCopy.name); // "Carlos"

// // ------------------------------------------------
// // COMPARACIÓN DE OBJETOS
// // ------------------------------------------------
// const a = { x: 1 };
// const b = { x: 1 };

// console.log(a === b); // false (distintas referencias)

// // ------------------------------------------------
// // OBJETO CON USO REAL
// // ------------------------------------------------
// const product = {
//     id: 1,
//     name: "Laptop",
//     price: 1000,
//     inStock: true,

//     getPriceWithTax(tax) {
//         return this.price * (1 + tax);
//     }
// };

// console.log(product.getPriceWithTax(0.21)); // 1210

// // ------------------------------------------------
// // RESUMEN MENTAL (en código)
// // ------------------------------------------------
// /*
//  - Objeto = entidad
//  - Claves con significado
//  - Métodos usan `this`
//  - Se pasa por referencia
//  - No se compara por valor
// */


// /*************************************************
//  * SETS EN JAVASCRIPT – EJEMPLOS COMENTADOS
//  *************************************************/

// /*
//  Un Set es una colección de VALORES ÚNICOS.
//  - No permite duplicados
//  - Mantiene el orden de inserción
//  - No usa índices
// */

// const numbers = new Set([1, 2, 2, 3, 4]);

// // ------------------------------------------------
// // VER CONTENIDO DEL SET
// // ------------------------------------------------
// console.log(numbers); 
// // Set(4) { 1, 2, 3, 4 }

// // ------------------------------------------------
// // AGREGAR VALORES
// // ------------------------------------------------
// numbers.add(5);   // agrega un valor
// numbers.add(3);   // no se agrega (duplicado)

// console.log(numbers); 
// // Set(5) { 1, 2, 3, 4, 5 }

// // ------------------------------------------------
// // VERIFICAR SI EXISTE UN VALOR
// // ------------------------------------------------
// console.log(numbers.has(2)); // true
// console.log(numbers.has(10)); // false

// // ------------------------------------------------
// // ELIMINAR UN VALOR
// // ------------------------------------------------
// numbers.delete(1);
// console.log(numbers);
// // Set(4) { 2, 3, 4, 5 }

// // ------------------------------------------------
// // TAMAÑO DEL SET
// // ------------------------------------------------
// console.log(numbers.size); // 4

// // ------------------------------------------------
// // ELIMINAR TODO
// // ------------------------------------------------
// numbers.clear();
// console.log(numbers.size); // 0

// // ------------------------------------------------
// // SET CON STRINGS
// // ------------------------------------------------
// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("a"); // duplicado

// console.log(letters);
// // Set(2) { "a", "b" }

// // ------------------------------------------------
// // SET CON OBJETOS
// // ------------------------------------------------
// const user1 = { id: 1 };
// const user2 = { id: 1 };

// const usersSet = new Set();
// usersSet.add(user1);
// usersSet.add(user2); // se agrega porque son referencias distintas

// console.log(usersSet.size); // 2

// // ------------------------------------------------
// // RECORRER UN SET
// // ------------------------------------------------
// for (const value of letters) {
//   console.log(value);
// }

// // También con forEach
// letters.forEach(value => {
//   console.log(value);
// });

// // ------------------------------------------------
// // CONVERTIR SET → ARRAY
// // ------------------------------------------------
// const arrayFromSet = [...letters];
// console.log(arrayFromSet); // ["a", "b"]

// // ------------------------------------------------
// // CONVERTIR ARRAY → SET (eliminar duplicados)
// // ------------------------------------------------
// const nums = [1, 2, 2, 3, 3, 4];
// const uniqueNums = new Set(nums);

// console.log([...uniqueNums]); // [1, 2, 3, 4]

// // ------------------------------------------------
// // USO REAL: eliminar duplicados
// // ------------------------------------------------
// const emails = [
//   "a@mail.com",
//   "b@mail.com",
//   "a@mail.com"
// ];

// const uniqueEmails = [...new Set(emails)];
// console.log(uniqueEmails);

// // ------------------------------------------------
// // COMPARACIÓN CON ARRAY
// // ------------------------------------------------
// /*
//  ❌ Array permite duplicados
//  ✔ Set garantiza unicidad
//  ❌ Set no tiene índices
//  ✔ Set es rápido para búsquedas (.has)
// */

// // ------------------------------------------------
// // RESUMEN MENTAL (en código)
// // ------------------------------------------------
// /*
//  - Set = valores únicos
//  - No índices
//  - Orden de inserción
//  - Búsqueda rápida
//  - Ideal para eliminar duplicados
// */


// /*************************************************
//  * MAPS EN JAVASCRIPT – EJEMPLOS COMENTADOS
//  *************************************************/

// /*
//  Un Map es una colección de pares CLAVE → VALOR.
//  A diferencia de Object:
//  - Las claves pueden ser de CUALQUIER tipo
//  - Mantiene el orden de inserción
//  - Mejor para inserciones / borrados frecuentes
// */

// const userRoles = new Map();

// // ------------------------------------------------
// // AGREGAR ELEMENTOS (.set)
// // ------------------------------------------------
// userRoles.set("admin", true);          // clave string
// userRoles.set("editor", false);        // clave string
// userRoles.set(1, "number key");        // clave number

// // clave objeto
// const user = { id: 1 };
// userRoles.set(user, "object key");

// console.log(userRoles);

// // ------------------------------------------------
// // OBTENER VALORES (.get)
// // ------------------------------------------------
// console.log(userRoles.get("admin")); // true
// console.log(userRoles.get(1));       // "number key"
// console.log(userRoles.get(user));    // "object key"

// // ------------------------------------------------
// // VERIFICAR EXISTENCIA (.has)
// // ------------------------------------------------
// console.log(userRoles.has("editor")); // true
// console.log(userRoles.has("guest"));  // false

// // ------------------------------------------------
// // ELIMINAR ELEMENTOS (.delete)
// // ------------------------------------------------
// userRoles.delete("editor");
// console.log(userRoles.has("editor")); // false

// // ------------------------------------------------
// // TAMAÑO DEL MAP (.size)
// // ------------------------------------------------
// console.log(userRoles.size); // 3

// // ------------------------------------------------
// // ELIMINAR TODO (.clear)
// // ------------------------------------------------
// const tempMap = new Map();
// tempMap.set("a", 1);
// tempMap.set("b", 2);

// tempMap.clear();
// console.log(tempMap.size); // 0

// // ------------------------------------------------
// // RECORRER UN MAP
// // ------------------------------------------------
// for (const [key, value] of userRoles) {
//   console.log(key, value);
// }

// // También con forEach
// userRoles.forEach((value, key) => {
//   console.log(key, value);
// });

// // ------------------------------------------------
// // OBTENER SOLO CLAVES O VALORES
// // ------------------------------------------------
// console.log([...userRoles.keys()]);
// console.log([...userRoles.values()]);

// // ------------------------------------------------
// // CONVERTIR MAP → ARRAY
// // ------------------------------------------------
// const mapToArray = [...userRoles];
// console.log(mapToArray);
// // [[key, value], [key, value]]

// // ------------------------------------------------
// // CONVERTIR ARRAY → MAP
// // ------------------------------------------------
// const entries = [
//   ["name", "Ana"],
//   ["age", 25]
// ];

// const userMap = new Map(entries);
// console.log(userMap.get("name")); // "Ana"

// // ------------------------------------------------
// // MAP VS OBJECT (DIFERENCIA CLAVE)
// // ------------------------------------------------
// const obj = {};
// obj[{}] = "value";

// console.log(obj); 
// // "[object Object]": "value" (colisión de claves)

// const realMap = new Map();
// realMap.set({}, "value");
// console.log(realMap.size); // 1

// // ------------------------------------------------
// // USO REAL: cache
// // ------------------------------------------------
// const cache = new Map();

// function fetchData(key) {
//   if (cache.has(key)) {
//     return cache.get(key); // devuelve cache
//   }

//   const data = `data for ${key}`; // simulación
//   cache.set(key, data);
//   return data;
// }

// console.log(fetchData("users"));
// console.log(fetchData("users")); // cache hit

// // ------------------------------------------------
// // RESUMEN MENTAL (en código)
// // ------------------------------------------------
// /*
//  - Map = diccionario avanzado
//  - Claves de cualquier tipo
//  - Orden garantizado
//  - Mejor rendimiento que Object
//  - Ideal para cache y lookup
// */


// ITERACIONES ESPECIALES
// for of => para arreglos o iterables
const developers = [
    {name: "Antony", language: "js"},
    {name: "Kevin", language: "Java"},
    {name: "Robin", language: "PHP"},
]
for (const developer of developers){
    console.log(`${developer.name} is stilled in ${developer.language}`)
}

// for in : => recorre las claves de un objeto
const teamLider = {name: "Antony", language: "js"}
for (const clave in teamLider) {
    console.log(clave)
    console.log(`${clave}: ${teamLider[clave]}`)
}

// forEach (para arrays)
const coders = [
    {name: "Carlos", cohorte: 1},
    {name: "Milton", cohorte: 2},
    {name: "Juan", cohorte: 3},
]
coders.forEach(coder => {
    console.log(`${coder.name} is coder cohort ${coder.cohorte}`)
    coders.push({name:"Jose", cohorte:4}) // mete cosas pero parece que forEach se queda solo con el original
    console.log(coders)
})




