
a = [66, 53, 11, 5, 4, 3, 2, 1];
/*冒泡排序*/
(function maopaopaixu() {
     for (var i = 0; i < a.length - 1; i++) {//比较的次数是length-1
         for (var j = 0; j < a.length - 1 - i; j++) {
             if (a[j] > a[j + 1]) {
                 var tmp = a[j];
                 a[j] = a[j + 1];
                 a[j + 1] = tmp;
             }
         }
     }
     alert(a);
})();


/*插入排序*/
a = [66, 53, 11, 5, 4, 3, 2, 1];
(function charupaixu() {
    for (var out = 1; out < a.length; out++) {
        var tmp = a[out];
        var inner = out;
        while (a[inner - 1] > tmp) {
            a[inner] = a[inner - 1];
            --inner;
        }
        a[inner] = tmp;
    }
    alert(a);
})();


/*选择排序*/
a = [66, 53, 11, 5, 4, 3, 2, 1];
(function xuanzepaixu() {
    var min;/*最小项的索引*/
    var tmp;
    for (var out = 0; out < a.length - 1; out++) {//比较的次数是length-1
        min = out;
        for (var inner = out + 1; inner < a.length; inner++) {//这里是a.length，不是a.lenght-1，因为后者会导致右数第2项没法参与排序。
            if (a[inner] < a[min]) {
                min = inner;
            }
            //将最小的项移动到左侧
            tmp = a[out];
            a[out] = a[min]
            a[min] = tmp;
        }
    }
    alert(a);
})();


