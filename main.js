function setup()
{
  video = createCapture(VIDEO);
  video.size(800, 800);
  video.position(100,150);

  canvas = createCanvas(800,800);  
  canvas.position(2050, 150);

  poseNet = ml5.poseNet(video, modelloaded);
  poseNet.on('pose', gotPoses);
}
function modelloaded()
{
  console.log('PoseNet Is Initialized!');
}

function draw()
{
  background("#a96bff");
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  }
}