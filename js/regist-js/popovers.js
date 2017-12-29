
function popoverSetting(element,placements,contents,triggers){
    $(element).attr("data-toggle","popover");
    /**
     * 初始化提示工具
     */
    $(element).popover({
        html:true,//可以在提示工具中书写html代码。
        placement:"auto "+placements ,//设置显示位置为右方。
        content:contents ,//设置初始时显示的内容。
        trigger:triggers,//设置提示弹出方式为获得焦点。
        container:"body"//设置提示显示依赖于body
    });
}
