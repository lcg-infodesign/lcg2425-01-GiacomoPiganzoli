function setup(){
  createCanvas(windowWidth, windowHeight);
  noLoop()
  rectMode(CENTER);
  textFont("Helvetica");
}

//Funzione del cerchio (x-xc)^2+(y-yc)^2=r2  y=sqrt((x-xc)^2+r^2)+yc


function draw() {
  background("#1B080A");
  let diametro = windowHeight/18;
  let xC = windowWidth/2-4*diametro;
  let yC = diametro*3;
  fill("#EFF0F2")
  strokeWeight(0);
  rect(windowWidth/2, windowHeight/2, diametro*13,windowHeight);
  fill("#F06757")
  strokeWeight(0);
  rect(windowWidth/2, windowHeight/2, diametro*10,diametro*14);
  let n=3;
  for(let r=0; r<13; r++){
      for(let c=0; c<9; c++){
      //xi yi: Coordinate iniziali
      let xi = random(-diametro / 2, diametro / 2);
      let yi = sqrt((diametro / 2) * (diametro / 2) - xi * xi);
      let pi=random(0,1)
      if(pi<0.5){
          yi=-yi;
      }
      xi += xC;
      yi += yC;
      //x1 y1: Coordinate del primo punto
      let x1
      let y1
  
      //Ciclo for
      for(i=0; i<n; i++){
      //x2 y2: coordinate del secondo punto
      let x2 = random(-diametro / 2, diametro / 2);
      let y2 = sqrt((diametro / 2) * (diametro / 2) - x2 * x2);
      let p2=random(0,1)
      if(p2<0.5){
          y2=-y2;
      }
      x2 += xC;
      y2 += yC;

      stroke("#1B080A");
     strokeWeight(diametro/60);
      if(i==0){
          line(xi,yi,x2,y2);
      }else if(i==n-1){
        line(x1,y1,xi,yi);
      }else{
          line(x1,y1,x2,y2)
      }
      x1=x2;
    y1=y2;
      }
      xC += diametro;
      n += 1;
  }
  xC = windowWidth/2-4*diametro;
  yC += diametro;
}
strokeWeight(0)
fill("#EFF0F2")
textSize(diametro/2.6);
textStyle(BOLD);
text("Untitled - Werkstatt edition kroll", diametro/3, 2*diametro+diametro/2)
textSize(diametro/2.8);
textStyle(ITALIC);
text("Georg Ness, Germany 1970", diametro/3, 2*diametro+diametro*1.2)
}
