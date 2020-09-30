class launcher{
    constructor(body,anchor){
        var options = {
            pointB:anchor,
            stiffness:0.004,
            length:1
        }
        this.bodyA = body;
        this.pointB=anchor;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA=body;
    }

    fly(){
        this.launcher.body = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA=this.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}