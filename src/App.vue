<template>
  <div id="app">
    <Hopsa :animation="animation" :options="hopsaOptions" ref="hopsa">
      <template v-slot:content>
        <img src="https://airc.ie/wp-content/uploads/horse-web.jpg" alt>
      </template>
    </Hopsa>
  </div>
</template>

<script>
import Hopsa from "./components/Hopsa.vue";
import CircleAnimation from "./animations/Circle.js";
import BoxAnimation from "./animations/Box.js";

export default {
  name: "app",
  data: () => ({
    animation: 'circle',
    hopsaOptions: {
      delay: 400,
      duration: 1100,
      radius: 2000
    }
  }),
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
