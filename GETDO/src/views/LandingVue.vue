<script setup></script>

<template>
  <div class="page-container">
    <div class="greetings-contain">
      <div class="title-container">
        <h1>GETDO</h1>
        <h2>A simple task manager</h2>
      </div>
      <div class="button-container">
        <RouterLink class="fancyButton" to="/inscription">S'inscrire</RouterLink>
        <RouterLink class="fancyButton" to="/connection">Se connecter</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  background-image: url("../assets/images/bg-img.jpg");
  height: 100vh;
  width: 100%;
}

.greetings-contain {
  height: 100vh;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 144px;
  margin-top: -10px;
  margin-bottom: -10px;
  color: var(--clear-default);
}

h2 {
  margin-top: -10px;
  font-size: 64px;
  font-weight: 100;
  color: var(--clear-default);
}

/* Smol screen */
@media (max-width: 767px) {
  h1 {
    font-size: 8vw; 
  }
  
  h2 {
    font-size: 4vw; 
  }
}

</style>
