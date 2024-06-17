<script setup></script>

<template>
  <body class="page-container">
    <div class="task-search">
      <input type="search" class="input-fields" name="search" id="search" />
      <button class="fancyButton">Recherche</button>
      <button class="fancyButton">Crée une nouvelle tâche</button>
    </div>
    <div class="task">
      <h2 class="task-title">Lorem Task</h2>
      <div class="task-description">
        <p class="task-description-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint atque
          blanditiis.
        </p>
      </div>
      <p class="task-duration">25-05-2024 au 29-05-2024</p>
      <div class="task-buttons">
        <button class="task-delete base-button">supprimer</button>
        <button class="task-mod base-button">modifier</button>
        <button class="task-validation base-button">terminer</button>
      </div>
    </div>
  </body>
</template>

<style scoped>
.task-search {
  display: flex;
  align-items: center;
  justify-content: center;
}

.base-button {
  border-radius: 10px;
  border-style: none;
  padding: 10px 40px 10px 40px;
  margin: 0 7px 0 7px;
  color: var(--clear-default);
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  margin-top: 1%;
}

.task-delete {
  background-color: #db0505;
}

.task-mod {
  background-color: #083600;
}

.task-validation {
  background-color: #6245c9;
}

.task-description {
  background-color: #00000069;
  padding: 7px;
  border-radius: 10px;
  font-size: 14px;
}

.task {
  background-color: var(--weak-priority-color);
  margin: 1%;
  padding: 1% 1% 1.5% 1%;
  border-radius: 18px;
  border: 1px solid var(--border-color);
}

.task-title {
  margin: 7px;
}

.task-duration {
  margin: 2px 0px -10px 0;
  font-size: 14px;
}
</style>
