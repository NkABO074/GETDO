<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import TaskComponent from "../components/TaskComponent.vue";
</script>

<template>
  <HeaderComponent />
  <body class="page-container">
    <div class="task-search">
      <input type="search" class="input-fields" name="search" id="search" />
      <button class="fancyButton research-button">
        <font-awesome-icon icon="magnifying-glass" />
      </button>
      <button class="fancyButton">Crée une nouvelle tâche</button>
    </div>
    <TaskComponent />
  </body>
</template>

<style scoped>
.research-button {
  padding: 5px;
  border-radius: 5px;
  margin-left: 0px;
}

.task-search {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 768px) {
  .task-search {
    flex-direction: column;
    align-items: flex-start;
  }

  .base-button {
    padding: 8px 20px;
    margin: 5px 0;
  }
}
</style>
