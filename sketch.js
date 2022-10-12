function setup() {
	createCanvas(windowWidth,windowHeight);
	background(0,0,0);
}

function draw() {
	background(0)
	fill(0,0,0,0);
	var mx = mouseX%256+mouseY%256 //增加滑鼠XY軸移動圖案放大縮小的效果
    for(var j=-1;j<int(height/(50));j++)//用J變數代替剛剛上面寫的第二排程式碼
  {
        for(var i=-1;i<int(width/(50));i++)
      {
		stroke(255,0,206)
		ellipse(25+i*50,25+j*50,mx);
		stroke(255,0,0)
		rect(0+50*i,0+j*50, mx*2);
		stroke(0,255,0)
		ellipse(i*50+50,50+j*50,mx*0.75)

	}
	
}
}