new WOW().init();
// --- Animation navbar-toggler ---
$(".navbar-toggler").click(function(){
  // $(".collapse").slideDown();
    $(this).toggleClass("open");
  });


/** CLOSE MAIN NAVIGATION WHEN CLICKING OUTSIDE THE MAIN NAVIGATION AREA**/
$(document).ready(function(){
  // Show hide popover
  // $(".navbar-collapse").click(function(){
  //     $(this).find(".collapse").slideToggle("fast");
  //     console.log('Clicked');
  // });

});
$(document).on("click", function(event){
  var $trigger = $(".navbar-toggler");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".collapse").hide();
      $(".navbar-toggler").removeClass("open");
  }            
});
