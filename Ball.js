class Ball{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,//bounce
            'friction':1.0,//the force between two bodies
            'density':1.0//mass/volume
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(255, 76, 228);
        ellipse(0, 0, this.radius);
        pop();
      }
}