<template>
    <!-- verifica si pokemon tiene un valor -->
    <h1 v-if="!pokemon">Espere por favor...</h1>
    
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        
        <!-- img -->
        <!-- el componente se encaga de mostrar la imagen debe saber cuando mostrar y cuando ocultar -->
        <!-- v-bind es lo mismo que : (forma corta) -->
        <PokemonPicture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon"/> 
        <!-- :showPokemon ( permite renderizar de manera condicional, si es true muestra la imagen) -->

        <!-- opciones -->
        <!-- el componente se encaga de listar las opc de pokemon y al hacer click en alguna opc, verificar si es la correcta -->
        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection="checkAnswer($event)"
        />
        <!--  cuando se selecciona la opc avisar al componente pokemonpicture  -->
        <!--  @selection escuchar el evento selection -->
        <!--  ="checkAnswer" sin parentesis cuando no tiene argumentos -->

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>  
            <!-- Al presionar el boton reinicia el juego -->
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>
        
    </div>
    
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
            pokemonArr: [],
            pokemon: null, // este es el pokemon q va a tener el id y el nombre
            showPokemon: false, // para mostrar el pokemon al seleccionar la opc
            showAnswer: false, // para mostrar 
            message: '' // el msj
        }
    },
    methods: {
        async mixPokemonArray() { // es decir espera a q getPokemonOptions se resuelva y lo almacenas en pokemonArr
            console.log('dentro de mixPokemonArray');
            // getPokemonOptions() es una promesa esperar a q se resuelva 
            this.pokemonArr = await getPokemonOptions()
            console.log(this.pokemonArr);

            // pokemons de 0 a 3 opc
            // Math del obj global windows
            // floor redondear y quitar los decimales
            // Math.random generar num aleatorio
            // *4 para que este entre 0 y 3
            const rndInt = Math.floor( Math.random() * 4 )
            // console.log(rndInt);

            // this.pokemon el pokemon que la persona tenia q adivinar
            this.pokemon = this.pokemonArr[ rndInt ]
                      
        },
        //  this.pokemon = selectedId la persona adivino correctamente
        checkAnswer( selectedId ) {
             console.log('dentro de checkAnswer');
            // selectedId el pokemon seleeccionado
            // console.log('Pokemon Page llamado', selectedId);            
            this.showPokemon = true
            this.showAnswer = true // muestra de manera condicional message y boton

            if ( selectedId === this.pokemon.id ) {
                this.message = `Correcto, ${ this.pokemon.name }`
            } else {
                this.message = `Oops, era ${ this.pokemon.name }`
            }
           
        },
        newGame() {
            console.log('dentro de newGame');   
            // reiniciar todo el juego          

            this.showPokemon = false
            this.showAnswer  = false
            this.pokemonArr  = [] // vacio 
            this.pokemon     = null // es el que mantiene la imagen
            this.mixPokemonArray() // para tener la nueva seleccion de los 4 pokemon
           
        }
    },
    mounted() { // hook mounted: el componente ya esta monstado en pantalla disparar accion
        console.log('mounted');
        this.mixPokemonArray()
    }

}
</script>

