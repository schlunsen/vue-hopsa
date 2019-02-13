class CircleAnimation {

    constructor(hopsaInstance) {
        this.hopsaInstance = hopsaInstance;
        this.init();
    }

    init() {
        this.circle = this.hopsaInstance.draw.circle(0).move(this.hopsaInstance.contentWidth / 2.5, this.hopsaInstance.contentHeight / 2).fill("#fff");
        this.hopsaInstance.clip.add(this.circle);

    }
    doEnterAnimation(done) {
        this.circle.animate(920).radius(this.hopsaInstance.contentWidth);

    }
    doExitAnimation(done) {

    }
}

export default CircleAnimation