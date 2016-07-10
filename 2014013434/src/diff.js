//Bonus2-sort

(function() {
    'use strict';

    window.diff = function(list1, list2) {
        var elem1,
            elem2,
            flag,
            result = [];
        list2.forEach(function(elem2) {
            flag = true;
            list1.forEach(function(elem1) {
                if (elem1.name == elem2.name) {
                    flag = false;
                }
            });
            if (flag === true) {
                result.push(elem2);
            }
        });
        return result;
    };
})();
