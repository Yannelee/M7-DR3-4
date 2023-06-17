<template>
  <div id="app">
    <nav>
      🏠 <router-link to="/">Home</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 1rem;
  text-align: left;
  background-color: teal;
}

nav a {
  font-weight: bold;
  color: #b3fffb;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #b8ffff;
  font-size: large;
  text-decoration: underline;
}
</style>
