<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import VisionComponent from "../components/VisionComponent.vue";
</script>

<template>
  <HeaderComponent />
  <body class="page-container">
    <div class="button-block">
      <button class="fancyButton">Ajouter un nouvelle idée</button>
    </div>
    <VisionComponent/>
  </body>
</template>

<style scoped>
.button-block {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
