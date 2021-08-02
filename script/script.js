$(function(){

    $("li.mainLi, #gnbBg").mouseover(function(){
        $("ul.subUl, #gnbBg").stop().slideDown(500);
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subUl, #gnbBg").stop().slideUp(200);
    });


});