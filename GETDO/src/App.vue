<script setup>
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <header
    class="container"
    v-if="
      !(
        route.path === '/' ||
        route.path === '/connection' ||
        route.path === '/inscription'
      )
    "
  >
    <div class="container dropdown">
      <h1 class="logo">GETDO</h1>
      <nav>
        <ul>
          <li>
            <RouterLink to="/home" class="menu-button">Tâches</RouterLink>
          </li>
          <li>
            <RouterLink to="/visionbord" class="menu-button"
              >VisionBoard
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/calendar" class="menu-button"
              >Calendrier</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/dashbord" class="menu-button"
              >Dashboard</RouterLink
            >
          </li>
        </ul>
      </nav>
      <div class="user-actions">
        <button class="btn-primary menu-button">0</button>
      </div>
      <div class="user-actions">
        <img
          src="../src/assets/images/default-user-icon.jpeg"
          class="btn-secondary menu-button"
        />
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
/* style.css */
header {
  background-color: var(--default-color);
  padding: 15px 0;
  border-bottom: 1px solid var(--main-color);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  color: var(--main-color);
  font-weight: bold;
  padding-right: 25px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.user-actions {
  display: flex;
  align-items: center;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-secondary {
  background-image: url("../src/assets/images/default-user-icon.jpeg");
  width: 24px;
  height: 24px;
  color: #fff;
}

/* Responcive */
@media (min-width: 1024px) {
  .logo {
    font-size: 24px;
  }

  .container {
    flex-wrap: wrap;
  }

  .logo {
    padding-right: 0;
  }

  nav li {
    margin-right: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .logo {
    font-size: 24px;
  }

  .container {
    flex-wrap: wrap;
  }

  .logo {
    padding-right: 0;
  }

  nav li {
    margin-right: 10px;
  }
}
</style>
