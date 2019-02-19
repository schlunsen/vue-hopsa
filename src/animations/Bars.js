import BaseAnimation from "./BaseAnimation";

class BarsAnimation extends BaseAnimation {

    enterAnimation(done) {
        this.barWidth = 20;

        if (!this.bars) {
            this.bars = []

            this.bars = Array(parseInt(this.width / this.barWidth) + 1).fill().map((_, i) => {
                let bar = this.draw.rect(this.barWidth, this.height).move(i * this.barWidth, -this.height).fill("#fff");
                this.clip.add(bar)
                return bar
            });

        }



        if (!this.animating) {
            //this.box.scale(0.0001)
        }

        this.bars.forEach((bar, i) => {
            bar.animate(this.options.duration, this.options.easing, i * this.options.barsDelay).move(i * this.barWidth, 0).afterAll(done);
        })

    }

    getDefaultOptions() {
        return {
            radius: 2000,
            duration: 1000,
            delay: 100,
            minWidth: 200,
            minHeight: 200,
            autostart: true,
            easing: "expoOut",
            removeSVGOnComplete: false,
            barsDelay: 30
        }
    }

    exitAnimation(done) {
        if (!this.bars) {
            this.bars = []

            this.bars = Array(parseInt(this.width / this.barWidth) + 1).fill().map((_, i) => {
                let bar = this.draw.rect(this.barWidth, this.height).move(i * this.barWidth, 0).fill("#fff");
                this.clip.add(bar)
                return bar
            });

        }
        if (!this.animating) {
            
        }

        this.bars.forEach((bar, i) => {
            bar.animate(this.options.duration, this.options.easing, i * this.barsDelay).move(i * this.barWidth, -this.height).afterAll(done);
        })
    }
    stopAnimation() {
        if (this.bars) {
            this.box.stop()
        }
    }
}

export default BarsAnimation