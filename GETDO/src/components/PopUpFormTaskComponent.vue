<script setup></script>

<template>
  <div class="popup-content">
    <form class="popup-content-form">
      <label for="task_name">Nom de la tâche</label>
      <input class="generic-input-fields" type="text" name="" id="task_name" />
      <label for="task_desc">Description de la tâche</label>
      <textarea name="" class="generic-input-fields" id="task_desc"></textarea>

      <p>priorité de la tâche:</p>

      <label for="light">faible</label>
      <input type="radio" name="" id="light" />
      <label for="medium">moyenne</label>
      <input type="radio" name="" id="medium" />

      <label for="heavy">haute</label>
      <input type="radio" name="" id="heavy" />

      <label for="phat">élevé</label>
      <input type="radio" name="" id="phat" />
    </form>
  </div>
</template>

<style scoped>
.popup-content {
  font-size: 14px;
  background-color: var(--box-bg-color);
  border-radius: 20px;
  width: 50vw;
}

.popup-content-form {
  display: flex;
  flex-direction: column;
  padding: 13px;
}
</style>
