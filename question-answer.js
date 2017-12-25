
 $("#ques").attr("data-toggle","popover");
 $("#ques").popover({
     html:true,//可以在提示工具中书写html代码。
     placement:"auto top",//设置显示位置为上方。
     content:"请选择一个密保问题" ,//设置初始时显示的内容。
     trigger:"manual",//设置提示弹出方式为获得焦点。
     container:"body"//设置提示显示依赖于body
 });
 $("#answ").attr("data-toggle","popover");
 $("#answ").popover({
     html:true,//可以在提示工具中书写html代码。
     placement:"auto right",//设置显示位置为上方。
     content:"请输入密保问题答案" ,//设置初始时显示的内容。
     trigger:"focus",//设置提示弹出方式为获得焦点。
     container:"body"//设置提示显示依赖于body
 });
 $("#answ").focus(function(){
     if($("#ques").find("option:selected").val()=="choose"){
        $("#ques").popover("show");
        $("#ques").css({"border-color":"red"});
        
     }
});
$("#ques").click(function(){
    if($("#ques").find("option:selected").val()=="choose"){
        $("#ques").popover("show");
        $("#ques").css({"border-color":"red"});
    }else{
        $("#ques").popover("hide");
        $("#ques").css({"border-color":"green"});
    }
});

