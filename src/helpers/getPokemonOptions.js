// import pokemonApi // sino exportamos con export default, al importar debemos poner import {} para extraerlo
import pokemonApi from "@/api/pokemonApi"

// funcion para crear un arreglo de pokemons
const getPokemons = () => {
    // obtener los pokemons
    const pokemonsArr = Array.from( Array(650) ) // porque de esta manera? Array(650) crea un arr de 650 pos vacias y Array.from crea un arr basado en arr de 650 
    // console.log(pokemonsArr);

    // barrer cada posicion y colocarle su valor respecto a su posicion
    // .map sirve para barrer cada posicion y tranformarlo
    return pokemonsArr.map( (_, index ) => index + 1) // el primer arg no me interesa ( _, )
}

const getPokemonsOptions = async() => {
    
    // console.log( getPokemons()); 
    
    // tomar el arreglo y mezclarlo
    // .sort() ordenar de manera aleatoria
    // - 0.5 obtiene num positivos y num negativos 
    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5 )
    // console.log(mixedPokemons);
    
    // mandamos 4 argumentos por parametro, podmeos usar destructuracion para los param
    const pokemons = await getPokemonNames( mixedPokemons.splice(0,4) ) // splice corta el areglo de la pos 0 hasta el 4
    // console.table(pokemons);
    
    return pokemons
}

// funcion para saber los nombres de los primeros 4 pokemons (destructuracion de los 4 a,b,c,d)
// obtener el nombre del pokemon de manera asincrona
const getPokemonNames = async ( [a,b,c,d] = [] ) => {

    //peticion get
    // una manera de realizar la peticion
    // const resp = await pokemonApi.get(`/3`)
    // console.log(resp.data.name, resp.data.id);

    // otra manera realiza las 4 peticiones a,b,c,d de manera simultanea
    const promiseArr = [ // defino las peticiones no las mando a llamar
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
    ]

    // Promise.all dispara un monton de promesas de manera simultanea
    // const resps = await...  es un arreglo usamos desectructuracion 
    const [p1, p2, p3, p4] = await Promise.all( promiseArr ) // espera un arreglo de promesas
    // console.log(resps);

    // retorna un nuevo array con los nombres de los pokemons
    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ]
    
 }

// getPokemonsOptions es la unica funcion a exportar
export default getPokemonsOptions;