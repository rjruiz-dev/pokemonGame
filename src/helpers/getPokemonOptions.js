// funcion para crear un arreglo de pokemons
const getPokemons = () => {
    // obtener los pokemons
    const pokemonsArr = Array.from( Array(650) ) // porque de esta manera? Array(650) crea un arr de 650 pos vacias y Array.from crea un arr basado en arr de 650 
    // console.log(pokemonsArr);

    // barrer cada posicion y colocarle su valor respecto a su posicion
    // .map sirve para barrer cada posicion y tranformarlo
    return pokemonsArr.map( (_, index ) => index + 1) // el primer arg no me interesa ( _, )
}

const getPokemonsOptions = () => {
    
    // console.log( getPokemons()); 
    
    // tomar el arreglo y mezclarlo
    // .sort() ordenar de manera aleatoria
    // - 0.5 obtiene num positivos y num negativos 
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    // console.log(mixedPokemons);
    
    // mandamos 4 argumentos por parametro, podmeos usar destructuracion para los param
    getPokemonNames( mixedPokemons.splice(0,4) ) // splice corta el areglo de la pos 0 hasta el 4
}

// funcion para saber los nombres de los primeros 4 pokemons (destructuracion de los 4 a,b,c,d)
// obtener el nombre del pokemon de manera asincrona
const getPokemonNames = ( [a,b,c,d] = [] ) => {
    console.log(pokemons);
 }

// getPokemonsOptions es la unica funcion a exportar
export default getPokemonsOptions;