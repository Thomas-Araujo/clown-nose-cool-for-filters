function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
function takesnapshot(){
    save("clown.png");
}
function draw(){
    image(video,0,0,400,400); 
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotposes(result){
if(result.length>0){
    console.log(result);
    console.log("nose x ="+result[0].pose.nose.x);
    console.log("nose y ="+result[0].pose.nose.y);
}
}