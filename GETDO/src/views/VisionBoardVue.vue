<script setup></script>
<template>
  <div class="dropdown">
  <img src="../assets/images/bg-img.jpg" alt="Cinque Terre" width="100" height="50">
  <div class="dropdown-content">
  <img src="../assets/images/bg-img.jpg" alt="Cinque Terre" width="300" height="200">
  <div class="desc">Lorem Ipsum</div>
  </div>
</div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.desc {
  padding: 15px;
  text-align: center;
}
</style>
