<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h4 v-else-if="errorMessage">{{ errorMessage }}</h4>

  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <router-link :to="{ name: 'pokemon-search' }">Regresar</router-link>
  </template>
</template>

<script>
import { watch } from "vue";
// onBeforeRouteLeave es un ciclo de vida del router
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "../composables/usePokemon";
export default {
  setup() {
    const route = useRoute();
    const { isLoading, pokemon, errorMessage, searchPokemon } = usePokemon(
      route.params.id
    );
    // Me sirve para escuchar cada ves que cambia el id
    watch(
      () => route.params.id,
      () => searchPokemon(route.params.id)
    );

    onBeforeRouteLeave(() => {
      const answer = window.confirm("Esta seguro que desea salir?");
      if (!answer) return false;
    });
    return {
      errorMessage,
      isLoading,
      pokemon,
    };
  },
};
</script>

<style>
</style>