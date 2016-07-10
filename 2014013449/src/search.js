function search(StudentInfo) {
    if (typeof arguments[1] == "number") {
        var result = [];
        var count = 0;
        for (var i = 0; i < StudentInfo.length; i++) {
            if (StudentInfo[i].age == arguments[1]) {
                result[count] = StudentInfo[i];
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
    else if (typeof arguments[1] == "string") {
        for (var i = 0; i < StudentInfo.length; i++) {
            if (StudentInfo[i].name == arguments[1]) {
                return StudentInfo[i];
            }
        }
        return false;
    }
    else {
        var result = [];
        var count = 0;
        for (var i = 0; i < StudentInfo.length; i++) {
            if (arguments[1].hasOwnProperty('name')) {
                if (StudentInfo[i].name != arguments[1].name) {
                    continue;
                }
            }
            if (arguments[1].hasOwnProperty('age')) {
                if (StudentInfo[i].age != arguments[1].age) {
                    continue;
                }
            }
            if (arguments[1].hasOwnProperty('hometown')) {
                if (StudentInfo[i].hometown != arguments[1].hometown) {
                    continue;
                }
            }

            result[count] = StudentInfo[i];
            count++;
        }
        
        if (count == 0) {
            return false;
        }
        else {
            return result;
        }
    }
}