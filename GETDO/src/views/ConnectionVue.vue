<script setup></script>

<template>
    <div class="page-container">
      <div class="box-container">
        <div class="getdo-conatianer">
          <h1>GETDO</h1>
          <h2>A simple task manager</h2>
        </div>
        <form class="form-container" action="">
          <label for="email_input">Address E-mail</label>
          <input type="email" name="email" id="email_input" class="input-fields"/>

          <label for="pswrd_input">Mot de passe</label>
          <input type="password" name="email" id="pswrd_input" class="input-fields"/>

          <hr>
          <RouterLink to="/home" class="fancyButton"> Se Connecter</RouterLink>
          <hr>
          <RouterLink to="/home" class="fancyButton"> Se connecter avec Google</RouterLink>
        </form>
      </div>
    </div>
</template>

<style scoped>
h1,
h2,
label {
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

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-container {
  display: flex;
  flex-direction: row;
  background-color: var(--box-bg-color);
  margin: 25px;
  border-radius: 40px;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 85vh;
  border: 1px solid var(--border-color);
}

.form-container {
  display: flex;
  flex-direction: column;
  background-color: var(--default-color);
  padding: 30px;
  border-radius: 20px;
}

.getdo-conatianer {
  overflow:hidden;
}

.TOS_indication {
  font-size: 13px;
}
                  
@media (max-width: 767px) {
  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 18px;
    margin-top: -30px;
  }

  .box-container {
    flex-direction: column;
    width: 90%;
    height: auto;
    margin: 15px;
  }

  .form-container {
    padding: 15px;
  }

  input {
    padding: 8px;
  }
}
</style>