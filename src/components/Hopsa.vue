<template>
  <div class="mainwrap">
    <div :id="contentID" class="hopsaContent" ref="slotContent">
      <slot name="content" class />
    </div>
  </div>
  <div :id="svgID" class="svgoverlay"></div>
</template>
<script>
import { getAnimation } from "../animations/index.js";

export default {
  name: "hopsa",
  props: ["animation", "options"],
  mounted() {
    this.loadListener = window.addEventListener("load", () => {
      if (this.animation) {
        if (this.mergedOptions.autostart) {
          this.initAnimation();
          this.doEnterAnimation();
        }
      }
    });
  },
  destroyed() {
    document.removeEventListener("load", this.loadListener);
  },
  watch: {
    animation() {
      this.initAnimation();
      this.doEnterAnimation();
    }
  },
  computed: {
    svgID() {
      return "svgtransition-" + this._uid;
    },
    contentID() {
      return "hopsa-" + this._uid;
    },
    mergedOptions() {
      let defaultOptions = {
        radius: 2000,
        duration: 1000,
        delay: 100,
        minWidth: 200,
        minHeight: 200,
        autostart: true,
        easing: "backOut"
      };
      return Object.assign(defaultOptions, this.options);
    }
  },
  methods: {
    initAnimation() {
      if (typeof this.animation === "function") {
        this.animationInstance = new this.animation(
          this,
          this.options,
          this.svgID,
          this.contentID
        );
      } else if (typeof this.animation === "string") {
        this.animationInstance = getAnimation(
          this,
          this.animation,
          this.options,
          this.svgID,
          this.contentID
        );
      } else {
        this.animationInstance = this.animation;
      }
      this.animationInstance.init();
      this.initialized = true;
    },
    doEnterAnimation() {
      if (!this.initialized) this.initAnimation();
      this.animationInstance.doEnterAnimation(() => {
        if (this.options.onComplete) {
          this.options.onComplete();
        }
      });
    },
    doExitAnimation() {
      if (!this.initialized) this.initAnimation();
      let svgElement = document.getElementById(this.svgID);
      svgElement.style.display = "block";
      this.animationInstance.doExitAnimation(() => {
        if (this.options.onComplete) {
          this.options.onComplete();
        }
      });
    }
  }
};
</script>
<style scoped>
.mainwrap {
  position: relative;
  height: 100%;
  width: 100%;
}

.hopsaContent {
  position: relative;
  overflow: hidden;
  opacity: 0;
}

.svgoverlay {
  transform: translateZ(0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  overflow: hidden;
}
</style>


