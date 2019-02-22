//$(document).ready(function () {
//    console.log("document ready ");
//});
//
//$(document).ready(function () {
//    $("ul.list1 li").css("font-weight", "bold");
//});
//
//$(document).ready(function () {
//    $("ul.list1 li").each(function (index){
//        $(this).append(" " + index);
//    });
//});
//
//
//

$(document).ready(function (){
    console.log("document ready");
});

$(document).ready(function (){
    $("ul.list1 li").css("font-weight", "bold");
});

$(document).ready(function () {
    $("ul.list1 li").each(function (index){
        $(this).append(" " + index);
    });
});

$(document).ready(function () {
    $("ul.list1").on("click", "li", function(){
        $this.css("color","red");
    });
    
    $("ul.list1").append("<li> get the event </li>");
});



http.createServer(app).listen(HTTP_PORT, onHTTPStart);
https.createServer(http)