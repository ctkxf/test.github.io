
$("#answ").keyup(function(){
     if($("#ques").find("option:selected").val()=="choose"){
        $("#ques").popover("show");
        $("#ques").css({"border-color":"red"});
     }
     var res=rules("#answ").leng(1,25);
     count.set("#answ",res);
     $("#sansw").text($("#answ").val());
});

$("#ques").click(function(){
    var res=true;
    if($("#ques").find("option:selected").val()=="choose"){
        $("#ques").popover("show");
        $("#ques").css({"border-color":"red"});
        res=false;
    }else{
        $("#ques").popover("hide");
        $("#ques").css({"border-color":"green"});
    }
    $("#sques").text($("#ques").find("option:selected").text());
    count.set("#ques",res);
});

