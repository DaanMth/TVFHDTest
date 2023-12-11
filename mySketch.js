var imgs = [];
var imgIndex = -1;
var img;
var paint;
var subStep = 400;
var z = 0;
var isStop = false;
var count = 0;
var deleteDelay = -2;
imageCount = 0;


function preload() {
  imgs[imageCount] = loadImage("./images/output" + imageCount + ".png");
  console.log("imageCount:" + imageCount)
  console.log(imgs);
  console.log(imgIndex);
}

// function to get windowheight
function windowHeight() {
    return ;
}

function setup() {
	if(windowWidth < 600)
  	createCanvas(windowWidth, windowWidth);
	else 
  	createCanvas(900, 900);
  img = createImage(width, height);
  nextImage();
  paint = new Paint(createVector(width/2, height/2));
  background(255, 255, 255);
  colorMode(RGB, 255, 255, 255, 255);
}

function draw() {
  //console.log(frameRate());
  if (!isStop) {
  	for (var i = 0 ; i < subStep ; i++) {
      paint.update();
      paint.show();
      z+= 0.01;
    }
  }
	count++;
  console.log("Count: "+ count + " and Width: " + width)
	if (count > width) {
		isStop = true;
    count = 0;
	}
  if(isStop == true){
    nextImage();
    isStop = false;
  }

    if (windowWidth < 600)
        createCanvas(windowWidth, windowWidth);
    else
        createCanvas(1000 , 1000);
    img = createImage(width, height);
    nextImage();
    paint = new Paint(createVector(width / 2, height / 2));
    background(255, 255, 255);
    colorMode(RGB, 255, 255, 255, 255);
}

function draw() {
    //console.log(frameRate());
    if (!isStop) {
        for (var i = 0; i < subStep; i++) {
            paint.update();
            paint.show(lineCount);
            z += 0.01;
        }
    }
    lineCount++;
    // console.log("Count: "+ lineCount + " and Width: " + width)
    if (lineCount > width * 4) {
        isStop = true;
        lineCount = 0;
    }

    // if (isStop == true) {
    //     nextImage();
    //     isStop = false;
    // }
}

function fget(i, j) {
  var index = j * img.width + i;
  index *= 4;
  return color(img.pixels[index], img.pixels[index+1], img.pixels[index+2], img.pixels[index+3]);
}

function fset(i, j, c) {
  var index = j * img.width + i;
  index *= 4;
  img.pixels[index] = red(c);
  img.pixels[index+1] = green(c);
  img.pixels[index+2] = blue(c);
  img.pixels[index+3] = alpha(c);
}

function keyPressed() {
  console.log(key);
  if (key === 's' || key === 'S') {
    isStop = !isStop;
  } 
}
function mouseClicked() {
  nextImage();
	isStop = false;
	count = 0;
}
function touchStarted() {
  nextImage();
	isStop = false;
	count = 0;
}

function nextImage() {
	if (!img) return;
    imgIndex = (++imgIndex) % imgs.length;
    var targetImg = imgs[imgIndex];
    img.copy(targetImg, 0, 0, targetImg.width, targetImg.height, 0, 0, img.width, img.height);
    //img.resize(width, height);
    img.loadPixels();
    clear();
    imageCount++;
    preload();
    console.log("switching image to: " + imgIndex);
  if (!img) return;
    imgIndex = (++imgIndex) % imgs.length;
    var targetImg = imgs[imgIndex];
    img.copy(targetImg, 0, 0, targetImg.width, targetImg.height, 0, 0, img.width, img.height);
    //img.resize(width, height);
    img.loadPixels();
    clear();
    imageCount++;
    preload();
    console.log("switching image to: " + imgIndex);

  const shadow = document.querySelector('.shadow');
  document.addEventListener('mousemove', (e) => {
      let x = e.clientX - (document.documentElement.clientWidth * 1.5);
      let y = e.clientY - (document.documentElement.clientHeight * 1.5);
      shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  })
}
