<script setup>
const response = await $fetch("/api/hello");
console.log(response);

// composables
const { sayHello } = useUtils();
sayHello();

// plugins
const { $sayHello } = useNuxtApp();
$sayHello("Yusuf Setiyawan");

// definePageMeta({
//   middleware: "auth",
// });
</script>

<template>
  <div class="container py-3 mx-auto">
    <h1 class="text-teal-500">Main Page</h1>
  </div>
</template>
