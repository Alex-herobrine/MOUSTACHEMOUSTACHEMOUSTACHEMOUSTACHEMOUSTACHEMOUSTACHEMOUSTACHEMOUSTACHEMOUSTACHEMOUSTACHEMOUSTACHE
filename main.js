noseX=0;
noseY=0;

function preload()
{
clownnose=loadImage('https://lh3.googleusercontent.com/proxy/hLW6zwVuBgw6EZ6pKGamoCs4txn1rXSMW3yMD-uYzGKkoSxd-r57S-EFEAtvv3Etz8j1Qyg1iLu0ka3hUeJwI1i-uD3T7DI5ZJfOwZ6mBMqvO3gDH6lT77uh1zwXJ9O-00Hx');
}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
console.log('poseNet is initialized');
}

function take_snapshot()
{
save('myfilterimage.png');
}

function draw()
{
image(video,0,0,300,300);
image (clownnose,noseX,noseY,30,30);
}

function gotPoses(results)
{
if(results.length>0)
{console.log(results);
noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y
}} 
