<template>
    
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id"> 
                {{ pokemon.name }}
            </li>
          
        </ul>
    </div>

</template>

<script>
export default {
    // recibo props de pokemonPage
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    
    ul {
        list-style-type: none; /* quita los simbolos del bullet */
    }

    li { /* estilo para los list-item */
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
    }

    li:hover { /* efecto al pasar el mouse por encima */
        background-color: rgba(0, 0, 0, 0.05);
    }

    .options-container { /* ordena y centra */
        display: flex;
        justify-content: center;
    }
</style>