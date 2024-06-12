<script setup>
</script>

<template>
  <div class="page-container ">
    <div class="box-container ">
      <div class="getdo-conatianer">
        <h1>GETDO</h1>
        <h2>A simple task manager</h2>
      </div>
      <div class="form-container">
        <form action="">
          <label for="email_input">Address E-mail</label>
          <input type="email" name="email" id="email_input">

          <label for="pswrd_input">Mot de passe</label>
          <input type="password" name="email" id="pswrd_input">

          <label for="pswrd_confirm_input">Confirmer le mot de passe</label>
          <input type="password" name="email" id="pswrd_confirm_input">
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1, h2, label {
  color: var(--default-text-color);
}

h1 {
  font-size: 72px;
}

h2 {
  margin-top: -60px;
  font-size: 24px;
  font-weight: lighter;
}
.box-container {
  display: flex;
  flex-direction: row;
  background-color: var(--box-bg-color);
  margin: 25px;
  padding: 10px;
  border-radius: 20px;
}

.form-container {
  display: flex;
  flex-direction: column;
}
</style>
