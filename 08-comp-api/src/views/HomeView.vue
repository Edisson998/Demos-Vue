<template>
  <div class="home">
    <h1>Ref vs Reactive</h1>
    <h3>{{ ironman }}</h3>
    <h3>{{ hulk }}</h3>

    <button @click="changeIroman">Cambiar Ironman</button>
    <button @click="changeHulk">Cambiar Hulk</button>

    
    <h3>Hulk:{{ hulkIsAlive }}</h3>
    <button @click="changeStatus">Cambiar estado</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 60 });

    
    const hulkIsAlive = ref(true)

    
    return {
      ironman,
      hulk,     
      hulkIsAlive,

      changeIroman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 35;
      },
      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 50;
      },
      changeStatus:() =>{
        hulkIsAlive.value = !hulkIsAlive.value
    }
    };
  },
};
</script>
