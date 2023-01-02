<template>
    <h1>¿Quién es este pokémon?</h1>

    <!-- img -->
    <!-- el componente se encaga de mostrar la imagen debe saber cuando mostrar y cuando ocultar -->
    <!-- v-bind es lo mismo que : (forma corta) -->
    <PokemonPicture :pokemonId="4" :showPokemon="true"/> <!-- :showPokemon ( permite renderizar de manera condicional, si es true muestra la imagen) -->

    <!-- opciones -->
    <!-- el componente se encaga de listar las opc de pokemon y al hacer click en alguna opc, verificar si es la correcta -->
     <PokemonOptions />

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
    components: { PokemonPicture, PokemonOptions }
}
</script>

