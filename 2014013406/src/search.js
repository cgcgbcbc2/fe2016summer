function search(data, info) {
    /**
     * Determine whether all the properties in o2 matches those in o1
     * @param  {Object} o1, o2 student info
     * @return {boolean}    the result
     */
    function match(o1, o2) {
        var flag = true,
            k = Object.keys(o2);
        for (var i = 0; i < k.length; i++) {
            if (o1[k[i]] != o2[k[i]]) {
                flag = false;
            }
        }
        return flag;
    }
    var d = [];
    switch (typeof info) {
        case "number":
            info = {
                age: info
            };
        case "object":
            for (var i = 0; i < data.length; i++) {
                if (match(data[i], info)) {
                    d.push(data[i]);
                }
            }
            if (d.length === 0) {
                return false;
            }
            return d;
        case "string":
            for (var j = 0; j < data.length; j++) {
                if (data[j].name == info) {
                    return data[j];
                }
            }
            return false;
    }
}
