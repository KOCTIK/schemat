
 var canvas = new fabric.StaticCanvas('canvas');
 var CanvasWidth = canvas.width;
 var CanvasHeight = canvas.height;
  
//---------------------------------------------------------------------------------------------------
//start of animation
 var Counter = (function () {
							var counter = 1;
							return function () {return counter++;}
						 })();
						 
 function schemat(){
		var counter = Counter();
		switch(counter){
			case 1:
				   drawText();;
				   break;
			case 2:
				   animateDrawImage();;					
				   break;
			case 3:
				   startDrowBusStop();				
				   break;
			case 4:
				   way();					
				   break;
			case 5:			
				   animateBus();	
				   break;
			case 6:						
				   break;		
			default:
				   break;	
	   }
}
schemat();
//---------------------------------------------------------------------------------------------------
 //step 1 - text 'Schemat dojazdu'
 function drawText(){
	 var text = new fabric.Text('Schemat dojazdu', { left:CanvasWidth/2, top: CanvasHeight/2});
 
 text.animate('fontSize', 40, {     
	onChange: canvas.renderAll.bind(canvas),
    duration: 3000,
    easing: fabric.util.ease.ease,
	from: 70,
 });
	 
 text.animate('top', CanvasHeight/20, {     
	onChange: canvas.renderAll.bind(canvas),
    duration: 3000,
    easing: fabric.util.ease.ease,	
 });
	
 text.animate('left', CanvasWidth/2, {     
	onChange: canvas.renderAll.bind(canvas),
    duration: 3000,
    easing: fabric.util.ease.ease,	
 });
	canvas.add(text);	
	setTimeout(schemat,3000);
 }
 //---------------------------------------------------------------------------------------------------
 // step 2 - images
 function drawImg(urlAdres, left, top, scale){		
		
		fabric.Image.fromURL(urlAdres, function(oImg) {
		    oImg.left = CanvasWidth/2;
		    oImg.top = CanvasHeight/2;  
		    oImg.scale(0.5);		    
		   
			oImg.animate('scaleX', 0.3, {     
						onChange: canvas.renderAll.bind(canvas),
						duration: 3000,
						easing: fabric.util.ease.easeInCubic,	
			});		 
			oImg.animate('scaleY', 0.3, {     
						onChange: canvas.renderAll.bind(canvas),
						duration: 3000,
						easing: fabric.util.ease.easeInCubic,	
			});		 
			oImg.animate('left', left, {     
						onChange: canvas.renderAll.bind(canvas),
						duration: 3000,
						easing: fabric.util.ease.easeInCubic,	
			});		 
			oImg.animate('top', top, {     
						onChange: canvas.renderAll.bind(canvas),
						duration: 3000,
						easing: fabric.util.ease.easeInCubic,	
			});			
			canvas.add(oImg);
		}); 
	
		setTimeout(animateDrawImage,3000);
 }
 
 var imageCounter = (function () {
							var counter = 1;
							return function () {return counter++;}
						 })();
						 
 function animateDrawImage(){
		var counter = imageCounter();
		switch(counter){
			case 1:
				   drawImg('image/Dworzec.jpg', (CanvasWidth/10)*9, CanvasHeight/8);
				   break;
			case 2:
				   drawImg('image/sokrates1.jpg', CanvasWidth/10, CanvasHeight/7);					
				   break;
			case 3:
				   drawImg('image/pryzma.jpg', CanvasWidth/5.7*2, CanvasHeight-100);				
				   break;
			case 4:
				   drawImg('image/zygzak.jpg', CanvasWidth/5.7*3, CanvasHeight-100);					
				   break;
			case 5:			
				   drawImg('image/1.Zascianek.jpg', CanvasWidth/5.7*4, CanvasHeight-100);	
				   break;
			case 6:	
				   schemat();
				   break;		
			default:
				   break;	
	   }
} 
//---------------------------------------------------------------------------------------------
  //step 3 - bus stop
 function drawBusStop(text,left,top){  
 
	var text = new fabric.Text(text, { 
										left:left, 
										top: top + 45,
										fontSize: 12,
										textAlign: 'center',
										fill: '#00007f',
										scaleX: 0,
										scaleY: 0
										});
										
			 text.animate('scaleX', 1, {     
				onChange: canvas.renderAll.bind(canvas),
				duration: 700,
				easing: fabric.util.ease.ease		
			 });
			 
			 text.animate('scaleY', 1, {     
				onChange: canvas.renderAll.bind(canvas),
				duration: 700,
				easing: fabric.util.ease.ease,
			});
	 
    canvas.add(text);  
	
	fabric.Image.fromURL('image/bus_stop.png', function(oImg) {
		
			oImg.set({left:left, top:top}); 			
      
			oImg.animate('scaleX', 0.5, {     
				onChange: canvas.renderAll.bind(canvas),
				duration: 700,
				easing: fabric.util.ease.ease	
			});

			oImg.animate('scaleY', 0.5, {     
				onChange: canvas.renderAll.bind(canvas),
				duration: 700,
				easing: fabric.util.ease.ease	
			});
					
   canvas.add(oImg);   
  });    
 }   
 
 function startDrowBusStop(){
	 drawBusStop('1Maja-Dworzec\nGlówny', CanvasWidth/10*9, CanvasHeight/8+130);
	 drawBusStop('Sosnowskiego\nWiejska', CanvasWidth/10, CanvasHeight/7+130);
	 drawBusStop('Sosnowskiego\nPolitechnika', CanvasWidth/5.7*2-160, CanvasHeight-100-40);
	 setTimeout(schemat,2000);
} 
 //--------------------------------------------------------------------------------------------------
  //step 4 - lines that connect the bus stops
  
  var wayCounter = (function () {
							var counter = 1;
							return function () {return counter++;}
						 })();									 
					 
	function drawWay(x1,y1,xy,par){		
		var line = new fabric.Line([x1, y1, x1, y1],{fill: '#00007f'})
			
			line.animate(xy,par,{     
			onChange: canvas.renderAll.bind(canvas),
			duration: 3000,
			easing: fabric.util.ease.ease
		    });
			
		canvas.add(line);				
	}	
		
	function way(){
	 drawWay(CanvasWidth/10*9,CanvasHeight/8+130+60,'y2',CanvasHeight/8+130+60+80);
     drawWay(CanvasWidth/2,CanvasHeight/8+130+60+80,'x2',CanvasWidth/10*9);
	 drawWay(CanvasWidth/10+30,CanvasHeight/7+130,'x2',CanvasWidth/2);
	 drawWay(CanvasWidth/2,CanvasHeight/8+130+60+80,'y2',CanvasHeight/7+130);	 
	 drawWay(CanvasWidth/2,CanvasHeight/8+130+60+80,'x2',CanvasWidth/5.7*2-160);
	 drawWay(CanvasWidth/5.7*2-160,CanvasHeight-100-40-30,'y2',CanvasHeight/8+130+60+80);
	 setTimeout(schemat,3000);
	}	
