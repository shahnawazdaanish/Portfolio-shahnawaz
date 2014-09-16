$j(function(){

$j(window).bind("resize",function(){
    console.log($j(this).width())
    if($j(this).width() <768){
    $j('.box').addClass('col-xs-12');
    }
    else{
    $j('.box').removeClass('col-xs-12');
    }
})
})