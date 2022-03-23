function c(p){
	console.log(p)
}
function init(){
	var step=1;
	var particleCount =400;
	var start_ratio=0; //전체 백분율중 어디서에서부터 시작할지
	var trace = 80;
	start_ratio=$('body').height()*(start_ratio/100);
	var _h = $('body').height()
	$('#plastics_bg .particles').height($('body').height());
	//c($('body').height()+":"+start_ratio);
	var count=1;
//$('#plastics_bg .particles').addClass('add_motion')
	$(window).bind("scroll",function(){
		var sc=Math.floor((($(window).scrollTop()-start_ratio) /(($(document).height()-start_ratio) - $(window).height())) * 100);
		$('#plastics_bg .particles').css({'top':_h*(sc/100)+'px','margin-top':-_h+600+'px'})
		$('#plastics_bg2 .stacked').css({'top':(-sc/100*trace)+'%'});
		$('#plastics_bg .particles .p').each(function(e){
			$(this).css({'transform':'rotate('+($(this).attr('data-rotate')*(sc/100))+'deg)'})
		})
	}).trigger('scroll')
	//$('#plastics_bg .particles').css({'margin-top':-_h+'px'})
	setTimeout(function(){
		$('#plastics_bg .particles').addClass('add_motion')
	},500)
	for(j=0; j<particleCount; j++){
		if(Math.random()>0.5){var plus=-1;}else{var plus=1;}
		var rotateDeg = Math.random()*20*plus;
		var speed = Math.random()+1;
			//var scatter = 0;
		var imgNum=Math.floor(Math.random()*5)+1;2
		var temp = "<div class='p' data-rotate='"+Math.floor(Math.random()*1720)+"' style='";
		temp+="transition:all "+speed+"s ease; ";
		//temp+="transform:rotate("+rotateDeg+"deg);";
		temp+="'>";
		temp+="<img src='./images/"+imgNum+".svg' style='";
		temp+="transform: translate(-50%, -50%); ";
		temp+="scale("+(Math.random()*2)+"); z-index:"+Math.floor(Math.random()*10)+";"
		temp+="'>";
		temp+="</div>";
		$('#plastics_bg .particles').append(temp)
		$('#plastics_bg2 .stacked').append(temp)
		$('#plastics_bg2 .stacked').append(temp)
		$('#plastics_bg2 .stacked').append(temp)
		$('#plastics_bg2 .stacked').append(temp)
	}
	$('#plastics_bg .particles .p').each(function(e){
		$(this).css({'top': _h*(Math.random())+'px','left':Math.random()*100+'vw'})
	})
	$('#plastics_bg2 .stacked .p').each(function(e){
		$(this).css({'top': trace*(Math.random())+'%','left':Math.random()*100+'vw','transform':'rotate(180deg)'})
	})
}
