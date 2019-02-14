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
        this.circle = this.hopsa.draw.circle(0).move(this.hopsa.contentWidth / 2.5, this.hopsa.contentHeight / 2).fill("#fff");
        this.hopsa.clip.add(this.circle);
    }

    enterAnimation(done) {
        this.circle.animate(this.options.duration).radius(this.options.radius);
    }

}

export default CircleAnimation