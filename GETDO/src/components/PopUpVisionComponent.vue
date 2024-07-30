<script setup>
import { defineProps, defineEmits } from "vue";

const props_vision = defineProps({
  is_open_vision: { type: Boolean, default: false },
});
const emit_vison = defineEmits(["close"]);

/**
 * close the formulaire...
 */
const closeForm = () => {
  emit_vison("close");
};
</script>

<template>
  <!-- <PopUpFormTaskComponent/> -->
  <div class="popup_mask" v-if="is_open_vision">
    <div class="popup-content">
      <button class="close_button" @click="closeForm">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <form class="popup-content-form">
        <label for="task_name">Nom de la vision</label>
        <input
          class="generic-input-fields task_nomination"
          type="text"
          name=""
          id="task_name"
        />
        <label for="task_desc">Description</label>
        <textarea
          name=""
          class="generic-input-fields task_description"
          id="task_desc"
        ></textarea>

        <label for="file">Ajouter une image</label>
        <input type="file" name="img" id="file" />

        <hr />
        <button class="fancyButton" @click="closeForm">Enregistré</button>
      </form>
    </div>
  </div>
  <!-- <PopUpFormTaskComponent/> -->
</template>

<style scoped>
/* popup */
.task_nomination {
  margin-bottom: 7px;
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
  z-index: 100000;
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
/* --- */

@media (max-width: 768px) {
  .popup-content {
    font-size: 14px;
  }
  .popup-content-form {
    padding: 15px;
  }
}
</style>
