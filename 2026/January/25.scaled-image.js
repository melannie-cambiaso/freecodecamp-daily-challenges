function scaleImage(size, scale) {
  const splitedSize = size.split("x")
  const newSize = `${splitedSize[0]*scale}x${splitedSize[1]*scale}`
  return newSize;
}

console.log(scaleImage("800x600", 2)); // should return "1600x1200"
console.log(scaleImage("100x100", 10)); // should return "1000x1000"
console.log(scaleImage("1024x768", 0.5)); // should return "512x384"
console.log(scaleImage("300x200", 1.5)); // should return "450x300"