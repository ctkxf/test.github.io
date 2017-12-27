/**
 * 这是一个外部js文件，用来实现年月日的级联查询操作。
 */

 //初始化年份
 $("#year").empty();//设置年份列表为空
 var option0=$("<option>").val("choose").text("请选择");//添加一个基础列表
 $("#year").append(option0);//添加到年列表中
 for(var i=50;i<100;i++){//循环添加一些年份
     var options=$("<option>").val("y19"+i).text("19"+i+"年");//添加的年份为1950-1999
     $("#year").append(options); 
 }
 for(var i=0;i<20;i++){//循环添加年份
     if(i<10){//判断是否为10以下
         var x="0"+i;//如果为10以下，则在前面添加一个0
         var options=$("<option>").val("y20"+x).text("20"+x+"年");
     }else{//否则直接进行添加
         var options=$("<option>").val("y20"+i).text("20"+i+"年");
     }
     $("#year").append(options); 
 }

 /**
  * 设置年份下拉框改变内容时的函数功能
  */
$("#year").change(function(){
    $("#month").empty();//将月份下拉框设置为空
    var option0=$("<option>").val("choose").text("==请选择==");//添加一个初始列表值
    $("#month").append(option0);//添加到月份上
    $("#day").empty();//将日期下拉框设置为空
    $("#day").append(option0);//将初始列表值添加到日期上
    var year=parseInt($("#year").find("option:selected").text());//将年份所被选中的值转换为数字
    if(!isNaN(year)){//如果转换后为数字
        for(var i=1;i<13;i++){//循环12次，为月份下拉框添加月份
            var options=$("<option>").val("m"+i).text(i+"月");
            $("#month").append(options); 
        }
    }else{//如果不是数字
        $("#month").empty();//清空月份
        var option0=$("<option>").val("choose").text("==请选择==");
        $("#month").append(option0); 
    }
    });
/**
 * 设置月份下拉框改变内容时的函数功能
 */
$("#month").change(function(){
    $("#day").empty();//将日期设置为空
    var option0=$("<option>").val("choose").text("==请选择==");
    $("#day").append(option0);//为日期添加一个初始默认值
    var year=parseInt($("#year").find("option:selected").text());//转换年份为数字
    var month=parseInt($("#month").find("option:selected").text());//转换月份为数字
    if(!isNaN(month)){//如果月份是数字
        dayss(month,year);//执行函数dayss()，用来判断是否为闰年以及当前月份的天数
    }else{//如果不是数字
        $("#day").empty();//清空日期下拉框
        var option0=$("<option>").val("choose").text("日");
        $("#day").append(option0);
    }
    
});
/**
 * 设置日期下拉框改变内容时的函数功能
 */
$("#day").change(function(){
    var year=parseInt($("#year").find("option:selected").text());//得到年份的数字
    var old=new Date().getFullYear()-year;//得到出生年份与当前年份的差（即年龄）
    if(old<18&&old>=0){//如果不满18周岁
        $(".modal-body").text("您不满18周岁，是否继续进行注册？");//设置提示窗信息
        $("#ageModal").modal("show");//弹出提示窗
        $("#ageYes").click(function(){
            count++;
        })
    }else if(old<0){//如果出生日期超过当前日期
        $(".modal-body").text("您选择的出生日期有误，请重新选择");//设置提示窗信息
        $("#ageModal").modal("show");//弹出提示窗
    }else{//年满十八周岁
        $(".modal-body").text("您今年"+old+"岁，可以继续注册");//设置提示窗信息
        $("#ageModal").modal("show");//弹出提示窗
        count++;
    }
});




/**
 * 创建一个函数，用来计算闰年以及计算当月日期
 * @param {*月份} month 
 * @param {*年份} year 
 */

    function dayss(month,year){
        switch(month){//查询当前月有多少天
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                    for(var i=1;i<32;i++){
                        var options=$("<option>").val("d"+i).text(i+"日");
                        $("#day").append(options); 
                    }break;//1,3,5,7,8,10,12月都有31天，则循环向日期中添加
            default:
                    if(month!=2){//判断是否为2月
                        for(var i=1;i<31;i++){//不是二月循环30次
                            var options=$("<option>").val("d"+i).text(i+"日");
                            $("#day").append(options); 
                        }
                    }else{//是二月
                        if((year%100!=0&&year%4==0)||(year%400==0)){//判断是不是闰年
                                for(var i=1;i<30;i++){//是闰年，循环29次
                                    var options=$("<option>").val("d"+i).text(i+"日");
                                    $("#day").append(options); 
                                }
                        }else{//不是闰年循环28次
                                for(var i=1;i<29;i++){
                                    var options=$("<option>").val("d"+i).text(i+"日");
                                    $("#day").append(options); 
                                }
                        }
                    }break;
        }
       }