<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div class="Main">Custom Page</div>

  <IconsMoon />

  <!-- assets folder -->
  <img src="@/assets/1.png" alt="Asset images" />
  <!-- public folder -->
  <img src="/1.png" alt="Asset images" />
</template>
