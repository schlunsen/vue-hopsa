class BaseAnimation {
    constructor(hopsaInstance, options) {
        this.hopsa = hopsaInstance;
        this.options = options

        this.width = hopsaInstance.contentWidth;
        this.height = hopsaInstance.contentHeight;
        this.init();
    }

    doEnterAnimation(done) {

        this.enterAnimation(done)

    }

    enterAnimation(done) {

    }

    exitAnimation(done) {

    }
}

export default BaseAnimation