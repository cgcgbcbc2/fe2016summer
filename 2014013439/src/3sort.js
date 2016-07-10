function merge_sort(array) { 
    "use strict";   
    //return
    if (array.length <= 1){
        return array;
    }

    //divide
    var slc1 = merge_sort(array.slice(0, array.length / 2));
    var slc2 = merge_sort(array.slice(array.length / 2, array.length));

    var i = 0
    var j = 0;
    var res = new Array();

    //merge part one 
    while ((i < slc1.length) && (j < slc2.length)) {   
        if (slc1[i] < slc2[j]) {   
            res.push(slc1[i]);
            i++;
        }

        else {   
            res.push(slc2[j]);
            j++;
        }
    }

    //merge remain
    while(j < slc2.length) {
        res.push(slc2[j]);
        j++;
    }

    while(i < slc1.length) {
        res.push(slc1[i]);
        i++;
    }
    
    return res;
}

function insert_sort(array) {   
    "use strict"; 
    var res = new Array();

    for (var i = 0; i < array.length; i++) {   
        for (var j = 0; j < res.length; j++) {
            if (res[j] > array[i]) {
                break;
            }
        }
        res.splice(j, 0, array[i]);
    }
    return res;
}

function select_sort(array) {   
    "use strict"; 
    for (var i = 0; i < array.length; i++) {
        var min_remain = Infinity, index = -1;
        for (var j = i; j < array.length; j++) {
            if (array[j] < min_remain) {   
                min_remain = array[j];
                index = j;
            }
        }
        var temp = array[i];
        array[i] = array[index];
        array[index] = temp;
    }
    return array;
}

if (exports) {  
    exports.merge_sort = merge_sort;
    exports.insert_sort = insert_sort;
    exports.select_sort = select_sort;
}
