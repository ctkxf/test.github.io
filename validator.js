function choosen(element){
    if($(element).is("input")){
        var types=$(element).attr("type");
        return types;
    }else{
        var tag=$(element)[0].tagName.toLowerCase();
        return tag;
    }
}

function csses(sure,element){
    $(element).css({
        "border-color":(sure?"green":"red")
    });
    return sure;
}
var someArray={
    "text":texts,
    "password":texts,
    "span":yzm
}

function yzm(element){
    this.truth=function(element){
        $(element).removeClass("glyphicon glyphicon-remove");
        $(element).addClass("glyphicon glyphicon-ok");
        $(element).css({
            "color":"green"
        })
    }
    this.wrongth=function(element){
        $(element).removeClass("glyphicon glyphicon-ok");
        $(element).addClass("glyphicon glyphicon-remove");
        $(element).css({
            "color":"red"
        })
    }
    this.same=function(element2){
        var sure=($(element).text()==$(element2).val());
        csses(sure,element2);
    }
}
function texts(element){
    this.leng=function(min,max){
        var length=$(element).val().length;
        var sure=(length>=min&&length<=max);
        return csses(sure,element);
    }
    this.same=function(element2){
        var sure=($(element).val()==$(element2).val());
        return csses(sure,element);
    }
}
function selected(element){
    this.get=function(){
        return $(element).find("option:selected").text();
    }
    this.getNum=function(){
        return parseInt($(element).find("option:selected").text());
    }
}
function rules(eid){
    return new someArray[choosen(eid)](eid);
}






