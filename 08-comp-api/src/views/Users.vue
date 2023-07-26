<template>
  <h2 v-if="isLoading">Espere por favor...</h2>
  <h2 v-else>Usuarios</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li
        v-for="{ first_name, last_name, avatar, id, email } in users"
        :key="id"
      >
        <h4>{{ first_name }} {{ last_name }}</h4>
        <img :src="avatar" :alt="first_name" />
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>
  <button @click="lastPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{ currentPage }}</span>
</template>

<script>
import useUsers from "@/composables/useUser";
export default {
  setup() {
    const { isLoading, errorMessage, users, currentPage, nextPage, lastPage } =
      useUsers();
    return {
      isLoading,
      errorMessage,
      users,
      currentPage,
      nextPage,
      lastPage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
button {
  margin: 0px 10px;
}
li {
  display: inline-block;
  margin: 0px 10px;
  width: 200px; /* Ajusta el ancho deseado para los elementos li */
  height: 200px;
}

li img {
  width: 50%;
  height: 50%;
  object-fit: cover;
}
</style>