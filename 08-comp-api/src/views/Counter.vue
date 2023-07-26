<template>
  <h1>Counter View</h1>
  <h3>{{ counter }}</h3>

  <button @click="increase">+1</button>
  <button @click="decrease">-1</button>
</template>

<script>
// import { ref } from "vue";
import useCounter from "@/composables/useCounter";
export default {
  name: "Counter",
  props: {},
  emits: [],
  setup() {
    //const counter = ref(0);
    // const increase = () => {
    //     counter.value++
    // }
    // const decrease = () => {
    //      counter.value--
    // }
    // return {
    //   counter,
    //   increase: () =>  counter.value++,
    // decrease: () =>  counter.value--
    // };
    const { counter, increase, decrease } = useCounter();
    return {
      counter,
      increase,
      decrease,
    };
  },
};
</script>

<style>
button {
  margin: 0px 10px;
}
</style>