<template>
  <v-app>
    <Hopsa :animation="'bars'" :options="{duration: 800, barsDelay: 10}" ref="hopsa" id="hopsa">
      <template v-slot:content>
        <header class>
          <h1 class="logo stroked">Hopsa</h1>
          <p class>SVG Clipping transitions for Vue</p>
          <br>

          <!-- Place this tag where you want the button to render. -->
          <a
            class="github-button"
            href="https://github.com/schlunsen/vue-hopsa"
            data-icon="octicon-star"
            aria-label="Star vue-hopsa on GitHub"
          >Star</a>
        </header>
      </template>
    </Hopsa>

    <v-container>
      <v-layout row wrap justify-center></v-layout>
      <v-layout row wrap justify-center align-center>
        <v-card xs4 @mouseenter="doEnterAnimation()" @mouseleave="doExitAnimation()">
          <Hopsa :animation="selectedAnimation" :options="hopsaOptions" ref="hopsa" id="hopsa">
            <template v-slot:content>
              <img src="https://airc.ie/wp-content/uploads/horse-web.jpg" alt>
            </template>
          </Hopsa>
        </v-card>
      </v-layout>
      <br>
      <v-layout row wrap justify-center>
        <v-flex xs12 md2>
          <v-select :items="animations" v-model="selectedAnimation" label="Animations"></v-select>
        </v-flex>
        <v-flex xs12 md2>
          <v-select :items="easings" v-model="hopsaOptions.easing" label="Easings"></v-select>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12 md6>
          <v-slider
            label="Duration"
            v-model="hopsaOptions.duration"
            step="1"
            thumb-label="always"
            max="5000"
          ></v-slider>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-btn @click="doEnterAnimation()">Do enter animation</v-btn>
        <v-btn @click="doExitAnimation()">Do exit animation</v-btn>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import SVG from "svg.js";
import Hopsa from "./components/Hopsa.vue";
import Background from "./components/Background.vue";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

export default {
  name: "appmain",
  data: () => ({
    animation: "batman",
    selectedAnimation: "batman",
    animations: [
      {
        text: "Batman",
        value: "batman"
      },
      {
        text: "Circle",
        value: "circle"
      },
      {
        text: "Box",
        value: "box"
      }
    ],
    easings: (() => {
      return Object.keys(SVG.easing);
    })(),
    hopsaOptions: {
      delay: 0,
      duration: 800,
      easing: "sineOut",
      minHeight: 200,
      minWidth: 200,
      autostart: true,
      scale: 7,
      removeSVGOnComplete: false
    }
  }),
  methods: {
    doEnterAnimation() {
      this.$refs.hopsa.doEnterAnimation();
    },
    doExitAnimation() {
      this.$refs.hopsa.doExitAnimation();
    }
  },
  components: {
    Hopsa
  }
};
</script>

<style>
header {
  text-align: center;
  min-height: 15vh;
  background: #ff530d;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 20px;
  color: white;
  box-shadow: inset 0px -8px 82px -20px rgba(0, 0, 0, 0.75);
  font-family: "Lilita One" !important;
  font-size: 18px;
}
header p {
  margin-bottom: 0px;
}

.logo {
  //font-family: "Lilita One" !important;
  font-size: 9vh;
  color: white;
  width: 100%;
}
.stroked {
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #3f3f3f;
}

.application {
  font-family: "Lilita One";
  font-family: "Architects Daughter";
}
#hopsa {
  transform: translateZ(0);
}
img {
  width: 100%;
  margin: 0;
  max-width: 600px;
}
body,
html {
  padding: 0;
  margin: 0;
}
</style>
