
canvas=new fabric.Canvas("mycanvas")
ball_y=0
ball_x=0
hole_y=450
hole_x=700
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_opj=Img
		hole_opj.scaleToWidth(50)
		hole_opj.scaleToHeight(50)
		hole_opj.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_opj)
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
		ball_opj=Img
		ball_opj.scaleToWidth(50)
		ball_opj.scaleToHeight(50)
		ball_opj.set({
			top:ball_y,
			left:ball_x
		})
		canvas.add(ball_opj)
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_opj)
		console.log("you have hit the goal")
		document.getElementById("hd3").innerHTML="you have hit the goal"
		document.getElementById("mycanvas").style.borderColor="red"

	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=5){
			ball_y=ball_y-block_image_height
			canvas.remove(ball_opj)
			new_image()
		}
	} 

	function down()
	{
		if(ball_y<=400){
			ball_y=ball_y+block_image_height
			canvas.remove(ball_opj)
			new_image()
		}
	}

	function left()
	{
		if(ball_x >5)
		{ball_x=ball_x-block_image_width
			canvas.remove(ball_opj)
			new_image()
	}
}

	function right()
	{
		if(ball_x <=720)
		{
			ball_x=ball_x+block_image_width
			canvas.remove(ball_opj)
			new_image()
		}
	}
	
}