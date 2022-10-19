<template>
  <h1>Custom Layout!</h1>
  <Content />
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("hello world");
});
</script>

<style>
/* h1 {
  color: red;
} */
</style>
