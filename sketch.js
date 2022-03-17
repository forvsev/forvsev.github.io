console.log('work')


let density = "Ñ@#W$9876543210?!abc;:+=-,._   ";
// let density = '       .:-i|=+%O#@';
// let density = '@#O%+=|i-:.       ';



let video
let asciiDiv
// function preload() {
//   preview = loadImage('prev3.png')
// }

function setup() {
  noCanvas()
  video = createCapture(VIDEO)
  video.size(48, 48)
  asciiDiv = createDiv()
}

function draw() {

  video.loadPixels()
  let asciiImage = ''

  for (let j = 0; j < video.width; j++) {

    for (let i = 0; i < video.height; i++) {
      const pixelIndex = (i + j * video.width) * 4
      const r = video.pixels[pixelIndex + 0]
      const g = video.pixels[pixelIndex + 1]
      const b = video.pixels[pixelIndex + 2]
      const avg = (r + g + b)/3

      const len = density.length
      const charIndex = floor(map(avg, 0, 255, len, 0));
      const c = density.charAt(charIndex);
      if(c == ' ') asciiImage += '&nbsp;'
      else asciiImage += c
    }
    asciiImage += '<br/>'
  }
  asciiDiv.html(asciiImage)

}
