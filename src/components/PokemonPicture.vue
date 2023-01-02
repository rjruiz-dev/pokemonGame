<template>

    <div class="pokemon-container">
        <!-- muestra la silueta del pokemon  -->
        <!-- <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon" class="hidden-pokemon"> -->
        <img :src="imgSrc" alt="pokemon" class="hidden-pokemon"> <!-- no hace falta el this. pq este es el templante del componente -->
        
        <!-- muestra el pokemon -->
        <img v-if="showPokemon" :src="imgSrc" alt="pokemon" class="fade-in">      
    </div>

</template>

<script>

// Number, required
export default {
    // recibimos argumentos mediante las props
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
         showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    }
}
</script>

<!-- el estilo solo se aplica en este componente-->
<style scoped>
    
    .pokemon-container {
        height: 200px;
    }
    img {
        height: 200px;
        position: absolute; /* la 2 img quedan una encima de la otra */
        /* right: 32%; */
        left: 0;        /* para centrar la img */
        right: 0;       /* para centrar la img */
        margin: 0 auto; /* para centrar la img */
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0); /* obtenemos la silueta del pokemon (0) */
    }

</style>