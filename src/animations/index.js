import CircleAnimation from "../animations/Circle";
import BoxAnimation from "../animations/Box";
import BatmanAnimation from "../animations/Batman";
import BarsAnimation from "../animations/Bars";

const getAnimation = (hopsa, animation, options, svgID, contentID) => {
    let animationClass = ANIMATIONS[animation];
    return new animationClass(hopsa, options, svgID, contentID);
};

const ANIMATIONS = {
    circle: CircleAnimation,
    box: BoxAnimation,
    batman: BatmanAnimation,
    bars: BarsAnimation
};

export {
    ANIMATIONS,
    getAnimation
}