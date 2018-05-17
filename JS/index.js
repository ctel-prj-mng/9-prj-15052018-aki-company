
/*--------------------------------------------------------------
caching of images
--------------------------------------------------------------*/

function preCacheHeros(){
    $.each(heroArray, function(){
        var img = new Image();
        img.src = this;
    });
};
 
$(window).load(function(){
    preCacheHeros();
});