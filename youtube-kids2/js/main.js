function f1(e){
    $(this).addClass("but-1-click");
    $(this).removeClass("but-1");
}
$("document").ready(function(){
    $('#button-1').click(f1);
});

function f2(e){
    $(this).addClass("but-2 6-click");
    $(this).removeClass("but-2");
}
$("document").ready(function(){
    $('#button-2').click(f2);
});

function f3(e){
    $(this).addClass("but3-click");
    $(this).removeClass("but3");
}
$("document").ready(function(){
    $('#button3').click(f3);
});
