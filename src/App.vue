<script setup />

<template>
  <div class="nav">
    <RouterLink class="navItem" to="/">
      <p>Home</p>
    </RouterLink>
    <RouterLink class="navItem" to="/about">
      <p>About</p>
    </RouterLink>
    <RouterLink class="navItem" to="/settings">
      <p>Settings</p>
    </RouterLink>
    <p class="footer">Adrián Pavlik👋</p>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.nav {
  max-width: 250px;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: rgba(5, 5, 5, 0.42);
}

.navItem {
  min-height: 100px;
  max-height: 100px;
  display: block;
  background-color: rgba(104, 104, 104, 0.42);
  transition: 0.3s;
}

.navItem:hover {
  background-color: rgba(74, 74, 74, 0.42);
}

.navItem:hover p {
  color: darkseagreen;
}

.navItem p {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  color: hsla(160, 100%, 37%, 1);
  margin-bottom: 10px;
}
</style>
