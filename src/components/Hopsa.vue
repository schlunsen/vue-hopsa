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

export default {
  props: ["delay", "animation"],
  mounted() {
    let delay = this.delay ? this.delay : 1000;
    this.init();
    this.initAnimation();

    setTimeout(() => {
      this.doAnimation();
    }, delay);
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

      setTimeout(() => {
        document.getElementById(this.contentID).style.clipPath =
          "url('#" + this.clip.id() + "')";
      }, 1);
    },
    initAnimation() {
      this.animationInstance = new this.animation(this);
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


