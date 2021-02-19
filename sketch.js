import p5 from "p5"

let myp5 = new p5(( sketch ) => {
    sketch.setup = () => {
        sketch.createCanvas(200,200)
    }

    sketch.draw = () => {
        sketch.background(0);
        sketch.fill(255);
        sketch.rect(20,30,50,50);
    }
});

