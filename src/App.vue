<template>
  <div id="app">
    <Hopsa :lineWidth="20" :delay="4000">
      <template v-slot:content>
        <img src="https://airc.ie/wp-content/uploads/horse-web.jpg" alt>
      </template>
    </Hopsa>
  </div>
</template>

<script>
import Hopsa from "./components/Hopsa.vue";

export default {
  name: "app",
  components: {
    Hopsa
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding: 0;
}
img {
  width: 100%;
  margin: 0;
}
body,
html {
  padding: 0;
  margin: 0;
}
</style>
