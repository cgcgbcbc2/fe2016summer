function diff(StudentInfo1, StudentInfo2) {
    var result = [];
    var count = 0;
    for (var i = 0; i < StudentInfo2.length; i++) {
        var flag = true;
        for (var j = 0; j < StudentInfo1.length; j++) {
            if (StudentInfo1[j].name == StudentInfo2[i].name) {
                flag = false;
                break;
            }
        }
        if (flag == true) {
            result[count] = StudentInfo2[i];
            count++;
        }
    }
    if (count == 0) {
        return false;
    }
    else {
        return result;
    }
}