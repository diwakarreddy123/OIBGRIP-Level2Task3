$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
    });
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    });
$("input[type='text']").keypress(function(event){
    if(event.which == 13){
    //storing input in todoTask
    var todoTask = $(this).val();
    //creating a new li element and add to ul
    $(this).val("");
    $('ul').append("<li><span> X </span>"+todoTask+"</li>")
    }
    });