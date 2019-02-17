import SVG from "svg.js";
import easing from "svg.easing.js";

class BaseAnimation {
    constructor(hopsaInstance, options, svgID, contentID) {
        this.hopsa = hopsaInstance;
        this.options = options;
        this.svgID = svgID;
        this.contentID = contentID;
        this.enterStarted = false
        this.enterCompleted = false

        this.exitStarted = false
        this.exitComplted = false
    }

    getDefaultOptions() {
        return {
            radius: 2000,
            duration: 1000,
            delay: 100,
            minWidth: 200,
            minHeight: 200,
            autostart: true,
            easing: "backOut",
            removeSVGOnComplete: false,
        }
    }


    init() {
        this.width = this.hopsa.$refs.slotContent.offsetWidth;
        this.height = this.hopsa.$refs.slotContent.offsetHeight;

        if (this.height < this.options.minHeight || !this.height) {

            this.height = this.options.minHeight;
        }
        if (this.width < this.options.minWidth || !this.width) {

            this.width = this.options.minWidth;
        }
        let content = document.getElementById(this.contentID)
        let svgContent = document.getElementById(this.svgID)
        svgContent.querySelectorAll('svg').forEach(el => {
            el.remove();
        })
        this.draw = SVG(this.svgID).size(this.width, this.height);
        this.clip = this.draw.clip();
        this.mask = this.draw.mask();

        content.style.clipPath =
            "url('#" + this.clip.id() + "')";
        content.style.opacity = 1;

    }

    stopAnimation() {
        this.started = false;
    }

    doEnterAnimation(done) {
        if (this.enterStarted) return;
        if (this.enterCompleted) {
            this.init()
            this.enterCompleted = false;
        }
        this.enterStarted = true;

        if (this.exitStarted) {
            this.stopAnimation()
            this.exitStarted = false;
        }

        
        setTimeout(() => {
            this.enterAnimation(() => {
                this.enterStarted = false;
                this.exitCompleted = false
                this.exitStarted = false
                this.enterCompleted = true;

                if (this.options.removeSVGOnComplete) {
                    let svgElement = document.getElementById(this.svgID);
                    svgElement.style.display = "none";
                }

                done()
            })
        }, this.options.delay);
    }
    doExitAnimation(done) {
        if (this.exitStarted) return;

        this.exitStarted = true;
        if (this.enterStarted) {
            this.stopAnimation()
            this.enterStarted = false;
        }

        


        setTimeout(() => {
            this.exitAnimation(() => {
                this.exitStarted = false;
                this.enterStarted = false;
                this.enterCompleted = false
                this.exitCompleted = true;

                if (this.options.removeSVGOnComplete) {
                    let svgElement = document.getElementById(this.svgID);
                    svgElement.style.display = "none";
                }
                done()
            })
        }, this.options.delay);

    }



    enterAnimation(done) {

    }

    exitAnimation(done) {

    }
}

export default BaseAnimation