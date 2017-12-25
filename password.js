/**
 * 这是一个外部js文件，用来判断用户输入的密码的安全程度
 */

 /**
  * 设计一个函数，用来给强弱程度进行颜色变化
  */
function color(){
    var level=choose();//调用choose函数，该函数是用来判断密码的强弱程度的
    switch(level){//根据强弱程度来进行判断
        case 0://为0时，输入的密码不符合规范
                break;
        case 1://为1时，密码只含有数字或小写字母，大写字母或特殊字符，密码强度为弱
                $("#ruo").addClass("label-danger");//为弱项添加label-danger的类，用来显示危险颜色
                $("#zhong").removeClass("label-warning");//为中项删除label-warning的类，防止颜色多重显示
                $("#qiang").removeClass("label-success");//为强项删除label-success的类，防止颜色多重显示
                break;
        case 2://为2时，密码含有数字或小写字母，大写字母或特殊字符中的其中两种，密码强度为中
                $("#ruo").removeClass("label-danger");//为弱项删除label-danger的类，防止颜色多重显示
                $("#zhong").addClass("label-warning");//为中项添加label-warning的类，用来显示警告颜色
                $("#qiang").removeClass("label-success");//为强项删除label-success的类，防止颜色多重显示
                break;
        default://为其他时，说明密码至少包含数字，小写字母，大写字母，特殊字符中的其中三种，密码强度为强
                $("#ruo").removeClass("label-danger");//为弱项删除label-danger的类，防止颜色多重显示
                $("#zhong").removeClass("label-warning");//为中项删除label-warning的类，防止颜色多重显示
                $("#qiang").addClass("label-success");//为强项添加label-success的类，用来显示成功颜色
                break;
        
    }
}
/**
 * 设计一个函数，用来清除弱中强三者有的颜色
 */
function clearColor(){
    $("#ruo").removeClass("label-danger");//清除“弱”中的危险颜色类
    $("#zhong").removeClass("label-warning");//清除“中”中的警告颜色类
    $("#qiang").removeClass("label-success");//清除“强”中的成功颜色类
}



/**
 * 设计一个函数，用来返回密码的强度
 */
function choose(){
    var password=$("#pass").val();//得到密码框输入的密码的内容
    var modes=0;//定义一个modes用来存储每一位密码对应的值
    for(var i=0;i<password.length;i++){//循环遍历密码中的每一位
        //将密码的每一位进行Unicode码的转换，调用charMode函数进行转换后判断
        //并将返回值与modes进行按位或运算。
        modes|=charMode(password.charCodeAt(i));
    }
    return bit(modes);//将得到的modes的值传入bit函数中，进行强度等级判断
}
/**
 * 设计一个函数，用来判断密码每一位分别是什么类型并返回对应的等级值
 * @param {*传入的是密码的每一位所对应的Unicode码} num 
 */
function charMode(num){
    if(num>=48&&num<=57){//判断num是否是0-9的数字，通过unicode码进行判断
        return 1;//如果是数字，返回1（代表二进制01）
    }
    if(num>=65&&num<=90){//判断num是否为大写的字母，通过Unicode进行判断
        return 2;//如果是大写字母，则返回2（代表二进制10）
    }
    if(num>=97&&num<=122){//判断num是否为小写字母，通过Unicode进行判断
        return 4;//如果是小写字母，则返回4（代表二进制100）
    }else{//如果为其他特殊字符
        return 8;//返回8（代表二进制1000）
    }
}

/**
 * 设计一个函数，根据之前modes所获得的值，进行运算判断密码强度
 * @param {*传入之前modes与每一位密码按位或运算之后所得的值} num 
 */
function bit(num){
   var mode=0;//定义一个mode，用来存放密码强度等级（0,1,2）
    for(var i=0;i<4;i++){//因为特殊字符返回为8（二进制1000），所以需要循环4次
        if(num&1){//让num与1进行按位与运算，判断当前num的最右侧一位是否为1
            mode++;//如果是1，则强度等级加1
        }
        num>>>=1;//将num无符号向右位移一位，用来继续判断下一位
    }
    return mode;//将得到的mode返回
}