/*header*/
$(function(){
    /*搜索按钮单机事件*/
    $("#sb-search").on("click","input",function(){
        var $btn=$(this);
        var $input=$btn.prev();
        var $parentSearch=$("#sb-search");
        if($parentSearch.css("width")=="0px")
            $parentSearch.css("width","450");  
        else
        $parentSearch.css("width","0");
    })
    $("#sb-search").on("blur","input",function(){
        var $btn=$(this);
        var $input=$btn.prev();
        var $parentSearch=$("#sb-search");
        $input.parent().parent().css("width","0");
    })
    /*导航栏下拉框按钮单机事件*/
    $(".logo-nav-middle>ul").on("click","a",function(e){
        var $a=$(this);
        e.preventDefault();
        var $div=$a.next().children().first();
        if($div.is(":hidden")){
            $div.removeClass("hidden");
            $a.css("color","#d8703f");
            $a.css("text-decoration","none");
        }
        else{
            $div.addClass("hidden");
            $a.css("color","#777");
        }
    })
    $(".logo-nav-middle>ul").on("blur","a",function(){
        var $a=$(this);
        var $div=$a.next().children().first();
        $div.addClass("hidden");
        $a.css("color","#777");
    })
})


