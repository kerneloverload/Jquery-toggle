var toggle = false;
$("p").css({
    fontSize: "100px",
    "text-align":"center",
    "margin-top":"30vh",
});
$("#tube").css({
    height: "60px",
    width: "170px",
    "border-radius" : "30px 30px 30px 30px",
    "border" : "2px solid black",
    "margin" : "auto",
});
$(".button").css({
    "border-radius" : "50%",
    "backgroundColor" : "black",
    "height" : "57px",
    width : "55px",
    "margin-top": "1px",
    "margin-left": "3px",
});


$(".button").on("click", function(){
    var button = $(this);
    if(toggle == false){
        button.css({
            "margin-left":"115px",
        });
        $("#tube").css({
            "border" : "2px solid white",
            "backgroundColor" : "white",
        });
        $("body").css("backgroundColor", "black");
        $("p").css("color","white");
        toggle = true;
    }
    else{
        button.css({
            "margin-left": "3px",
            "backgroundColor" : "black",
        });
        $("#tube").css({
            "border" : "2px solid black",
        });
        $("body").css("backgroundColor", "white");
        $("p").css("color","black");
        toggle = false;
    }
})
