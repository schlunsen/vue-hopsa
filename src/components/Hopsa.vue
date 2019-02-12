<template>
  <div class="mainwrap">
    <div class="content" ref="slotContent">
      <slot name="content"/>
    </div>
    <div :id="svgID" class="svgoverlay"></div>
  </div>
</template>
<script>
import SVG from "svg.js";
let t;
export default {
  props: ["lineWidth", "delay"],
  data: () => ({}),

  mounted() {
    let t = this;
    let delay = this.delay ? this.delay : 1000;
    this.init();
    setTimeout(() => {
      this.doAnimation();
    }, delay);
  },
  computed: {
    svgID() {
      return "svgtransition-" + this._uid;
    }
  },
  methods: {
    init() {
      this.contentWidth = this.$refs.slotContent.offsetWidth;
      this.contentHeight = this.$refs.slotContent.offsetHeight;

      this.draw = SVG(this.svgID).size(this.contentWidth, this.contentHeight);

      let numberOfLines = parseInt(
        this.contentHeight / parseInt(this.lineWidth),
        10
      );
      if (!numberOfLines) {
        setTimeout(() => {
          this.init();
        }, 100);
        return;
      }
      numberOfLines += 1;

      this.lines = [];
      for (let index = 0; index < numberOfLines; index++) {
        let rect = this.draw
          .rect(this.contentWidth, this.lineWidth)
          .attr({ fill: "white" });
        rect.move(0, index * this.lineWidth);
        this.lines.push(rect);
      }
    },
    doAnimation() {
      this.lines.forEach((line, idx) => {
        line
          .animate(370, "<", idx * 10)
          .move(-1 * (this.contentWidth * 1.1), idx * this.lineWidth);
      });
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
  z-index: 22;
}
</style>


