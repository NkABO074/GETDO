<script setup></script>
<template>
  <div class="task">
    <div class="priority-indicator"><p>Light</p></div>
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
</template>
<style scoped>
.task-delete {
  background-color: #db0505;
}

.task-mod {
  background-color: #083600;
}

.priority-indicator {
  background-color: var(--weak-priority-color);
  width: 42px;
  height: 42px;
  font-size: 11px;
  text-align:center;
  border-radius: 32px;
  display:flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
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
  background-color: var(--box-bg-color);
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


@media only screen and (max-width: 768px) { 
  .base-button {
    padding: 8px 20px; 
    margin: 5px 0;
  }

  .task-description {
    font-size: 12px;
  }

  .task-title,
  .task-duration {
    margin: 5px; 
  }
}
</style>