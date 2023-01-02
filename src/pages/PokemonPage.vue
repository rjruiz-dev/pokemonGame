<template>
    <h1>¿Quién es este pokémon?</h1>

    <!-- img -->
    <!-- el componente se encaga de mostrar la imagen debe saber cuando mostrar y cuando ocultar -->
    <!-- v-bind es lo mismo que : (forma corta) -->
    <PokemonPicture :pokemonId="4" :showPokemon="true"/> <!-- :showPokemon ( permite renderizar de manera condicional, si es true muestra la imagen) -->

    <!-- opciones -->
    <!-- el componente se encaga de listar las opc de pokemon y al hacer click en alguna opc, verificar si es la correcta -->
     <PokemonOptions :pokemons="pokemonArr"/>
    <!--  cuando se selecciona la opc avisar al componente pokemonpicture  -->

</template>

<script>
// ../components/PokemonPicture.vue usar @/components
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

// importar el archivo
import getPokemonOptions from '@/helpers/getPokemonOptions'

// mando a llamar la funcion
console.log(getPokemonOptions());

export default {    
    components: { PokemonPicture, PokemonOptions },

    // data que el componente va a manejar es un metodo reactivo esta pedientede cualquier cambio, vuelve a renderizar
    data() {
        return {
            pokemonArr: []

        }
    },
    methods: {
        async mixPokemonArray() { // es decir espera a q getPokemonOptions se resuelva y lo almacenas en pokemonArr
            // getPokemonOptions() es una promesa esperar a q se resuelva 
            this.pokemonArr = await getPokemonOptions()
            // console.log(this.pokemonArr);
        }
    },
    mounted() { // hook mounted: el componente ya esta monstado en pantalla disparar accion
        console.log('mounted');
        this.mixPokemonArray()
    }

}
</script>

