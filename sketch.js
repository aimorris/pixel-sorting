let imagePixels;

function preload() {
  img = loadImage('img.jpg');
}

function setup() {
  createCanvas(288, 144);

  sorted = createImage(img.width, img.height);
  sorted = img.get();
}

function draw() {
  sorted.loadPixels();

  for (let i = 0; i < sorted.width - 1; i++) {
    for (let j = 0; j < sorted.height - 1; j++) {
      let currentPixel = sorted.get(i, j);
      let nextPixel = sorted.get(i+1, j);

      let currentColor = color(currentPixel[0], currentPixel[1], currentPixel[2], currentPixel[3]);
      let nextColor = color(nextPixel[0], nextPixel[1], nextPixel[2], nextPixel[3]);

      if (hue(nextColor) > hue(currentColor)) {
        sorted.set(i, j, nextColor);
        sorted.set(i+1, j, currentColor);
      }
    }
  }

  sorted.updatePixels();

  background(0);
  image(img, 0, 0, 144, 144);
  image(sorted, 144, 0, 144, 144);
}