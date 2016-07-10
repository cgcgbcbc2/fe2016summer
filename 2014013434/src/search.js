//进阶练习2-search

(function() {
    'use strict';

    window.search = function(list, query) {
        var elem, i; //迭代变量
        var result;
        if (typeof query == "number") {
            //重载：数字
            result = [];
            list.forEach(function(elem) {
                if (elem.age == query) {
                    result.push(elem);
                }
            });
            if (result.length <= 0) {
                return false;
            } else {
                return result;
            }
        } else if (typeof query == "string") {
            //重载：字符串
            for (i in list) {
                if (list[i].name == query) {
                    return list[i];
                }
            }
            return false;
        } else if (typeof query == "object") {
            //重载：对象
            var attr,
                flag;
            result = [];
            for (i in list) {
                flag = true;
                for (attr in query) {
                    if (list[i].hasOwnProperty(attr)) {
                        if (list[i][attr] != query[attr]) {
                            flag = false;
                            break;
                        }
                    } else {
                        flag = false;
                        break;
                    }
                }
                if (flag === true) {
                    result.push(list[i]);
                }
            }
            if (result.length <= 0) {
                return false;
            } else {
                return result;
            }
        } else {
            //如果不是上述三种类型
            return false;
        }
    };
})();
