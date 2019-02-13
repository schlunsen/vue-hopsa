import BaseAnimation from './BaseAnimation.js'

class CircleAnimation extends BaseAnimation {
    
    init() {
        
        this.circle = this.hopsaInstance.draw.circle(0).move(this.hopsaInstance.contentWidth / 2.5, this.hopsaInstance.contentHeight / 2).fill("#fff");
        this.hopsaInstance.clip.add(this.circle);

    }
    doEnterAnimation(done) {
        this.circle.animate(920).radius(2000);

    }
    
}

export default CircleAnimation