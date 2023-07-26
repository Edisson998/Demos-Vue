<template>
  <h2>{{customTitle}}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>

export default {
  name: "Counter",
  props: {
    title: String,
    start: {
        type: Number,
        default: 100,
        // required: true
        validator( value ){
           return value >= 0
        }
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    calculate() {
      return this.counter * this.counter;
    },
    increment(){
        this.counter++;
    },
    decrement(){
        this.counter--;
    }
  },
  computed: {
    squareCounter() {
      console.log("squareCounter");
      return this.counter * this.counter;
    },
    customTitle(){
        return  this.title ? this.title : 'Counter'
    }
  },
};
</script>

<style>
button {
  background-color: green;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3 ease-in-out;
}

button:hover {
  background-color: greenyellow;
  transition: 0.3 ease-in-out;
}
</style>