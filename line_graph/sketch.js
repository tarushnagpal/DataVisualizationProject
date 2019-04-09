function sketch() {
    createCanvas(150, 150);
    background(200);
    console.log("asd");
    console.log(window.x);
}

function draw() {
    line(0,70,70,70)
    line(0,0,0,70)
 
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
    
    ellipse(50, 50, 1, 1)
    ellipse(10, 20, 1, 1)
    ellipse(30, 40, 1, 1)

    line(50,50,30,40)
    line(30,40,10,20)
}