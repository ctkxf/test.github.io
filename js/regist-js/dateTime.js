$("#dateChoose").datetimepicker({
    format:"yyyy-mm-dd",//设置日期格式
    language:  'zh-CN',//设置日历语言
    weekStart: 0,//一周从那一天开始(0~6日~六)
    startDate:"1960-01-01",//设置日期开始年份时间
    endDate:new Date(),//设置日期结束年份时间
    //daysOfWeekDisabled:[0,6],//禁用星期
    todayBtn:  1,//在日期底部显示一个今天，如果是true则跳转到今天，如果是linked，选中今天
    autoclose: true,//选择一个日期后是否关闭选择器
    todayHighlight: true,//高亮当前选中日期
    startView: 4,//打开选择器第一个页面(0(小时),1(日),2(月),3(年),4(十年表))
    minView: 2,//选择器能够提供的最精准视图
    maxView:4,//选择器能够提供的最高显示范围
    keyboardNavigation:true,//是否可以使用键盘方向键进行选择日期
    //forceParse: true,//是否启用强制解析输入框中的内容，如果不符合规则，则自动改变成规则类型
    //minuteStep:1,//设置一个选择器选择时间
    pickerPosition:'bottom-right',//设置选择器出现位置
   //viewSelect:'hour',//效果与minView类似
    //showMeridian:true,//本初子午线显示？
    //initialDate:'2017-12-28-09:32',//???
});
$("#dateChoose").datetimepicker().on("hide",function(){
    var res=rules("#dateChoose").leng(4,18);
    if ($("#dateChoose").val()!="") {
        $("#dateChoose").popover("hide");
        var year=parseInt($("#dateChoose").val().substring(0,$("#dateChoose").val().indexOf("-")));
        var old=new Date().getFullYear()-year;
        $(".modal-body").text(old<18&&old>=0?"您不满18周岁，是否继续进行注册？":old<0?"您选择的出生日期有误，请重新选择":"您今年"+old+"岁，可以继续注册");
        $("#ageModal").modal("show");//弹出提示窗
    } else {
        $("#dateChoose").popover("show");
    }
    count.set("#dateChoose",res);
    $("#birth").text($("#dateChoose").val());

})
