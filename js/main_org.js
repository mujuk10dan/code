$(document).ready(function(){
		init();
		var s = skrollr.init({});
});
history.scrollRestoration = "manual"

function c(p){
	console.log(p)
}
function init(){
	var step=1;
	var particleCount =200;
	var step_count = 20;
	var start_ratio=20; //전체 백분율중 어디서에서부터 시작할지

	start_ratio=$('body').height()*(start_ratio/100);
	//c($('body').height()+":"+start_ratio);
	var count=1;
	$(window).bind("scroll",function(){
		var tt=0;
		var t=Math.floor((($(window).scrollTop()-start_ratio) /(($(document).height()-start_ratio) - $(window).height())) * 100);
		var n=1;
		var o=Math.floor(particleCount/(step_count)) //14
		c(o+":"+t)
		for(i=0; i<step_count; i++){
			if(t>=i*o && t<=(i+1)*o ){
					if(t<0){
						t=0;
					}
					tt=(100*(t-(o*i)))/o
						$('#plastics_bg .p[data-num=item'+i+']').css({'top':tt+'%'})//.attr({'data-log':t+":"+f+":"+o})
			}
		}
		if(t==0 || t<0){
			$('#plastics_bg .p').stop().css({'top':'-25%'})//.attr({'data-log':t+":"+f+":"+o})
		}
	})
	var lineCount = Math.floor(particleCount/step_count)
	var pingpong=1;
	for(j=0; j<step_count; j++){
		var margin=-100*step/(step_count) /3;
		margin=step*-4;
		if(pingpong==1){pingpong=0.5;}else{pingpong=1;}
		for(i=0; i<lineCount; i++){
			if(Math.random()>0.5){var plus=-1;}else{var plus=1;}
			var rotateDeg = Math.random()*20*plus;
			var speed = Math.random()+1;
			var scatter = Math.random()*5*plus;
			//var scatter = 0;
			var RL = 100*(lineCount-(i+pingpong))/lineCount//+Math.random()*4*plus;
		var temp = "<div class='p' data-num='item"+j+"' style='";
		temp+="transition:all "+speed+"s ease; ";
		temp+="transform:rotate("+rotateDeg+"deg); ";
		temp+="margin-top: calc("+ margin +"vh + 0px + "+scatter+"%); ";
		temp+="left:"+RL+"%'>";
		for(k=0; k<5; k++){
			var imgNum=Math.floor(Math.random()*5)+1;
			temp+="<img src='./images/"+imgNum+".svg' style='";
			temp+="margin-left:"+Math.random()*20*plus+"vw; ";
			temp+="margin-top:"+Math.random()*10*plus+"vw; transform: translate(-50%, -50%) ";
			temp+="scale("+(Math.random()*2)+"); "
			temp+="'>";
		}
		temp+="</div>";
		$('#plastics_bg').append(temp)
		}
		step++;
	}
}
