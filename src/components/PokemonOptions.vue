<template>
    
    <div class="options-container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>

</template>

<script>
export default {

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