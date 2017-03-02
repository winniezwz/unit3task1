
function setup() {
  //set Canvas to size of window
  createCanvas(windowWidth, windowHeight);

  //Intoduction Page
    background(250, 150, 150);
    
  //create Button object 0 
  button0 = createButton('THIS IS JUST TO SHOW I KNOW HOW TO CREATE A BOTTON');
  button0.position(25, 0);
  //Load Data when Button 0 is Pressed
  button0.mousePressed(function() {
    //YEAR
    var y = year();
    text("Year: \n" + y, 105, 50);
    
    //MONTH
    var m = month();
    text("Month: \n" + m, 155, 50);
    
    //DATE
    var d = day();
    text("Day: \n" + d, 205, 50);
    
    //HOUR
    var h = hour();
    text("Hour:\n" + h, 105, 80);
    
    //MINUYE
    var m = minute();
    text("Minute: \n" + m, 155, 80);
    
    //SECOND
    var s = second();
    text("Second: \n" + s, 205, 80);
    
  })
    
  //create Button object 1 (London)
  button1 = createButton('London');
  button1.position(25, 20);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  //create Button object 2 (New York)
  button2 = createButton('New York');
  button2.position(85, 20);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20York%2C%20New%20York%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 3 (tokyo)
  button3 = createButton('Tokyo');
  button3.position(156, 20);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tokyo%2C%20Tokyo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 4 (beijing)
  button4 = createButton('Beijing');
  button4.position(210, 20);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22beijing%2C%20china%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 5 (Melbourne)
  button5 = createButton('Melbourne');
  button5.position(280, 20);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Melbourne%2C%20Melbourne%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  
  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;

// HOW to get avarage of tempD2H+tempD2L?!?!
//var tempforcast1 = ((tempD2H+tempD2L)/2);
 



//print data to the console
//print(temp);
//print(windSpeed);
print(tempD2H);
print(tempD2L);
//print(tempforcast1);


  background(250,150,150);

  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
  textSize(20);
  textFont("COURIER");
  textAlign(LEFT);
     
    fill(194, 20, 102)
    text(windSpeed, 30, windowHeight - 50);
    fill(255);
    text(temp, 30, windowHeight - 30);
    fill(170, 109, 167);
    text(windDirection, 30, windowHeight - 10);
    // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  fill(194, 20, 102);
  noStroke();
  triangle(windowWidth / 4, windowHeight / 4, windowWidth / 2, windowHeight / 2, windSpeed * 10, windSpeed * 10);
  
   //create ellipse and set width and height of the ellipse to temp data
  fill(255);
  strokeWeight(4);
  stroke(255);
  ellipse(windowWidth / 4, windowHeight / 2, temp * 2, temp * 2);
  
  
  //create rect and set rotation of rect to windDirection
  translate(windowWidth / 2, windowHeight / 2);
  fill(170, 109, 167);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  rect(0, 0, 150, 50);
  



}

