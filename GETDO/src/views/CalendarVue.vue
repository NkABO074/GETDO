<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
</script>
<template>
  <HeaderComponent/>
    <VDatePicker v-model="date" is-dark="system" title-position="right" expanded/>
</template>
<style scoped></style>