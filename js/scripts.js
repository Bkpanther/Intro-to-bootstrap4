$(document).ready(function(){
    $("#myBtn1").click(function(){
         $("#loginModal").modal();
     });
    
    $("#myBtn").click(function(){
         $("#tableModal").modal();
     });
    
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });
    
});