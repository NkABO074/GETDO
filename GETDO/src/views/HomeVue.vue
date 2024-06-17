<script setup></script>

<template>
  <body class="page-container">
    <input type="search" class="input-fields" name="search" id="search">
    <button class="fancyButton">Recherche</button>
    <div class="task">
      <h2 class="task-title">Lorem Task</h2>
      <div class="task-description">
        <p class="task-description-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint atque blanditiis.</p>
      </div>
      <button class="task-delete base-button">supprimer</button>
      <button class="task-mod base-button">modifier</button>
      <button class="task-validation base-button">terminer</button>
    </div>    
  </body>
</template>

<style scoped>
.base-button {
  border-radius: 10px;
  border-style: none;
  padding: 10px 40px 10px 40px;
  margin:0 7px 0 7px ;
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
  padding: 10px;
  border-radius: 10px;
}

.task {
  background-color: var(--weak-priority-color);
  margin: 1%;
  padding: 1% 1% 1.5% 1%;
  border-radius: 18px;
  border: 1px solid var(--border-color);
}
</style>
