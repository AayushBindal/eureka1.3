/*/! faction.js v1.0April 24, 2021 */
function keyCodeTeller(x_axis, y_axis){                      /* to define x and y*/
    // stroke(255);
    text("keyPressed: "+key, x_axis, y_axis-15); 
    text("keyCode: "+keyCode, x_axis, y_axis+10);
    if(keyCode === 16){
        text("shiftKey: true", x_axis, y_axis+35);  
    }
    else{
        text("shiftKey: false", x_axis, y_axis+35);
    }
    if(keyCode === 18){
        text("altKey: true", x_axis, y_axis+60);
    }
    else{
        text("altKey: false", x_axis, y_axis+60);
    }
    if(keyCode === 17){
        text("ctrltKey: true", x_axis, y_axis+85);
    }
    else{
        text("ctrltKey: false", x_axis, y_axis+85);
    }
    if(keyCode === 91){
        text("metaKey: true", x_axis, y_axis+110);
    }
    else{
        text("metaKey: false", x_axis, y_axis+110);
    }
}
 
function checkBattery(){
  navigator.getBattery().then(function(battery) {
  battery.addEventListener('levelchange', function() {    
  // Do stuff when the level changes, you can get it
  // from battery.level
  document.write((battery.level*100)+"%");
  })
  document.write((battery.level*100)+"%");
  });
}

function coords(colorR, colorG, colorB){
    strokeWeight(1);
    stroke(rgb(colorR, colorG, colorB));
    textSize(15);
    noFill();
    text("X: "+mouseX+", Y: "+mouseY, mouseX+20, mouseY+40);
    if(mouseY>649){
        text("X: "+mouseX+", Y: "+mouseY, mouseX+20, mouseY);
    }
    else if(mouseX>1380){
        text("X: "+mouseX+", Y: "+mouseY, mouseX-80, mouseY+40);
    }
}

function mouseHot(x, y, sizeX, sizeY, r, b){
    // Scale the mouseX value from 0 to 720 to a range between 0 and 175
    let c = map(mouseX, 0, width, 0, 175);
    // Scale the mouseX value from 0 to 720 to a range between 40 and 300
    let d = map(mouseX, 0, width, sizeX, sizeY);
    fill(r, c, b);
    ellipse(x, y, d, d);
}

function pressHighlight(){
    stroke(255);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function mouseEllipse(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    stroke(speed);
    ellipse(x, y, speed, speed);
}

function stars(color){
    let totalPts = 300;
    let steps = totalPts + 1;
    stroke(color);
    frameRate(1);    
    let rand = 0;
    for (let i = 1; i < steps; i++) {
    point((width / steps) * i, height / 2 + random(-rand, rand));
    rand += random(-5, 5);
  }
}

function Eye(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;
  
    this.update = function(mx, my) {
      this.angle = atan2(my - this.y, mx - this.x);
    };
  
    this.display = function() {
      push();
      translate(this.x, this.y);
      fill(255);
      ellipse(0, 0, this.size, this.size);
      rotate(this.angle);
      fill(153, 204, 0);
      ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
      pop();
    }
}

function discoEllipse(x_axis, y_axis, width, height){
    let r, g, b;
    r = random(255);
    g = random(255);
    b = random(255);
    strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127);
    ellipse(x_axis, y_axis, width, height);
}

function fuseTube(x_axis, y_axis, width, height, speed){
    let r, g, b;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    frameRate(speed);
    var rect = createSprite(x_axis, y_axis, width, height);
    rect.shapeColor = r, g, b;
    drawSprites();
}

function fuseBulb(x_axis, y_axis, width, height, speed){
    let r, g, b;
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    frameRate(speed);
    strokeWeight(2);
    stroke(random(0,255));
    fill(random(0,255));
    ellipse(x_axis, y_axis, width, height);
}

function discoTriangle(x1, y1, x2, y2, x3, y3, speed){
    let r, g, b;
    r = random(255);
    g = random(255);
    b = random(255);
    frameRate(speed);
    strokeWeight(2);
    stroke(r, g, b);
    fill(r, g, b, 127);
    triangle(x1, y1, x2, y2, x3, y3);
}

function tennisBackground(){
  noFill();
  stroke(255);
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25);
  stroke(0, 153, 255);
  line(0, height * 0.33, width, height * 0.33);
  stroke(255, 153, 0);
  rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
}

