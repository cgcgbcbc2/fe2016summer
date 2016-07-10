function search(students, info) {
    a = typeof arguments[1];
    if (a == "string") {
        return search1(students, info);
    }
    if (a == "number") {
        return search2(students, info);
    }
    if (a == "object") {
        return search3(students, info);
    }
}

function search1(students, info) {
    for (var i = 0; i < students.length; i++) {
        if (students[i].name == info) {
            return students[i];
        }
    }
    return false;
}

function search2(students, info) {
    var ans = new Array();
    var j = 0;
    for (var i = 0; i < students.length; i++) {
        if (students[i].age == info) {
            ans[j] = students[i];
            j = j + 1;
        }
    }
    if (j != 0) {
        return ans;
    }
    return false;
}

function search4(students, info) {
    var ans = new Array();
    var j = 0;
    for (var i = 0; i < students.length; i++) {
        if (students[i].name == info) {
            ans[j] = students[i];
            j = j + 1;
        }
    }
    if (j != 0) {
        return ans;
    }
    return false;
}

function search5(students, info) {
    var ans = new Array();
    var j = 0;
    for (var i = 0; i < students.length; i++) {
        if (students[i].hometown == info) {
            ans[j] = students[i];
            j = j + 1;
        }
    }
    if (j != 0) {
        return ans;
    }
    return false;
}

function search3(students, info) {
    if (info.hasOwnProperty('age')) {
        var stu = search2(students, info.age)
        if (stu == false) {
            return false;
        }
        students = stu;
    }

    if (info.hasOwnProperty('name')) {
        var stu = search4(students, info.name)
        if (stu == false) {
            return false;
        }
        students = stu;
    }

    if (info.hasOwnProperty('hometown')) {
        var stu = search4(students, info.hometown)
        if (stu == false) {
            return false;
        }
        students = stu;
    }
    return students;
}


