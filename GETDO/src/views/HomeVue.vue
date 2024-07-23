<script setup>
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import TaskComponent from "../components/TaskComponent.vue";

const popup = ref(false);

/**
 * open the popup...
 */
function openPopup() {
  popup.value = !popup.value;
  console.debug(popup.value);
}
</script>

<template>
  <HeaderComponent />
  <body class="page-container">
    
    <!-- <PopUpFormTaskComponent/> -->
    <div class="popup_mask" v-if="popup">
      <div class="popup-content">
        <button class="close_button" @click="openPopup">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
        <form class="popup-content-form">
          <label for="task_name">Nom de la tâche</label>
          <input
            class="generic-input-fields task_nomination"
            type="text"
            name=""
            id="task_name"
          />
          <label for="task_desc">Description de la tâche</label>
          <textarea
            name=""
            class="generic-input-fields task_description"
            id="task_desc"
          ></textarea>
          
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
          <button class="fancyButton" @click="openPopup">Enregistré</button>
        </form>
      </div>
    </div>
    <!-- <PopUpFormTaskComponent/> -->

    <div class="task-search">
      <input type="search" class="input-fields" name="search" id="search" />
      <button class="fancyButton research-button">
        <font-awesome-icon icon="magnifying-glass" />
      </button>
      <button class="fancyButton" @click="openPopup">
        <font-awesome-icon icon="plus" /> Crée une nouvelle tâche
      </button>
    </div>
    <TaskComponent />
  </body>
</template>

<style scoped>
.task_nomination {
  margin-bottom: 7px
}

.task_description {
  height: 200px;
}

.popup_mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  margin-top: -20px;
}
.close_button {
  background-color: rgb(138, 0, 0);
  width: 32px;
  height: 32px;
  border-radius: 20px;
  border: 1px solid rgb(78, 0, 0);
  text-align: center;
}

.popup-content {
  position: fixed;
  display: flex;
  font-size: 12px;
  background-color: var(--box-bg-color);
  border-radius: 24px;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.popup-content-form {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 512px;
  margin-bottom: 16px;
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
