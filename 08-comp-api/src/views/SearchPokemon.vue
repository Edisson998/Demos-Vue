<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <!-- En options API se usa el ref para referenciar directo a una prop
    en Compositions API se la puede declarar como una constante normal -->
    <input
      type="number"
      placeholder="Numero del pokemon"
      v-model="pokemonId"
      :ref="txtSearchId"
    />
    <h5>Presione Enter para buscar</h5>
  </form>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const pokemonId = ref(1);
    const txtSearchId = ref();
    onActivated(() =>{
        // txtSearchId.value.focus()
        // txtSearchId.value.select()
    })
    return {
      pokemonId,
      txtSearchId,

      onSubmit: () => {
        //es como usar history en React
        router.push({ name: "pokemon-id", params: { id: pokemonId.value } });
      },
      
    };
  },
};
</script>

<style scoped>
input {
  outline: none;
}
</style>

