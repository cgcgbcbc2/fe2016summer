//冒泡排序
function bubble_sort(a) {
    for (var i = 0; i < a.length - 1; i++) {
        for (var j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                    var tmp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = tmp;
            }
        }
    }
    return a;
};

//插入排序
function insert_sort(a) {
    for (var i = 1; i < a.length; i++) {
        var tmp = a[i];
        var j = i;
        while (a[j - 1] > tmp) {
            a[j] = a[j - 1];
            j--;
        }
        a[j] = tmp;
    }
};

//选择排序
function select_sort(a){
    var min, tmp;
    for (var i = 0; i < a.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
            //将最小的项移动到前面
            tmp = a[i];
            a[i] = a[min]
            a[min] = tmp;
        }
    }
}