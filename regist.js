//调用外部js文件用来显示年月日的级联查询
document.write('<script src="year-month-day.js"></script>');
//调用外部js文件，用来判断密码的强弱等级
document.write('<script src="password.js"></script>');
//调用外部js文件，用来生成随机验证码
document.write('<script src="yzm.js"></script>');
//设置一个全局变量，用来存储性别
var sex="";
$(document).ready(function(){
    /**设置密码框的最小长度以及最大长度 */
   $(":password").attr({
       minlength:6,//设置最小长度为6
       maxlength:18//设置最大长度为18
   });

/**
 * 设置一个开关的样式用来选择性别，当开关为on状态时，显示男，开关为off状态时，显示女
 */
    $("#sex").bootstrapSwitch(
        { 
            onSwitchChange: function (event, state) {//当开关发生变化时，执行函数
              if(state){//state代表开关的状态，on时为true，off时为false
                  sex="男";//设置全局变量sex用来存储性别。
              }else{
                  sex="女";
              }
            },
            onInit: function(event,state){//当开关加载时，执行函数
                if(state){//当开关加载初始状态为on时state为true，当初始状态为off时state为false
                    sex="男";
                }else{
                    sex="女";
                }
            }
          } 
    );
    $("#user-ok-no").hide();//设置通行证用户名后的判断框为加载时隐藏。
    $("#rpass-ok-no").hide();//设置重复密码后的判断框为加载时隐藏。
    $("#yzm").text(RandGeneratUtils.random());//设置验证码在界面加载时的第一次随机。

    /**
     * 设置年龄提醒框的状态为加载时隐藏，并且在显示时按下esc键不消失。
     */
    $("#ageModal").modal({//年龄提醒框加载设置。
        keyboard:false,//当按下esc按键时无效
        show:false,//当界面加载时，提醒框为隐藏状态。
    });
    //为通行证用户名创建一个提示工具
    $("#user").attr("data-toggle","popover");
    /**
     * 初始化通行证用户名的提示工具。
     */
    $("#user").popover({
        html:true,//可以在提示工具中书写html代码。
        placement:"auto top",//设置显示位置为上方。
        content:"请输入一个用户名，长度4~18位" ,//设置初始时显示的内容。
        trigger:"focus",//设置提示弹出方式为获得焦点。
        container:"body"//设置提示显示依赖于body
    });
    //为用户登录密码创建一个提示工具
    $("#pass").attr("data-toggle","popover");
    /**
     * 初始化用户登录密码的提示工具
     */
    $("#pass").popover({
        html:true,//可以在提示工具中书写html代码。
        placement:"auto right",//设置显示位置为右方。
        content:"请输入密码，长度位6~16位" ,//设置初始时显示的内容。
        trigger:"focus",//设置提示弹出方式为获得焦点。
        container:"body"//设置提示显示依赖于body
    });
    //为用户重复登录密码创建一个提示工具
    $("#rpass").attr("data-toggle","popover");
    /**
     * 初始化用户重复登录密码的提示工具
     */
    $("#rpass").popover({
        html:true,//可以在提示工具中书写html代码。
        placement:"auto right",//设置显示位置为右方。
        content:"请再次输入密码，与之前输入的密码相同" ,//设置初始时显示的内容。
        trigger:"focus",//设置提示弹出方式为获得焦点。
        container:"body"//设置提示显示依赖于body
    });
    
    /**
     * 对用户填写用户名时进行实时判断
     * 使用keyup方法，在键盘弹起时进行判断
     */
    $("#user").keyup(function(){
        var num=$("#user").val().length;//得到用户当前输入内容的长度
        if(num<4){//判断长度是否在4以下
            $("#user").css({"border-color":"red"});//设置输入框边框颜色为红色
            $("#user").popover("show");//设置提示工具为显示状态
            $("#user-ok-no").show();//设置用户判断框为显示状态
            $("#user-yes").hide();//设置用户判断框中的yes为隐藏
            $("#user-no").show();//设置用户判断框中的no为显示
            $(".popover-content").text("您输入的用户名不足4位");//设置提示工具的内容  
        }else if(num>18){//如果长度位18位以上，则超出输入长度
            $("#user").css({"border-color":"red"});//设置输入框边框颜色为红色
            $("#user").popover("show");//设置提示工具为显示状态
            $("#user-ok-no").show();//设置用户判断框为显示状态
            $("#user-yes").hide();//设置用户判断框中的yes为隐藏
            $("#user-no").show();//设置用户判断框中的no为显示
            $(".popover-content").text("您输入的用户名长度超过18位");//设置提示工具的内容 
        }else{//如果不超出长度，则符合规范
            $("#user").css({"border-color":"green"});//设置输入框边框颜色为绿色
            $(".popover-content").text("该用户名可用");//设置提示工具的内容 
            $("#user-ok-no").show();//设置用户判断框为显示状态
            $("#user-yes").show();//设置用户判断框中的yes为显示
            $("#user-no").hide();//设置用户判断框中的no为隐藏
            $("#user").popover("hide");//设置提示工具为隐藏状态
        }
    });
    /**
     * 对用户填写密码进行实时判断
     * 使用keyup方法，在键盘弹起时进行判断
     */
    $("#pass").keyup(function(){
        var num=$("#pass").val().length;//得到用户当前输入密码的长度
        if(num<6){//判断长度是否在6位以下
            clearColor();//调用外部判断密码强度的函数，该函数用来清除强弱等级的颜色
            $("#pass").css({"border-color":"red"});//设置密码框的边框颜色为红色
            $("#pass").popover("show");//设置提示工具为显示状态
            $(".popover-content").text("您输入的密码不足6位");//设置提示工具的内容  
           
        }else if(num>16){//判断长度是否超出16位
            clearColor();//调用外部判断密码强度的函数，该函数用来清除强弱等级的颜色
            $("#pass").css({"border-color":"red"});//设置密码框的边框颜色为红色
            $("#pass").popover("show");//设置提示工具为显示状态
            $(".popover-content").text("您输入的密码长度超过16位");//设置提示工具的内容
        }else{//长度符合规范
            color();//调用外部判断密码强度的函数，该函数用来设置密码强度框中的等级颜色
            $("#pass").css({"border-color":"green"});//设置密码框的边框颜色为绿色
            $("#pass").popover("hide");//设置提示工具为隐藏状态
        }
    });
    /**
     * 对用户的重复密码进行实时判断
     * 使用keyup方法，在键盘弹起时进行判断
     */
    $("#rpass").keyup(function(){
        if($("#rpass").val()!=$("#pass").val()){//判断两次输入的密码是否相同
            $("#rpass").popover("show");//设置提示工具为显示状态
            $(".popover-content").text("您两次输入的密码不同"); //设置提示工具显示内容 
            $("#rpass").css({"border-color":"red"});//设置密码框边框颜色红色
            $("#rpass-ok-no").show();//设置重复密码的判断框显示
            $("#rpass-yes").hide();//设置重复密码的判断框中的yes隐藏
            $("#rpass-no").show();//设置重复密码的判断框中的no显示
        }else{//如果两次输入的密码相同
            $("#rpass").css({"border-color":"green"});//设置密码框颜色为绿色
            $("#rpass").popover("hide");//设置提示工具为隐藏状态
            $("#rpass-ok-no").show();//设置重复密码的判断框为显示
            $("#rpass-yes").show();//设置重复密码的判断框的yes显示
            $("#rpass-no").hide();//设置重复密码的判断框的no为隐藏
        }
    });
    $("#ageNo").click(function(){
        alert("???");
    });
/**
 * 设置验证码点击更换图片
 */
    $("#yzm").click(function(){
        var res = RandGeneratUtils.random();
        $("#yzm").text(res);
    });
/**
 * 设置重置按钮功能
 */
    $("#refresh").click(function(){
        window.location.reload();
    });

























































});
