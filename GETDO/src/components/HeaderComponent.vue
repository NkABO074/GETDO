<script setup></script>

<template>
  <body>
    <header class="container">
      <h1 class="logo">GETDO</h1>
      <div class="container">
        <nav>
          <ul>
            <li>
              <RouterLink to="/home" class="menu-button"
                ><font-awesome-icon
                  icon="bars-progress"
                  style="color: #db5461"
                />
                Tâches</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/visionbord" class="menu-button"
                ><font-awesome-icon icon="border-all" style="color: #db5461" />
                VisionBoard
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/calendar" class="menu-button"
                ><font-awesome-icon icon="calendar" style="color: #db5461" />
                Calendrier</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/dashbord" class="menu-button"
                ><font-awesome-icon icon="chart-line" style="color: #db5461" />
                Dashboard</RouterLink
              >
            </li>
          </ul>
        </nav>
        <div class="user-actions">
          <button class="btn-primary menu-button">
            <font-awesome-icon icon="bell" style="color: #db5461" />0
          </button>
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

nav ul {
  /*--------------------*/
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
  padding: 7px 20px 7px 20px;
  margin: 0 1px 0 1px;
  color: var(--main-color);
  font-size: 14px;
  font-weight: bold;
}

.menu-button:hover {
  background-color: #db546257;
}

.menu-button:active {
  border: 1.5px solid var(--main-color);
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
