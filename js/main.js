$(document).ready(function(){
   $(".thumbnails li a").click(function(e){
    e.preventDefault();
    $(".image-gallery img").attr('src', $(this).attr("href"));
   });
});