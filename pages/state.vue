<script setup>
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();
console.log(store);

const counter = useCounter();
</script>

<template>
  <div>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter />
  </div>
</template>
