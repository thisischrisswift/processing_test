<!Doctype: HTML w/ Processing>

<html>

  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Processing Demo</title>
      <script type="text/javascript" src="js/processing.js"></script>
  </head>
  
  <body>
    <h1>Granada High Tutorial</h1>
    <p>Processing demo</p>
    
    <script type="text/processing">
    
      Ball[] ball;

      void setup(){
        size(700, 600);
        frameRate(100);
        ball = new Ball[100];
        for(int i = 0; i < ball.length; i++){
            ball[i] = new Ball();
        }
      }



      void draw(){
          background(155,0,0);
            for(int i = 0; i < ball.length; i++){
                ball[i].display();
            }

      }
      class Ball{

          float x;
          float y;
          float Vx;
          float Vy;
          float r,g,b,o;
          float d;

          Ball(){
              x = random(width);
              y = random(height);
              Vx = random(-5,5);
              Vy = random(-5,5);
              r = random(255);
              g = random(255);
              b = random(255);
              o = random(255);
              d = random(30) + 15;
          }

          void display(){
              fill(r,g,b,o);
              ellipse(x,y,d,d);
              x += Vx;
              y += Vy;
              if(x > width || x < 0){
                  Vx *= -1;
              }
              if(y > height || y < 0){
                  Vy *= -1;
              }
          }
    }


    </script>
    <canvas id="sketch" style="border: 1px solid black;"></canvas>
    
  </body>
  
</html>
