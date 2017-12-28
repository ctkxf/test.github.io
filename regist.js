//调用外部js文件用来显示年月日的级联查询
document.write('<script src="year-month-day.js"></script>');
//调用外部js文件，用来判断密码的强弱等级
document.write('<script src="password.js"></script>');
//调用外部js文件，用来生成随机验证码
document.write('<script src="yzm.js"></script>');
//设置一个全局变量，用来存储性别
document.write('<script src="question-answer.js"></script>');
document.write('<script src="validator.js"></script>');
document.write('<script src="dateTime.js"></script>');
document.write('<script src="popovers.js"></script>');
//设置一个全局变量，用来判断用户是否输入了合法的输入
var count=new Map();
$(document).ready(function(){
    $.getScript("./password.js");
    $.getScript("./yzm.js");
    $.getScript("./question-answer.js");
    $.getScript("./validator.js");
    $.getScript("./dateTime.js");
    $.getScript("./popovers.js");
/**
 * 设置一个开关的样式用来选择性别，当开关为on状态时，显示男，开关为off状态时，显示女
 */
    $("#sex").bootstrapSwitch(
        { 
            onSwitchChange: function (event, state) {//当开关发生变化时，执行函数
                $("#ssex").text(state?"男":"女");
            },
            onInit: function(event,state){//当开关加载时，执行函数
                $("#ssex").text(state?"男":"女");
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
    
    /**
     * 设置提交提醒框的状态为加载时隐藏，并且在显示时按下esc键不消失。
     */
    $("#submitModel").modal({//年龄提醒框加载设置。
        keyboard:false,//当按下esc按键时无效
        show:false,//当界面加载时，提醒框为隐藏状态。
    });
    //为通行证用户名创建一个提示工具
    popoverSetting("#user","top","请输入一个用户名，长度4~18位","focus");
    //为用户登录密码创建一个提示工具
    popoverSetting("#pass","right","请输入密码，长度位6~16位","focus");
    //为用户重复登录密码创建一个提示工具
    popoverSetting("#rpass","right","请再次输入密码，与之前输入的密码相同","focus");
    popoverSetting("#dateChoose","right","请选择出生日期","manual");
    popoverSetting("#ques","right","请选择一个密保问题","manual");
    popoverSetting("#answ","right","请输入密保问题答案","focus");
    /**
     * 对用户填写用户名时进行实时判断
     * 使用keyup方法，在键盘弹起时进行判断
     */
    $("#user").keyup(function(){
        var res=rules("#user").leng(4,18);
        $("#user-ok-no").show();//设置用户判断框为显示状态
        res?rules("#user-yes").truth("#user-yes"):rules("#user-yes").wrongth("#user-yes");
        count.set("#user",res);
        $("#suser-email").text($("#user").val()+"@"+$("#email").find("option:selected").text());
    });

    /**
     * 对用户填写密码进行实时判断
     * 使用keyup方法，在键盘弹起时进行判断
     */
    $("#pass").keyup(function(){
        var res=rules("#pass").leng(6,16);
        var rres=rules("#rpass").same("#pass");
        res?color() : clearColor();
        count.set("#pass",res);
        count.set("#rpass",rres);
        $("#spass").text($("#pass").val());
    });
    /**
     * 对用户的重复密码进行实时判断
     * 使用keyup方法，在键盘弹起时进行判断
     */
    $("#rpass").keyup(function(){
        var res=rules("#rpass").same("#pass");
        $("#rpass-ok-no").show();
        res?rules("#rpass-no").truth("#rpass-no"):rules("#rpass-no").wrongth("#rpass-no");
        count.set("#rpass",res);
    });
    /**
     * 对用户输入的验证码进行判断
     */
    $("#test").keyup(function(){
        var res=rules("#yzm").same("#test");
        count.set("#test",res);
    })
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
    $("#submit").click(function(){

        count.forEach(function(value,key){
            if(!value){
                $(key).foucs();
            }else{
                
            }
        })
    });
























































});
