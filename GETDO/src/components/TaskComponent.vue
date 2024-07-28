<script setup></script>
<template>
  <div class="task">
    <div class="signal">
      <div class="priority-indicator"></div>
    </div>
    <!--  -->
    <div class="content">
      <h2 class="task-title">Lorem Task</h2>
      <p class="task-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint atque
        blanditiis.
      </p>
      <p class="task-duration">25-05-2024 au 29-05-2024</p>
    </div>
    <!--  -->
    <div class="action">
      <button class="task-delete base-button">
        <font-awesome-icon icon="trash" />
      </button>
      <button class="task-mod base-button">
        <font-awesome-icon icon="pen" />
      </button>
      <button class="task-validation base-button">
        <font-awesome-icon icon="fa-solid fa-check" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.base-button {
  border-radius: 10px;
  border-width: 1px;
  border-color: var(--border-color);
  border-style: solid;
  padding: 5px 20px 5px 20px;
  margin: 0 3.5px 0 3.5px;
  color: var(--clear-default);
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  margin-top: 1%;
}

.base-button:hover {
  border-color: var(--main-color);
  border-width: 1.5px;
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

.priority-indicator {
  background-color: var(--weak-priority-color);
  width: 15px;
  height: 100%;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}

.task-title {
  margin: 7px;
}

.task-description {
  font-size: 12px;
}

.task {
  background-color: var(--box-bg-color);
  margin: 0.5% 5% 0.5% 5%;
  border-radius: 18px;
  border: 1px solid var(--border-color);
  display: flex;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.39);
  justify-content: space-between;
}

.task-duration {
  font-size: 14px;
}

.action {
  display: flex;
  flex-direction: column;
  padding:10px;
  justify-content: space-between
}

.content {
  padding:5px;
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
