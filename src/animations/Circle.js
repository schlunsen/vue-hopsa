import BaseAnimation from './BaseAnimation.js'

/**
 * options: {
 *  duration: 1000
 *  delay: 1000,
 *  radius: 222
 * }
 */
class CircleAnimation extends BaseAnimation {
    
    enterAnimation(done) {
        if(!this.circle) {
            this.circle = this.draw.circle(this.width /2).move(this.width / 4, this.height / 4).fill("#fff");
        }
        if (!this.animating) {
            this.circle.scale(0.0001)
            
        }
        
        this.clip.add(this.circle);
        this.circle.animate(this.options.duration, this.options.easing, this.options.delay).scale(3).afterAll(done);
    }

    exitAnimation(done) {
        if (!this.circle) {
            this.circle = this.draw.circle(this.width /2).move(this.width / 4, this.height / 4).fill("#fff");
        }
        if (!this.animating) {
            
            this.circle.scale(3)
        }
        this.circle.animate(this.options.duration, this.options.easing).scale(0.000001).afterAll(done);
    }

    stopAnimation() {
        if (this.circle) {
            this.circle.stop()
        }
        
    }

}

export default CircleAnimation