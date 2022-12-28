var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
// var myRec = new p5.SpeechRec();
// var result

// //宣告所有資訊需要使用list

// //宣告所有花的資訊，需要使用list紀錄

// var positionListX =[]  //所有花的X軸位置，List串列，array陣列
// var positionListY =[]  //所有花的Y軸位置
// var clrList=[]      //所有花瓣顏色
// var clr_rList = []  //所有花圓心顏色
// var sizeList =[]  //所有花的大小

// let handpose;
// let video;//顯示影像
// let predictions = [];
// let pointerX, pointerY, pointerZ;
// let pointerX8,pointerY8,pointerZ8,pointerX4,pointerY4,d  //後面變數名稱8代表食指最上端，4代表大拇指的最上端。大寫的X、Y、Z手指的座標，d代表為4與8點的距離 z為往前往後
// let pointerX12,pointerY12,pointer20,pointerY20  //後面變數名稱有12代表中指最上端，20代表無名指的最上端。大寫的X、Y、Z手指所在的座標


function preload(){
  song =loadSound("We Wish You A Merry Christmas - DJ Williams.mp3");
}
function setup() {
  createCanvas(windowWidth,  windowHeight);
  
music_btn = createButton("音樂播放")
music_btn.position(14,14)//按鈕位置
music_btn.size(400, 100);//按鈕大小
music_btn.style('background-color', 'purple');//按鈕背景顏色
music_btn.style('font-size', '42px');
music_btn.style('color', 'white');
music_btn.mousePressed(music_btn_pressed)
mouse_btn = createButton("停止播放")
  mouse_btn.position(420,14)
  mouse_btn.size(400, 100);
  mouse_btn.style('background-color', 'green');
  mouse_btn.style('font-size', '42px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)
  Speech_btn = createButton("語音辨識(動/不要動)")
  Speech_btn.position(840,14)
  Speech_btn.size(400, 100);
  Speech_btn.style('background-color', 'black');
  Speech_btn.style('font-size', '42px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)

//   music_btn = createButton("音樂跳舞")
// music_btn.position(10,10)
// music_btn.size(350, 100);
// music_btn.style('background-color', 'black');
// music_btn.style('font-size', '44px');
// music_btn.style('color', 'white');
// music_btn.mousePressed(music_btn_pressed)

// mouse_btn = createButton("滑鼠跳動")
//   mouse_btn.position(420,10)//按鈕大小
//   mouse_btn.size(400, 100);//按鈕大小
//   mouse_btn.style('background-color', 'black');
//   mouse_btn.style('font-size', '50px');
//   mouse_btn.style('color', 'white');//字體顏色
//   mouse_btn.mousePressed(mouse_btn_pressed)

  

  

}

function draw() {
  background(250,240,245)//顏色範圍(R,G,B)

	fill(54,54,54)
	rect(194,210,212,250,30)
	fill(54,54,54)
	ellipse(300,225,212,200)
	fill(255,235,205)
	ellipse(300,250,185,200)//臉皮
  
	ellipseMode(RADIUS);
  fill(255);
  ellipse(255+mouseX/150, 250, 20, 20);
  ellipseMode(CENTER);
  fill(77,31,0);
  ellipse(255+mouseX/150, 250, 25, 25);
	fill(255);
  ellipse(255+mouseX/150, 248, 10, 10)
	fill(255);
  ellipse(248+mouseX/150, 255, 5, 5)
	noFill();
  curve(200, 310, 235, 233, 275, 233, 300, 310)//左眼
	
	ellipseMode(RADIUS);
  fill(255);
  ellipse(345+mouseX/150, 250, 20, 20);
  ellipseMode(CENTER);
  fill(77,31,0);
  ellipse(345+mouseX/150, 250, 25, 25);
	fill(255);
  ellipse(345+mouseX/150, 248, 10, 10)
	fill(255);
  ellipse(352+mouseX/150, 255, 5, 5)
	fill(100)
	ellipse(369+mouseX/150,225,1,1)
	noFill();
  curve(300, 310, 325, 233, 365, 233, 400, 310)//右眼
	
 
	
	fill(255,218,185);
	triangle(290,280,300,260,310,280);//鼻子
	//noFill();
  //curve(300, 50, 330, 300, 270, 300, 300, 50);//嘴巴
	fill("#A52A2A");
 ellipse(300+mouseX/150,318,80,40);//嘴巴
	
	fill(54,54,54)
	curve(100,800,200,200,320,150,500,300)//左瀏海
	fill(54,54,54)
	curve(170,320,320,150,395,250,170,100)//右瀏海

	//身體
	fill(255,235,205)
	rect(275,348,50,30)
	fill(250,182,193)
	rect(180,370,240,270,80)
	fill(255,250,205)
	ellipse(300,400,20,20)
	ellipse(300,450,20,20)



}

//
function music_btn_pressed(){
  song.play()
  songIsplay = true
  amp=new p5.Amplitude()
  music_btn.style('background-color', 'purple');
  mouse_btn.style('background-color', 'green');
  Speech_btn.style('background-color', 'black');
  }
  function mouse_btn_pressed(){
  song.pause()
      songIsplay = false
      music_btn.style('background-color', 'purple');
      mouse_btn.style('background-color', 'green');
      Speech_btn.style('background-color', 'black');
  
  }
function Speech_btn_pressed(){
  music_btn.style('background-color', 'purple');
  mouse_btn.style('background-color', 'green');
  Speech_btn.style('background-color', 'black');

  function Speech_btn_pressed(){
    myRec.onResult = showResult;
    myRec.start();  

    function showResult()
	{
		if(myRec.resultValue==true) {
			// background(192, 255, 192);
			// text(myRec.resultString, width/2, height/2);
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        textStyle("italic")
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      if(myRec.resultString==="跳舞")
      {
        music_btn_pressed()
      }
      if(myRec.resultString==="不要跳")
      {
        // song.pause()
        // mosueIsplay = true
        // songIsplay = false
          mouse_btn_pressed()
        }
		}
	}
  
  }
  
}
