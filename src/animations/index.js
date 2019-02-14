import CircleAnimation from "../animations/Circle";
import BoxAnimation from "../animations/Box";

const getAnimation = (hopsa, animation, options) => {
    let animationClass = ANIMATIONS[animation];
    return new animationClass(hopsa, options);
};

const ANIMATIONS = {
    circle: CircleAnimation,
    box: BoxAnimation
};
export {
    ANIMATIONS,
    getAnimation
}