function mouseEffect(ri, b1, g1, rii, b2, g2){
    noStroke();
    rectMode(CENTER);
  let r1 = map(mouseX, 0, width, 0, height);
  let r2 = height - r1;

  fill(ri, b1, g1);
//   fill(237, 34, 93, r1);
  rect(width / 2 + r1 / 2, height / 2, r1, r1);

  fill(rii, b2, g2);
//   fill(237, 34, 93, r2);
  rect(width / 2 - r2 / 2, height / 2, r2, r2);
}

function tickle(){
    let message = 'tickle',font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,
  y;
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
  fill(0);
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}

function piano(){
    let rectWidth;
    noStroke();
    rectWidth = width / 4;
    let keyIndex = -1;
    if (key >= 'a' && key <= 'z') {
      keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
    }
    if (keyIndex === -1) {
      // If it's not a letter key, clear the screen
      background(230);
    } else {
      // It's a letter key, fill a rectangle
      randFill_r = Math.floor(Math.random() * 255 + 1);
      randFill_g = Math.floor(Math.random() * 255 + 1);
      randFill_b = Math.floor(Math.random() * 255 + 1);
      fill(randFill_r, randFill_g, randFill_b);
      let x = map(keyIndex, 0, 25, 0, width - rectWidth);
      rect(x, 0, rectWidth, height);
    }
}

function kaledioscope(stroke){
translate(width / 2, height / 2);
if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;
  
  if (mouseIsPressed) {
    for (let i = 0; i < 6; i++) {
      rotate(60);
      strokeWeight(stroke);
      line(mx, my, pmx, pmy);
      push();
      scale(1, -1);
      line(mx, my, pmx, pmy);
      pop();
    }
  }
}
}

function sphereAnimat3d(f1, f2, s1, s2, s3){
  rotateY(frameCount * f1);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 80; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 100,
        sin(frameCount * 0.001 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * f2);
      push();
      sphere(s1, s2, s3);
      pop();
    }
    pop();
  }
}

function cube3d(speedZ, speedx, speedy, length, width, height){
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);

  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * speedZ);
  rotateX(frameCount * speedx);
  rotateY(frameCount * speedy);
  specularMaterial(250);
  box(length, width, height);
  pop();

  translate(width / 4, 0, 0);
  ambientMaterial(250);
}

function sphere3d(speedZ, speedx, speedy, size1, size2){
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 250);
  push();
  rotateZ(frameCount * speedZ);
  rotateX(frameCount * speedx);
  rotateY(frameCount * speedy);
  specularMaterial(250);
  ambientMaterial(250);
  sphere(size1, size2);
  pop();
}

function drawCircle(x, radius, level) {
  const tt = (126 * level) / 4.0;
  fill(tt);
  ellipse(x, height / 2, radius * 2, radius * 2);
  if (level > 1) {  
    level = level - 1;  
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}
function DiscoCircleDraw(x, radius, level) {
  const tt = (126 * level) / 4.0;
  fill(tt, random(255), random(255));
  ellipse(x, height / 2, radius * 2, radius * 2);
  if (level > 1) {  
    level = level - 1;  
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}

function mouseGraphic(){
  let pg;

  pg = createGraphics(400, 250);

  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);
  noCursor();
}

function mouse2d(color1, color2){
  background(230);noStroke();
  rectMode(CENTER);
  fill(color1);
  // fill(244, 122, 158);
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(color2);
  // fill(237, 34, 93);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
}

function waveTail(){
  var t = 0;
  noStroke();
  fill(40, 200, 40);
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(mouseX, 0, width, -90 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -90 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(70 * PI * t + angle);
      const myY = y + 20 * sin(70 * PI * t + angle);

      ellipse(myX, myY, 10); // draw particle
    }
  }
  // declare t = 0; if want to get more in main file (remmove t=0 from also);
  t = t + 0.01; // update time
}

function generateOTP(startDigit){
  var digits = '0123456789';
  let OTP = startDigit+ '';
  for (let i = 0; i < 4; i++ ) {
      OTP += digits[Math.floor(Math.random() * 10)];
  }  
  console.log(OTP);
  return OTP;
    // see in console your otp;
}

