<script setup></script>

<template>
  <body>
    <div class="bord">
      <div class="dropdown">
        <img
          src="../assets/images/bg-img.jpg"
          alt="Cinque Terre"
          width="200"
          height="100"
        />
        <div class="dropdown-content">
          <img
            src="../assets/images/bg-img.jpg"
            alt="Cinque Terre"
            width="320"
            height="220"
          />
          <div class="desc">Lorem Ipsum</div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.button-block {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bord {
  width: 100vw;
  height: 100%;
  margin: 10px;
}

img {
  border-radius: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  border-radius: 20px;
  display: none;
  position: absolute;
  background-color: var(--box-bg-color);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.desc {
  background-color: var(--box-bg-color);
  color: var(--default-text-color);
  padding: 15px;
  text-align: center;
  }

</style>