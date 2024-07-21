<script setup>
const show_popup = ref(false);
show_popup.value = false;
</script>

<template>
  <div class="popup-content" v-if="show_popup">
      <div class="close_button" @click="show_popup = false" >x</div>
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
        <button class="fancyButton" @click="show_popup = false">Enregistré</button>
      </form>
    </div>
</template>

<style scoped>
.popup-content {
  position: fixed;
  font-size: 14px;
  background-color: var(--box-bg-color);
  border-radius: 20px;
  width: 50vw;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.popup-content-form {
  display: flex;
  flex-direction: column;
  padding: 13px;
}
</style>
