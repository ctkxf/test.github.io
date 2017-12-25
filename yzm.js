(function(exports, $) {
    /**
     * 这是一个外部js文件，用来生成随机验证码
     */

    /**
     * 该函数用于生成随机验证码，并返回验证码值
    */
    function random(){
        var result="";//定义一个结果，用来存储验证码
        for(var i=0;i<4;i++){//要获得4位验证码，循环4次
        var code=Math.floor(Math.random()*3);//每次循环生成一个0~2（向下取整）的随机数
        switch(code){//判断code的值
            case 0:
                    result+=number();//为0时，调用number函数，生成一个随机的数字
                    break;
            case 1:
                    result+=upperCase();//为1时，调用upperCase函数，生成一个随机的大写字母
                    break;
            case 2:
                    result+=lowerCase();//为2时，调用lowerCase函数，生成一个随机的小写字母
                    break;
        }
    }
    return result;//将生成的随机验证码进行返回
    }

    /**
     * 设计一个函数，用来随机生成一个数字（0~9）
     */
    function number(){
        //通过random随机生成0-1的数字后向上取整得到Unicode码后转换成字符
        return String.fromCharCode(Math.ceil(Math.random()*10+47));
    }
    /**
     * 设计一个函数，用来随机生成一个大写字母
     */
    function upperCase(){
        //通过random随机生成0-1的数字后向上取整得到Unicode码后转换成字符
        return String.fromCharCode(Math.ceil(Math.random()*25+65));
    }
    /**
     * 设计一个函数，用来随机生成一个小写字母
     */
    function lowerCase(){
        //通过random随机生成0-1的数字后向上取整得到Unicode码后转换成字符
        return String.fromCharCode(Math.ceil(Math.random()*25+97));
    }

    /**
     * 设置验证码的样式，伪装成一个图片
     */
    $("#yzm").css(
    {"cursor":"pointer"}
    );
    /**
     * 设计一个函数，返回验证码输入是否正确
     */
    function yzmpd(){
        if($("#test").text()==$("#yzm").text()){
            return true;
        }
        return false;
    } 

    exports.RandGeneratUtils = {random: random};
})(this, jQuery);