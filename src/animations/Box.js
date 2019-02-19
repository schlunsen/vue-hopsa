import BaseAnimation from "./BaseAnimation";

class BoxAnimation extends BaseAnimation {

    enterAnimation(done) {
        if (!this.box) {
            this.box = this.draw.rect(this.width / 2, this.height / 2).move(this.width / 4, this.height / 4).fill("#fff");
        }


        if (!this.animating) {
            this.box.scale(0.0001)
        }


        this.clip.add(this.box);
        this.box.animate(this.options.duration, this.options.easing).scale(2).afterAll(done);
    }

    exitAnimation(done) {
        if (!this.box) {
            this.box = this.draw.rect(this.width / 2, this.height / 2).move(this.width / 4, this.height / 4).fill("#fff");
            this.clip.add(this.box);
        }
        if (!this.animating) {
            this.box.scale(this.options.scale)
        }

        this.box.animate(this.options.duration, this.options.easing).scale(0.00001).afterAll(done);
    }
    stopAnimation() {
        if (this.box) {
            this.box.stop()
        }
    }
}

export default BoxAnimation