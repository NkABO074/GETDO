<script setup>
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import TaskComponent from "../components/TaskComponent.vue";
import PopUpFormTaskComponent from "../components/PopUpFormTaskComponent.vue";

const show_popup = ref(false);
</script>

<template>
  <HeaderComponent />
  <body class="page-container">
    <PopUpFormTaskComponent :is_open="show_popup" @close="show_popup = false" />
    <div class="task-search">
      <input type="search" class="input-fields" name="search" id="search" />
      <button class="fancyButton research-button">
        <font-awesome-icon icon="magnifying-glass" />
      </button>
      <button class="fancyButton" @click="show_popup = true">
        <font-awesome-icon icon="plus" /> Crée une nouvelle tâche
      </button>
    </div>
    <TaskComponent />
  </body>
</template>

<style scoped>
.task_nomination {
  margin-bottom: 7px;
}

.task_description {
  height: 200px;
}

.input-fields {
  background-color: var(--default-color);
  border: 1px solid var(--deap-gray);
  padding: 6.5px;
  color: var(--default-text-color);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}

.research-button {
  padding: 7px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  margin-left: 0px;
}

.task-search {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 768px) {
  .task-search {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .base-button {
    padding: 8px 20px;
    margin: 5px 0;
  }
}
</style>
