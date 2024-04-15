function angleBetween (v1, v2){
    dot = Vector3.dot(v1, v2);
    mag1 = v1.magnitude();
    mag2 = v2.magnitude();
    angle = Math.acos(dot / (mag1 * mag2)) * (180 / Math.PI);
    console.log("Angle: ", angle);

}

function areaTriangle (v1, v2){
    cross = Vector3.cross(v1, v2);
    mag = cross.magnitude();
    console.log("Area of the triangle: ", mag / 2.0);
}

function handleDrawOperationEvent(){
    var ctx = document.getElementById('example').getContext('2d');
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillRect(0, 0, 400, 400);
    let xinput1 = document.getElementById("xinput1").value;
    let yinput1 = document.getElementById("yinput1").value;
    let xinput2 = document.getElementById("xinput2").value;
    let yinput2 = document.getElementById("yinput2").value;
    var v1 = new Vector3([xinput1, yinput1, 0]);
    var v2 = new Vector3([xinput2, yinput2, 0]);
    drawVector(v1, "red");
    drawVector(v2, "blue");
    var operation = document.getElementById("operation").value;
    if (operation === "Add"){
        v3 = v1.add(v2);
        drawVector(v3, "green");
    }
    else if (operation === "Subtract"){
        v3 = v1.sub(v2);
        drawVector(v3, "green"); 
    }
    else if (operation === "Multiply"){
        let scalar = document.getElementById("scalar").value;
        v3 = v1.mul(scalar);
        v4 = v2.mul(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    }
    else if (operation === "Divide"){
        let scalar = document.getElementById("scalar").value;
        v3 = v1.div(scalar);
        v4 = v2.div(scalar);
        drawVector(v3, "green");
        drawVector(v4, "green");
    }
    else if (operation === "Magnitude"){
        console.log("Magnitude v1: ", v1.magnitude());
        console.log("Magnitude v2: ", v2.magnitude());
    }
    else if (operation === "Normalize"){
        v3 = v1.normalize();
        v4 = v2.normalize();
        drawVector(v3, "green");
        drawVector(v4, "green");
    }
    else if (operation === "AngleBetween"){
        angleBetween(v1, v2);
    }
    else if (operation === "Area"){
        areaTriangle(v1, v2);
    }
}


function handleDrawEvent(){
    var ctx = document.getElementById('example').getContext('2d');
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillRect(0, 0, 400, 400);
    let xinput1 = document.getElementById("xinput1").value;
    let yinput1 = document.getElementById("yinput1").value;
    let xinput2 = document.getElementById("xinput2").value;
    let yinput2 = document.getElementById("yinput2").value;
    var v1 = new Vector3([xinput1, yinput1, 0]);
    var v2 = new Vector3([xinput2, yinput2, 0]);
    drawVector(v1, "red");
    drawVector(v2, "blue");
}

function drawVector(v, color) {
    var ctx = document.getElementById('example').getContext('2d');
    ctx.beginPath();
    ctx.moveTo(200, 200); // start at the center of the canvas
    ctx.lineTo(200 + v.elements[0]*20, 200 - v.elements[1]*20); // scale and invert y axis
    ctx.strokeStyle = color;
    ctx.stroke();
}

function main() {
    var canvas = document.getElementById('example');
    if (!canvas){
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, 400, 400);
    handleDrawEvent();
}