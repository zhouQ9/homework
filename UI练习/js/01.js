$(function() {
				var n = 0;
				$(".radiu li").eq(0).css("background","#333");				
				var timer=setInterval(bannershow, 5000);
				$(".radiu li").on("mouseenter",pause);
				$(".radiu li").on("mouseleave",resume);
				
				function bannershow() {
					var aa = parseInt($(".pic").css("left"));
					if (aa == -10000){
						$(".baby").css("left", "0px");					
					} 
					else{
						n=(n+1)%4;
						$(".radiu li").css("background","white");
						$(".radiu li").eq(n).css("background","#333");
						$(".pic").animate({
							"left": aa - 1800 + 'px'
						}, 1500);						
					}
					
				}
				
				function pause(){
					clearInterval(timer);
					n=parseInt($(this).attr("nn"));
					$(".radiu li").css("background","white");
					$(".radiu li").eq(n).css("background","#333");
					$(".baby").css("left", -1800*n+'px');
				}
				
				function resume(){
					timer=setInterval(bannershow, 5000);
				}
		})