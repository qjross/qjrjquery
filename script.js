$(document).ready(function() {

$("h1").mouseenter(function(){
   $(this).css("color" , "gold");
});
    
    $("h1").mouseleave(function(){
   $(this).css("color" , "black");
});
    
$("h2").click(function(){
   $("#disappearingAct").toggle(); 
});
    
    $("h3").click(function(){
   $("#disappearingActTwo").toggle(); 
});  
    
$("#theUnveiling").click(function(){
   $("img").fadeIn("slow");
  });
$("#gameAlert").hover(function(){
    (alert)("Metal Gear Solid");
    
    
});    
}); 