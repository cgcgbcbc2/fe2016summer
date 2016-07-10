/**
 * Created by Administrator on 2016/7/3.
 */

var list = [];
list[0] = {name:'Amy', age:21, hometown:'BeiJing'};
list[1] = {name:'Amy', age:24, hometown:'ShangHai'};

function search(){
    if (typeof arguments[1] == "number") {
        var result = [];
        var target = arguments[1];
        for (var i = 0; i < arguments[0].length; i++) {
            if (arguments[0][i].age == target){
                result.push(arguments[0][i]);
            }
        }
        if (result.length > 0)
            return result;
        return false;
    }
    else if (typeof arguments[1] == "string") {
        var target = arguments[1];
        for (var i = 0; i < arguments[0].length; i++) {
            if (arguments[0][i].name == target){
                return arguments[0][i]
            }
        }
        return false;
    }
    else if (typeof arguments[1] == "object") {
        var result = [];
        var target = arguments[1];
        for (var i = 0; i < arguments[0].length; i++) {
            if ((arguments[0][i].age == target.age || target.age == undefined)
                && (arguments[0][i].name == target.name || target.name == undefined)
                && (arguments[0][i].hometown == target.hometown || target.hometown == undefined)){
                result.push(arguments[0][i]);
            }
        }
        if (result.length > 0)
            return result;
        return false;
    }
}

search(list,{name:'Amy', age:21, hometown:'BeiJing'});