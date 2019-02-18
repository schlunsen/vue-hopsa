import BaseAnimation from "./BaseAnimation";


// Batman shapes
const paths = [
    'M213,222C219,150,165,139,130,183C125,123,171,73.8,247,51.6C205,78,236,108,280,102C281,90.3,282,79,286,68.2C287,72,288,75.8,289,79.7C293,79.7,296,79.7,300,79.7C304,79.7,307,79.7,311,79.7C312,75.8,313,72,314,68.2C318,79,319,90.3,320,102C364,108,395,78,353,51.6C429,73.8,475,123,470,183C435,139,381,150,387,222C364,176,315,172,300,248C285,172,236,176,213,222Z',
    'M235,210C214,139,143,145,183,229C108,175,135,70.1,242,48.3C190,85.6,245,142,278,95.5C281,80.2,281,62.7,284,48.7C287,53.9,287,59.1,289,64.5C292,64.7,297,64.2,300,64.2C303,64.2,308,64.7,311,64.5C313,59.1,313,53.9,316,48.7C319,62.7,319,80.2,322,95.5C355,142,410,85.6,358,48.3C465,70.1,492,175,417,229C457,145,386,139,365,210C357,147,309,190,300,271C291,190,243,147,235,210Z',
    'M223,217C194,153,165,168,133,219C143,158,161,99.2,189,38.4C214,69.8,241,84.7,272,86.2C272,70.2,273,53.5,273,37.5C275,47.9,278,58.4,280,68.8C287,64.9,292,62.4,300,62.4C308,62.4,313,64.9,320,68.8C322,58.4,325,47.9,327,37.5C327,53.5,328,70.2,328,86.2C359,84.7,386,69.8,411,38.4C439,99.2,457,158,467,219C435,168,406,153,377,217C350,162,319,176,300,245C281,176,250,162,223,217Z',
    'M194,146C192,107,164,76.4,136,45.6C166,55.7,196,65.7,226,75.8C238,107,265,163,279,136C282,130,281,108,281,94.8C285,103,288,111,293,115C295,116,298,117,300,117C302,117,305,116,307,115C312,111,315,103,319,94.8C319,108,318,130,321,136C335,163,362,107,374,75.8C404,65.7,434,55.7,464,45.6C436,76.4,408,107,406,146C355,158,323,189,300,231C277,189,245,158,194,146Z',
    'M209,182C184,132,176,138,113,161C140,136,168,111,196,86.5C221,104,247,115,278,115C281,99.9,285,85.5,287,70.2C289,78.5,292,88.4,294,96.7C296,96.7,298,96.7,300,96.7C302,96.7,304,96.7,306,96.7C308,88.4,311,78.5,313,70.2C315,85.5,319,99.9,322,115C353,115,379,104,404,86.5C432,111,460,136,487,161C424,138,416,132,391,182C332,150,341,161,300,214C259,161,268,150,209,182Z'
]

class BatmanAnimation extends BaseAnimation {

    enterAnimation(done) {
        // Add batman
        if (!this.batman) {
            this.batman = this.draw.path(paths[0]).size(this.width / 2, this.height / 2).move(this.hopsa.contentWidth / 4, this.hopsa.contentHeight / 4).fill("#fff");
        }
        
        
            this.batman.scale(0.01)
        
        
        this.clip.add(this.batman);

        this.batman.animate(this.options.duration).scale(this.options.scale).afterAll(done)
        this.animating = true;


    }

    exitAnimation(done) {

        if (!this.batman || this.exitCompleted) {
            
            if (!this.batman) {
                this.batman = this.draw.path(paths[0]);
            }

            this.batman.size(this.width / 2, this.height / 2).move(this.hopsa.contentWidth / 4, this.hopsa.contentHeight / 4).fill("#fff").scale(this.options.scale)
            
            
            this.clip.add(this.batman);
        }
        this.batman.animate(this.options.duration).scale(0.0001).afterAll(done)

    }
    stopAnimation() {
        this.batman.stop()
    }
}

export default BatmanAnimation