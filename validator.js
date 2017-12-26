function choosen(element){
    if($(element).is("input")){
        var types=$(element).attr("type");
        return types;
    }else{
        var tag=$(element)[0].tagName.toLowerCase();
        return tag;
    }
}


function attrs(element,choose){ 
    
    if(choose=="text"||choose=="password"){
        this.size=function(minleng,maxleng,min,max){
            var length=$(element).val().length;
            $(element).attr({
                minlength:min,
                maxlength:max
            });
            if(length>=minleng&&length<=maxleng){
                $(element).css({
                    "border-color":"green"
                });
                return true;
            }else{
                $(element).css({
                    "border-color":"red"
                });
                return false;
            }
        }
        this.same=function(element2){
            if($(element).val()==$(element2).val()){
                $(element).css({
                    "border-color":"green"
                });
                return true;
            }else{
                $(element).css({
                    "border-color":"red"
                });
                return false;
            }
        }
    }else{
        if(choose=="span"){
            this.same=function(element2){
                if($(element).text()==$(element2).val()){
                    $(element2).css({
                        "border-color":"green"
                    });
                    return true;
                }else{
                    $(element2).css({
                        "border-color":"red"
                    });
                    return false;
                }
            }
        }else if(choose=="select"){
            this.get=function(element){
                
            }
        }
    }
}






