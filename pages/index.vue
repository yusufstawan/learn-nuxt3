<script setup>
// composables
const { sayHello } = useUtils();
sayHello();

// plugins
const { $sayHello } = useNuxtApp();
$sayHello("Yusuf Setiyawan");
</script>

<template>
  <div class="container py-3 mx-auto">
    <h1 class="text-teal-500">Main Page</h1>
  </div>
</template>
