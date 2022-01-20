var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img) {
        image =Img;
        image.toScaleWidth(700);
        image.toScaleHeight(510);
        image.set({
            top:0,
            left:0
        });
    });

	canvas.add(image);
}


function soundblast(){
	x.play();
}
