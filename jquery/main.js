$(function(){

//商品搜索
	var $hide_div = $(".hide_div");
 $(".hide_click").hover(function(){
 	$hide_div.slideDown(700);
 },function(){
 	$hide_div.slideUp(700);
 });

 $("#search").hover(function(){
 	$("#search input,#search button").addClass("search");
 	$("#search button").css("border-left","none");
 },function(){
 	$("#search input,#search button").removeClass("search");
 });

$("#search input").focus(function(){
	$("#search_div1,#search_div2").css("display","none");
 	$("#search input,#search button").addClass("click_me");
 	$("#search_result").css("display","block");
 }).blur(function(){
	$("#search_div1,#search_div2").css("display","block");
 	$("#search input,#search button").removeClass("click_me");
	$("#search_result").css("display","none");
 	 });


 //导航标签切换
  $("#logo_box nav ul li").each(function(index){
  	var liNode = $(this);
  	liNode.mouseover(function(){
  		timeroutid = setTimeout(function(){
  			$("#logo_nav_content .selected").removeClass("selected");
	    	$("#logo_nav_content .logo_nav_content").eq(index).addClass("selected");
  		},300);  	
    })
   }).mouseout(function(){
    	clearTimeout(timeroutid);
    	$("#logo_nav_content .selected").removeClass("selected");	
    });   
  
 //侧边导航
  $("#second_nav nav ul li").each(function(index){
  	var liNode = $(this);
  	liNode.hover(function(){
  		liNode.addClass("selected");
  		$("#second_nav_content .lists").eq(index).addClass("lists_selected").siblings().removeClass("lists_selected");
  	},function(){
  		$("#second_nav .selected").removeClass("selected");
  	});
  	$("#sidebar").mouseleave(function(){
        $("#second_nav_content .lists_selected").removeClass("lists_selected");
  	});
  });

//轮播图
//初始定义
var adNode = $("#ad_imgs li"),
    pagesNode = $("#pages li");

adNode.eq(0).show().siblings().hide();
pagesNode.eq(0).addClass("selected");

//手动焦点
    pagesNode.each(function(index){
    	var liNode = $(this); 
    	liNode.mouseover(function(){
    		liNode.addClass("selected").siblings().removeClass("selected");
    		var index = liNode.index();
    		// alert(index);
    		adNode.eq(index).fadeIn(300).siblings().fadeOut(30);
    	})

    });
 
 //点击左右按钮播放
       $("#ad_loop_btn .prev").click(function(){
            	i--;
                if(i == -1){
                	i = 4;
                }
            	adNode.eq(i).fadeIn(300).siblings().fadeOut(300);
            	pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");     
       });
       $("#ad_loop_btn .next").click(function(){
            autoplay();
       });

//自动轮播
    var i = 0;
    var timer = setInterval(autoplay,3000);
    //核心向右运动函数
    function autoplay(){
    	i++;
        if(i == 5){
        	i = 0
        }
    	adNode.eq(i).fadeIn(300).siblings().fadeOut(300);
    	pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");
    }

    $("#ad_loop,#ad_loop_btn").hover(function(){
    	clearInterval(timer);
    },function(){
    	// alert("111");
    	timer = setInterval(autoplay,3000);
    });


 });
