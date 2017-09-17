var Carousel = (function(undefind){
	function changeImage(arrImgs,curImg){
		$('#Carousel-show>.rotate').each(function(i,v){
			$(v).css({'transition-delay':i*speed+'ms'});
		});//每次触发改变图片都会为下一个图片增加延迟

		var $img2 = $('#Carousel-show').find('.rotate').find('a:nth-child(2)');
		$('#Carousel-show').find('.rotate').find('a:nth-child(2)').css('background-image','url('+arrImgs[curImg]+')')
		$('#Carousel-show').find('.rotate').css({'transition-property':'all','transition-duration':'1s'}).addClass('Carousel-show');
		//运行时将下一张要显示的图片修改成要显示的，并且添加动画
	}
	function end(){
		on = true;//打开开关
		var $img2 = $('#Carousel-show').find('.rotate').find('a:nth-child(2)');
		$('#Carousel-show').find('.rotate').find('a:nth-child(1)').css({'background-image':''+$img2.css('background-image')});
		$('#Carousel-show').find('.rotate').css({'transition':'none'});
		$('#Carousel-show').find('.rotate').removeClass('Carousel-show');
		//当最后一个图片块移动结束之后，将位置翻转回去，并且清除每个块里面的class，(结束时，把旋转的两张图片，返回来，变成没有旋转的样子，并且，将他们的图片资源调换，看起来就像是没有改变，实际已经改变了他们位置)
	}
	function addEnd(obj,fn){
		obj.addEventListener('WebkitTransitionEnd',fn,false);
		obj.addEventListener('transitionend',fn,false);
	}//transition结束检测函数
	var curImg = 0;
	var on = true;
	var zIndex = 0;	
	var speed = 50;
	return function(config){
		$(config.container).html(
		'<div id="box">\
			<div id="Carousel-show">\
			</div>\
			<div id="Carousel-option">\
			</div>\
		</div>');

		var arrImgs = config.arrImages;
		var iLength = 20;
		var iWidth = $('#Carousel-show')[0].offsetWidth/iLength;
		$('#Carousel-show').css({'height':config.size.height+'px','width':config.size.width+'px'})

		for(var i=0;i<iLength;i++){
			i<iLength/2?zIndex=i:--zIndex;
			$('#Carousel-show').append(
				"<div style='width:"+iWidth+"px;z-index:"+zIndex+"' class='rotate'>\
					<a style='background-position:-"+i*iWidth+"px;background-image:url("+arrImgs[0]+");'></a>\
					<a style='background-position:-"+i*iWidth+"px;'></a>\
					<span></span>\
					<span></span>\
				</div>");
		}
		$('#Carousel-show').append('\
			<div class="Carousel-switch">\
				<span class="switch-left">&lt;</span>\
				<span class="switch-right">&gt;</span>\
			</div>');

		//增加点击按钮的数字
		for(var i in arrImgs){
			$('#Carousel-option').append('<span>'+(Number(i)+1)+'</span>');
		}
		$('#Carousel-option').find('span:nth-child(1)').addClass('Carousel-active');

		//增加点击事件
		$('#Carousel-option>span').click(function(){
			if(on){
				$(this).addClass('Carousel-active').siblings().removeClass('Carousel-active');
				curImg = $(this).index();
				on = false;
				addEnd($('#Carousel-show>div:last-child').prev('div')[0],end);
				changeImage(arrImgs,$(this).index());
			}	
		});
		$('#Carousel-show>.Carousel-switch').find('span').click(function(){
			console.log($(this).is(':nth-of-type(1)'));
			if(!$(this).is(':nth-of-type(1)')){
				curImg++;
				if(curImg>=arrImgs.length)
					curImg=0;
			}else{
				curImg--;
				if(curImg<0)
					curImg=arrImgs.length-1;
			}
			if(on){
				on = false;
				$('#Carousel-option>span').filter(':eq('+curImg+')').addClass('Carousel-active').siblings().removeClass('Carousel-active');
				addEnd($('#Carousel-show>div:last-child').prev('div')[0],end);
				changeImage(arrImgs,curImg);
			}
		});
	}
})();