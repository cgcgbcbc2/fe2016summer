function sortbyname(stu) {
    for (var i = 0; i < stu.length - 1; i++) {
        for (var j = stu.length - 1; j > i; j--) {
            if (stu[j - 1].name < stu[j].name) {
                var c = stu[j];
                stu[j] = stu[j - 1];
                stu[j - 1] = c;
            }
        }
    }
    return stu;
}

function diff(stu1, stu2) {
    stu1 = sortbyname(stu1);
    stu2 = sortbyname(stu2);
    var i = 0;
    var j = 0;
    var k = 0;
    ans = new Array();
    while (i < stu2.length) {
        while (j < stu1.length && stu1[j].name > stu2[i].name) {
            j++;
        }
        if (j < stu1.length && stu1[j].name != stu2[i].name) {
            ans[k] = stu2[i];
            k++;
        }
        i++;
    }
    if (k == 0) {
        return false;
    }
    return ans;
}