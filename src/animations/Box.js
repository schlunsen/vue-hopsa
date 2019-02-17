import BaseAnimation from "./BaseAnimation";

class BoxAnimation extends BaseAnimation {
    
    enterAnimation(done) {
        this.box = this.draw.rect(this.width /2, this.height / 2).move(this.width / 4, this.height / 4).fill("#fff");
        this.box.scale(0.0001)
        this.clip.add(this.box);
        this.box.animate(this.options.duration, this.options.easing, this.options.delay).scale(2).afterAll(done);
    }

    exitAnimation(done) {
        
        this.box.animate(this.options.duration, this.options.easing, this.options.delay).scale(0.00001).afterAll(done);
    }
    stopAnimation() {
        this.started = false
        this.box.stop()
    }
}

export default BoxAnimation