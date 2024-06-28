<script setup></script>

<template>
  <body>
  <header class="container">
    <div class="container">
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
          src="../assets/images/default-user-icon.jpeg"
          class="btn-secondary"
          width="42px"
          height="42px"
        />
      </div>
    </div>
  </header>
</body>
</template>

<style scoped>

header {
  background-color: var(--default-color);
  padding: 5px;
  border-bottom: 1px solid var(--main-color);
  margin-bottom: 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
}

.logo {
  display: flex;
  align-items: center;
  color: var(--main-color);
  font-weight: bold;
  padding-right: 25px;
}

nav ul {/*--------------------*/
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
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
  border-radius: 20px;
}

.menu-button {
  background-color: #db546224;
  border-radius: 20px;
  border-style: none;
  padding: 10px 40px 10px 40px;
  margin: 0 10px 0 10px;
  color: var(--main-color);
  font-size: 14px;
  font-weight: bold;
}

@media (max-width: 768px) {
  /* Menu button responcive */
  .menu-button {
    padding: 2px 3px 2px 3px;
    margin: 0 5px 0 5px;
    font-size: 12px;
  }
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
