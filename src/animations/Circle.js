import BaseAnimation from './BaseAnimation.js'

/**
 * options: {
 *  duration: 1000
 *  delay: 1000,
 *  radius: 222
 * }
 */
class CircleAnimation extends BaseAnimation {

    init() {
        //this.circle = this.hopsa.draw.circle(0).move(this.hopsa.contentWidth / 2.5, this.hopsa.contentHeight / 2).fill("#fff");
        this.circle = this.hopsa.draw.circle(this.width /2).move(this.hopsa.contentWidth / 4, this.hopsa.contentHeight / 4).fill("#fff");
        this.circle.scale(0.0001)
        this.hopsa.clip.add(this.circle);
    }

    enterAnimation(done) {
        this.circle.animate(this.options.duration, this.options.easing, this.options.delay).scale(3);
    }

}

export default CircleAnimation