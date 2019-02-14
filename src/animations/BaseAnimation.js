class BaseAnimation {
    constructor(hopsaInstance, options) {
        let defaultOptions = {
            radius: 2000,
            duration: 1000,
            delay: 100
        }

        this.hopsa = hopsaInstance;
        this.options = Object.assign(defaultOptions, options);
        this.init();
    }

    doEnterAnimation() {
        setTimeout(() => {
            this.enterAnimation()
        }, this.options.delay);
    }

    enterAnimation(done) {

    }

    exitAnimation(done) {

    }
}

export default BaseAnimation