//---------------------------------------------------------------------------------------------
  //step 5 - bus
var busCounter = (function () {
							var counter = 0;
							return function () {return counter++;}
						 })();						 
		
function drawBus(left, top, par, goTo){
	
	fabric.Image.fromURL('image/bus_1.png', function(oImg) {
		
			oImg.scale(0.5).set({left:left, top:top});    
					
			oImg.animate(par, goTo, {     
				onChange: canvas.renderAll.bind(canvas),
				duration: 3000,
				easing: fabric.util.ease.ease	
			});      					
   canvas.add(oImg);   
  });   
  setTimeout(animateBus,3000);
}

function remove(loop, num){
	for(var i=0; i < loop; i++){
		canvas.remove(canvas.item(num));
	}
}

function animateBus(){	
		var counter = busCounter();		
		
	switch(counter){
		case 0:					
				drawBus(CanvasWidth/10*9,CanvasHeight/8+130+60+40);	
				wiejska(CanvasWidth/10*9,CanvasHeight/8+130+60+40-30);				
				break;
		case 1:						
				drawBus(CanvasWidth/10*9,CanvasHeight/8+130+60+40,'top',CanvasHeight/8+130+60+80);	
				wiejska(CanvasWidth/10*9,CanvasHeight/8+130+60+40-30,'top',CanvasHeight/8+130+60+80-30);
				remove(4,18);
				break;
		case 2:				
				drawBus(CanvasWidth/10*9,CanvasHeight/8+130+60+80,'left',CanvasWidth/2);	
				wiejska(CanvasWidth/10*9,CanvasHeight/8+130+60+80-30,'left',CanvasWidth/2);
				remove(4,18);							
				break;	
		case 3:	
				drawBus(CanvasWidth/2,CanvasHeight/8+130+60+80,'top',CanvasHeight/7+130);	
				wiejska(CanvasWidth/2,CanvasHeight/8+130+60+80-30,'top',CanvasHeight/7+130-30);
				remove(4,18);					
				break;
		case 4:	
				drawBus(CanvasWidth/2,CanvasHeight/7+130,'left',CanvasWidth/10+30+38);	
				wiejska(CanvasWidth/2,CanvasHeight/7+130-30,'left',CanvasWidth/10+30+38);
				remove(4,18);					
				break;				
		case 5:			
				drawBus(CanvasWidth/10*9,CanvasHeight/8+130+60+40);	
				drawNamber('15',CanvasWidth/10*9,CanvasHeight/8+130+60+40-30);					
				break;	
		case 6:					
				drawBus(CanvasWidth/10*9,CanvasHeight/8+130+60+40,'top',CanvasHeight/8+130+60+80);	
				drawNamber('15',CanvasWidth/10*9,CanvasHeight/8+130+60+40-30,'top',CanvasHeight/8+130+60+80-30);
				remove(2,22);
				break;	
		case 7:
				drawBus(CanvasWidth/10*9,CanvasHeight/8+130+60+80,'left',CanvasWidth/5.7*2-160);	
				drawNamber('15',CanvasWidth/10*9,CanvasHeight/8+130+60+80-30,'left',CanvasWidth/5.7*2-160);
				remove(2,22);			
				break;	
		case 8:
				drawBus(CanvasWidth/5.7*2-160,CanvasHeight/8+130+60+80,'top',CanvasHeight-100-40-30-15);	
				drawNamber('15',CanvasWidth/5.7*2-160,CanvasHeight/8+130+60+80-30,'top',CanvasHeight-100-40-30-15-30);
				remove(2,22);								
				break;	
		case 9:									
				break;	
		default:
				break;
	}			
} 
//---------------------------------------------------------------------------------------------
//step 6 - number of bus
function drawNamber(number, left, top, arg, goTo){
	var rect = new fabric.Rect({width:20, height:20, fill:'#931819', rx:5});
	var text = new fabric.Text(number,{fill:'white', fontSize:20});
	var numberGroup = new fabric.Group([rect, text],{left:left, top:top});

	if(arg == undefined ){
		numberGroup.animate('opacity', 1, {     
					onChange: canvas.renderAll.bind(canvas),
					duration: 2000,
					easing: fabric.util.ease.ease,
					from:0.0
				}); 	
	}
		numberGroup.animate(arg, goTo, {     
					onChange: canvas.renderAll.bind(canvas),
					duration: 3000,
					easing: fabric.util.ease.ease,				
				}); 
		canvas.add(numberGroup);
}

function wiejska(left, top, arg, goTo){
	if(arg === 'left'){
		drawNamber('10', left+25, top, arg, goTo+25);
		drawNamber('9', left, top, arg, goTo);
		drawNamber('5', left-25, top, arg, goTo-25);
	}else{
		drawNamber('10', left+25, top, arg, goTo);
		drawNamber('9', left, top, arg, goTo);
		drawNamber('5', left-25, top, arg, goTo);
		}
}


 
 
 
