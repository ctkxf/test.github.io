//调用外部js文件用来显示年月日的级联查询
document.write('<script src="year-month-day.js"></script>');
//调用外部js文件，用来判断密码的强弱等级
document.write('<script src="password.js"></script>');
//调用外部js文件，用来生成随机验证码
document.write('<script src="yzm.js"></script>');
//设置一个全局变量，用来存储性别
document.write('<script src="question-answer.js"></script>');
document.write('<script src="validator.js"></script>');
var sex="";
//设置一个全局变量，用来判断用户是否输入了合法的输入
var count=0;
$(document).ready(function(){
   /**
    * 编写一个函数，继承父类的方法。
    * @param {*传递id或class或。。遵循JQuery} element 
    */
   function attrd(element){
        this.element=element;
        var choose=choosen(element);
        attrs.call(this,this.element,choose); 
   
    }
    (function(){
        var Super=function(){};
        Super.prototype=attrs.prototype;
        attrd.prototype=new Super();
    })();

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
    /**
     * 设置提交提醒框的状态为加载时隐藏，并且在显示时按下esc键不消失。
     */
    $("#submitModal").modal({//提交提醒框加载设置。
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
       var userAttr=new attrd("#user");
       var res=userAttr.size(4,18,4,20);
       if(res){
        $("#user-ok-no").show();//设置用户判断框为显示状态
        $("#user-yes").show();//设置用户判断框中的yes为显示
        $("#user-no").hide();//设置用户判断框中的no为隐藏
       }else{
        $("#user-ok-no").show();//设置用户判断框为显示状态
        $("#user-yes").hide();//设置用户判断框中的yes为隐藏
        $("#user-no").show();//设置用户判断框中的no为显示
       }
    });
    /**
     * 对用户填写密码进行实时判断
     * 使用keyup方法，在键盘弹起时进行判断
     */
    $("#pass").keyup(function(){
        var passAttr=new attrd("#pass");
        var res=passAttr.size(6,16,4,20);
        if(res){
            color();
        }else{
            clearColor(); 
        }
       
    });
    /**
     * 对用户的重复密码进行实时判断
     * 使用keyup方法，在键盘弹起时进行判断
     */
    $("#rpass").keyup(function(){
        var rpassAttr=new attrd("#rpass");
        rpassAttr.size(0,0,4,20);
        var res=rpassAttr.same("#pass");
        if(res){
            $("#rpass-ok-no").show();//设置重复密码的判断框为显示
            $("#rpass-yes").show();//设置重复密码的判断框的yes显示
            $("#rpass-no").hide();//设置重复密码的判断框的no为隐藏
        }else{
            $("#rpass-ok-no").show();//设置重复密码的判断框显示
            $("#rpass-yes").hide();//设置重复密码的判断框中的yes隐藏
            $("#rpass-no").show();//设置重复密码的判断框中的no显示
        }
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
