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

export default {
  props: ["lineWidth"],
  data: () => ({}),
  computed: {
    svgID() {
      return "svgtransition-" + this._uid;
    }
  },
  mounted() {
    let contentWidth = this.$refs.slotContent.offsetWidth;
    let contentHeight = this.$refs.slotContent.offsetHeight;

    var draw = SVG(this.svgID).size(contentWidth, contentHeight);

    let numberOfLines = parseInt(contentHeight / parseInt(this.lineWidth), 10);

    let lines = [];
    for (let index = 0; index < numberOfLines; index++) {
      let rect = draw
        .rect(contentWidth, this.lineWidth)
        .attr({ fill: "white" });
      rect.move(0, index * this.lineWidth);
      lines.push(rect);
    }
    lines.forEach((line, idx) => {
      line
        .animate(670, "<", idx * 10)
        .move(-1 * (contentWidth * 1.1), idx * this.lineWidth);
    });
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


