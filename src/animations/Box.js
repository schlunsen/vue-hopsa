import BaseAnimation from "./BaseAnimation";

class BoxAnimation extends BaseAnimation {
    constructor(hopsa, options) {
        super(hopsa, options)
    }
    init() {
        //this.box = this.hopsa.draw.rect(0,0).move(0,0).fill("#fff");
        this.box = this.hopsa.draw.rect(this.width /2, this.height / 2).move(this.hopsa.contentWidth / 4, this.hopsa.contentHeight / 4).fill("#fff");
        this.box.scale(0.0001)
        this.hopsa.clip.add(this.box);
    }
    enterAnimation(done) {
        this.box.animate(this.options.duration, this.options.easing, this.options.delay).scale(2);
    }

    exitAnimation(done) {

    }
}

export default BoxAnimation