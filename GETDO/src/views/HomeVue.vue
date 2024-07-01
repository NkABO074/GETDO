<script setup>
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import TaskComponent from "../components/TaskComponent.vue";

const show_popup = ref(false);
show_popup.value = false;
</script>

<template>
  <HeaderComponent />
  <body class="page-container">
    <!-- <PopUpFormTaskComponent/> -->
    <div class="popup-content" v-if="show_popup">
      <form class="popup-content-form">
        <label for="task_name">Nom de la tâche</label>
        <input
          class="generic-input-fields"
          type="text"
          name=""
          id="task_name"
        />
        <label for="task_desc">Description de la tâche</label>
        <textarea
          name=""
          class="generic-input-fields"
          id="task_desc"
        ></textarea>
        <hr />
        <div class="priority-content">
          <p>priorité de la tâche:</p>
          <label for="light">faible</label>
          <input type="radio" name="" id="light" />

          <label for="medium">moyenne</label>
          <input type="radio" name="" id="medium" />

          <label for="heavy">haute</label>
          <input type="radio" name="" id="heavy" />

          <label for="phat">élevé</label>
          <input type="radio" name="" id="phat" />
        </div>
        <hr />
        <div class="date-content">
          <label for="date">date d'échéance </label>
          <input class="generic-input-fields" type="date" name="" id="date" />
        </div>
        <hr />
        <button class="fancyButton">Enregistré</button>
      </form>
    </div>
    <!-- <PopUpFormTaskComponent/> -->

    <div class="task-search">
      <input type="search" class="input-fields" name="search" id="search" />
      <button class="fancyButton research-button">
        <font-awesome-icon icon="magnifying-glass" />
      </button>
      <button class="fancyButton" @click="show_popup = true">
        Crée une nouvelle tâche
      </button>
    </div>
    <TaskComponent />
  </body>
</template>

<style scoped>
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
