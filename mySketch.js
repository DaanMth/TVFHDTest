var imgs = [];
var imgIndex = -1;
var img;
var paint;
var subStep = 400;
var z = 0;
var isStop = false;
var lineCount = 0;
var deleteDelay = -2;
imageCount = 0;
let showSpotlights = false;

function preload() {
  imgs[imageCount] = loadImage("./images/output" + imageCount + ".png");
  console.log(imgs);
  console.log(imgIndex);
}

function windowHeight() {
  return;
}

function setup() {
  if (windowWidth < 600)
    createCanvas(windowWidth, windowWidth);
  else
    createCanvas(600, 600);
  img = createImage(width, height);
  nextImage();
  paint = new Paint(createVector(width / 2, height / 2));
  background(255, 255, 255);
  colorMode(RGB, 255, 255, 255, 255);
}

function draw() {
  if (!isStop) {
    for (var i = 0; i < subStep; i++) {
      paint.update();
      paint.show(lineCount);
      z += 0.01;
    }
  }
  lineCount++;
  if (lineCount > width) {
    isStop = true;
    lineCount = 0;
  }
  if(isStop == true){
    nextImage();
    isStop = false;
  }
}

function fget(i, j) {
  var index = j * img.width + i;
  index *= 4;
  return color(img.pixels[index], img.pixels[index + 1], img.pixels[index + 2], img.pixels[index + 3]);
}

function fset(i, j, c) {
  var index = j * img.width + i;
  index *= 4;
  img.pixels[index] = red(c);
  img.pixels[index + 1] = green(c);
  img.pixels[index + 2] = blue(c);
  img.pixels[index + 3] = alpha(c);
}

function keyPressed() {
  console.log(key);
  if (key === 's' || key === 'S') {
    isStop = !isStop;
  }
}

function mouseClicked() {
  const wrapper = document.querySelector('.wrapper');
  const body = document.querySelector('body');
  const canvas = document.querySelector('canvas');

  if (body.classList.contains('active')) {
    body.classList.remove('active');
  } else {
    body.classList.add('active');
  }

  if (wrapper.classList.contains('active')) {
    wrapper.classList.remove('active');
  } else {
    wrapper.classList.toggle('transition');
    wrapper.classList.add('active');
  }
  if (canvas.classList.contains('active')) {
    canvas.classList.remove('active');
  } else {
    canvas.classList.add('active');
  }
}

function touchStarted() {}

function nextImage() {
  if (!img) return;
  imgIndex = (++imgIndex) % imgs.length;
  var targetImg = imgs[imgIndex];
  img.copy(targetImg, 0, 0, targetImg.width, targetImg.height, 0, 0, img.width, img.height);
  img.loadPixels();
  clear();
  background(255, 255, 255);
  imageCount++;
  preload();
  console.log("switching image to: " + imgIndex);
}

const shadow = document.querySelector('.shadow');
document.addEventListener('mousemove', (e) => {
  let x = e.clientX - (document.documentElement.clientWidth * 1.5);
  let y = e.clientY - (document.documentElement.clientHeight * 1.5);
  shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
});