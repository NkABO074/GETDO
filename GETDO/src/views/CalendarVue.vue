<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />

  <VCalendar
    is-dark="system"
    title-position="right"
    :color="selectedColor"
    v-model="date"
    expanded
  />
  
</template>

<style scoped></style>
