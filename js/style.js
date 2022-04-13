$(document).ready(function(){

    $('.img_sub > li:last-child').insertBefore('.img_sub > li:first-child');
    $('.img_sub').css('margin-left','-800px');

    function moveLeft(){
        $('.img_sub').animate({'margin-left':'-1600px'},500,function(){
            $('.img_sub > li:first-child').insertAfter('.img_sub > li:last-child');
            $('.img_sub').css('margin-left','-800px');
        });
    }

    let Timer = setInterval(moveLeft,3000);
});