class BoxAnimation {

    constructor(hopsaInstance) {
        this.hopsaInstance = hopsaInstance;
        this.init();
    }

    init() {
        this.box = this.hopsaInstance.draw.rect(0,0).move(0,0).fill("#fff");
        this.hopsaInstance.clip.add(this.box);
    }
    doEnterAnimation(done) {
        this.box.animate(920).size(this.hopsaInstance.contentWidth,this.hopsaInstance.contentHeight);

    }
    doExitAnimation(done) {

    }
}

export default BoxAnimation