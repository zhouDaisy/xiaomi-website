$(function(){
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


 //标签切换
  $("#logo_box nav ul li").each(function(index){
     $(this).mousemove(function(){
    	$("#logo_nav_content .selected").removeClass("selected");
    	$("#logo_nav_content .logo_nav_content").eq(index).addClass("selected");
 
    });
  });

 });
