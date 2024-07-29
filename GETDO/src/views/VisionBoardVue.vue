<script setup>
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import VisionComponent from "../components/VisionComponent.vue";
import PopUpVisionComponent from "../components/PopUpVisionComponent.vue";

const show_popup_vision = ref(false);
</script>

<template>
  <HeaderComponent />
  <PopUpVisionComponent
    :is_open_vision="show_popup_vision"
    @close="show_popup_vision = false"
  />
  <body class="page-container">
    <div class="button-block">
      <button class="fancyButton" @click="show_popup_vision = true">
        Ajouter un nouvelle idée
      </button>
    </div>
    <div class="vision-content">
      <VisionComponent />
    </div>
  </body>
</template>

<style scoped>
.button-block {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
