// importar axios
import axios from 'axios'

// base de url constante
const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

// export default = exportacion con nombre
export default pokemonApi