<template>
  <div class="mainwrap">
    <div :id="contentID" class="content" ref="slotContent">
      <slot name="content" id="hopsaContent"/>
    </div>
    <div :id="svgID" class="svgoverlay"></div>
  </div>
</template>
<script>
import SVG from "svg.js";
import { getAnimation } from "../animations/index.js";

export default {
  name: "hopsa",
  props: ["animation", "options"],
  mounted() {    
      this.$nextTick(() => {
      this.init();
      if (this.animation) {
        this.initAnimation();
        this.doAnimation();
      }
    });
  },
  watch: {
    animation() {
      if (!this.animation) return;
      this.initAnimation();
      this.doAnimation();
    }
  },
  computed: {
    svgID() {
      return "svgtransition-" + this._uid;
    },
    contentID() {
      return "hopsa-" + this._uid;
    }
  },
  methods: {
    init() {
      this.contentWidth = this.$refs.slotContent.offsetWidth;
      this.contentHeight = this.$refs.slotContent.offsetHeight;
      this.draw = SVG(this.svgID).size(this.contentWidth, this.contentHeight);
      this.clip = this.draw.clip();
      document.getElementById(this.contentID).style.clipPath =
        "url('#" + this.clip.id() + "')";
    },
    initAnimation() {
      if (typeof this.animation === "function") {
        this.animationInstance = new this.animation(this, this.options);
      } else if (typeof this.animation === "string") {
        this.animationInstance = getAnimation(
          this,
          this.animation,
          this.options
        );
      } else {
        this.animationInstance = this.animation;
      }
    },
    doAnimation() {
      this.animationInstance.doEnterAnimation();
    }
  }
};
</script>
<style scoped>
.mainwrap {
  position: relative;
}

.content {
  position: relative;
  overflow: hidden;
}

.svgoverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>