function drawTool(strok){
  if(mouseIsPressed){
  strokeWeight(strok);
  stroke(0);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}

function createIframe(url, width, height){
  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", url);
  ifrm.style.width = width;
  ifrm.style.height = height;
  document.body.appendChild(ifrm);
}

function disabledVideo(url, width, height){
  var video = document.createElement("video");
  video.setAttribute("src", url);
  video.style.width = 200;
  video.style.height = 200;
  document.body.appendChild(video);
}

function mouseRect(){
  var rec;
  if(mouseIsPressed){
    rec = rect(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function rainDraw(keyCodeValue /* give 0 if not wanted to give eraser mode */){

  color1 = random(0, 255);
  color2 = random(0, 255);
  color3 = random(0, 255);
  
   if(mouseIsPressed){
        randomalpha = random(255);
        noStroke();
        
        fill(color1,color2,color3,randomalpha);
        ellipse(mouseX,mouseY,30,30);
        x=mouseY;
        y=mouseX;
  }
   else if (keyCode === keyCodeValue) {
        noStroke();
        fill('white');
        ellipse(mouseX,mouseY,40,40);
        x=mouseY;
        y=mouseX;
  }
  else if(keyCode !== keyCodeValue){
    // !<@#$$&*()> docuabm.wri(n)'/'
  }
}

function rainbowBrush(){

  colorMode(HSB);
  // background(frameCount % 360, 100, 100);
  if(mouseIsPressed){
   noStroke();
    stroke((5*frameCount) % 360, 40, 100);
    fill((5*frameCount) % 360, 100, 100);

    // ellipse(mouseX, mouseY, 30,30);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  colorMode(RGB);
}
function creativeBud(keyCodeValue){
  rainDraw(keyCodeValue);
  rainbowBrush();
}
function drawLine(strokevalue){
  
  if (mouseIsPressed) {
    strokeWeight(strokevalue);
    line(mouseX, mouseY, pmouseX, pmouseY);
}
}
function drawTriangle(){
  strokeWeight(2);
  stroke(0);
  fill(0);
  triangle(mouseX, mouseY-50, mouseX-50, mouseY+50, mouseX+50, mouseY+50);
}
function drawUpArrow(){
  strokeWeight(2);
  stroke(0);
  fill(0);
  triangle(mouseX, mouseY-50, mouseX-20, mouseY+50, mouseX+20, mouseY+50);
  rect(mouseX-5, mouseY+40, 10, 50);
}
function drawCirStar(){
 quad(mousePX);
}
function drawFlower(){
  // Set colors
  fill(0);
  stroke(127, 63, 120);

  // A design for a simple flower
  translate(350, 200);
  noStroke();
  for (let i = 100; i < 20; i ++) {
    ellipse(mouseX-200, mouseY-200, 30, 120);
    rotate(250);
  }
}
function reload(){
  location.reload();
}function replace(url){
  location.replace(url)
}function goToPreviousPg(){
  history.back();
}function goToCountedPg(number){
  history.go(-2);
}function createPassword(){
  document.write("<input type = password> </input>")
}
function createPasswordCheck(){
  document.write("Password: <input type=password id=myInput><br><br><input type=checkbox onclick=qwertyuiopasdfghjklmnbvcxz0123456789()>Show Password");
}
function qwertyuiopasdfghjklmnbvcxz0123456789() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function print(){
  window.print();
}

function hideScrollbar(){
  document.body.style.overflow = "hidden";
}

function showScrollbar(){
  document.body.style.overflow = "scroll";
}
function graph(colorValue, gap){
 for (var i = 0; i < width; i += gap) {
    stroke(colorValue);
  	line(i, 0, i, height);
  	line(width, i, 0, i);
  }
}

function mouseBlur(){
let cw, ch;
let rw, rh;
let numCols = 60;
let numRows = 60;
let d;
let b;

  cw = width / numCols;
  ch = height;
  rw = width;
  rh = width / numRows;

  for (cn = 0; cn < numCols; cn++) {
    for (rn = 0; rn < numRows; rn++) {
      let x = cn * cw;
      let y = rn * rh;
      rect(x, y, cw, rh);
      d = dist(mouseX, mouseY, x, y);
      b = map(d, 0, 70, 0, 255);
      fill(b);
    }
  }
}

function searchBox(){
  document.write("<input type = search placeholder = search> </input>");
}

function askLeave(text){
  var x = text;
  window.onbeforeunload = function(e) {
    return x;
  };
  window.onbeforeload = function(e) {
    return x;
  };
  window.onafterunload = function(e){
    return x;
  }
}

function detectBrowser(){
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+ "[object]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
// Internet Explorer 6-11
var isIE = /*$%^&*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;
var output = 'Detecting browsers:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isBlink: ' + isBlink + '<br>';
document.body.innerHTML = output;
}

function closeWindow() {
  let new_window =
      open(location, '_self');

  // Close this window
  new_window.close();

  return false;
}