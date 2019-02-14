import BaseAnimation from "./BaseAnimation";

class BoxAnimation extends BaseAnimation {
    constructor(hopsa, options) {
        super(hopsa, options)
    }
    init() {
        this.box = this.hopsa.draw.rect(0,0).move(0,0).fill("#fff");
        this.hopsa.clip.add(this.box);
    }
    enterAnimation(done) {
        this.box.animate(this.options.duration).size(this.hopsa.contentWidth,this.hopsa.contentHeight);
    }

    exitAnimation(done) {

    }
}

export default BoxAnimation