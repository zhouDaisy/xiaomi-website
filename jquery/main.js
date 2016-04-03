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
  		},200);  	
    })
   }).mouseout(function(){
    	clearTimeout(timeroutid);
    	$("#logo_nav_content .selected").removeClass("selected");	
    });   
  
  //侧边导航
  $("#second_nav nav ul li").each(function(index){
  	var liNode = $(this);
  	liNode.mouseover(function(){

  		$("#second_nav_content .lists_selected").removeClass("lists_selected");
  		liNode.addClass("selected");
  		$("#second_nav_content .lists").eq(index).addClass("lists_selected");

  	}).mouseout(function(){
  		$("#second_nav .selected").removeClass("selected");
  	});
  	$("#sidebar").mouseleave(function(){
        $("#second_nav_content .lists_selected").removeClass("lists_selected");
  	});
  });


 });
