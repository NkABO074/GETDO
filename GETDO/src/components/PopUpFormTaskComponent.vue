<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({ is_open: { type: Boolean, default: false } });
const emit = defineEmits(["close"]);

const close = () => {
  emit("close");
};
</script>

<template>
  <!-- <PopUpFormTaskComponent/> -->
  <div class="popup_mask" v-if="is_open">
    <div class="popup-content">
      <button class="close_button" @click="close">
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
        <button class="fancyButton" @click="close">Enregistré</button>
      </form>
    </div>
  </div>
  <!-- <PopUpFormTaskComponent/> -->
</template>

<style scoped>
.popup_mask {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  margin-top: -20px;
  /* top: 0;
  left: 0; */
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
  max-width: 90%;
}

.popup-content-form {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 512px;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  .popup-content {
    font-size: 14px;
  }
  .popup-content-form {
    padding: 15px;
  }
}
</style>
