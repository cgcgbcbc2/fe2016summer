function diff(d1, d2) {
    d1.sort(function(a, b) {
        return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
    });
    d2.sort(function(a, b) {
        return a.name < b.name ? -1 : (a.name > b.name ? 1 : 0);
    });
    var i1 = 0,
        i2 = 0;
    var d = [];
    for (; i2 < d2.length; i2++) {
        while (i1 !== d1.length && d1[i1].name < d2[i2].name) {
            ++i1;
        }
        if (i1 === d1.length || d1[i1].name > d2[i2].name) {
            d.push(d2[i2]);
        }
    }
    return d;
}
