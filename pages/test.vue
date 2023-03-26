<script setup>
const { data: api } = await useFetch("https://jsonplaceholder.typicode.com/todos/1");
</script>

<template>
  <main>
    <ContentDoc />
    <div>
      {{ api }}
    </div>
  </main>
</template>
