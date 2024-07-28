<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
<!-- -->
  <div class="calendar-container">
    <VCalendar
    is-dark="system"
    title-position="right"
    v-model="date"
    expanded
  />
  </div>
  
</template>

<style scoped>
.calendar-container {
  margin: 0.5% 5% 0.5% 5%;
}
</style>
