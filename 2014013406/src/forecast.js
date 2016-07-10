/**
 * forecast the final winner of the European Cup
 * @param  {object} map     each country's ability
 * @param  {string} country query country's name
 * @return {number}         the probability of query's winning
 */
function forecast(map, country) {
    var teams = [
        "Switzerland",
        "Poland",
        "Croatia",
        "Portugal",
        "Wales",
        "Northern Ireland",
        "Hungary",
        "Belgium",
        "Germany",
        "Slovakia",
        "Italy",
        "Spain",
        "France",
        "Republic of Ireland",
        "England",
        "Iceland"
    ];
    /**
     * return the probability of c1's winning c2
     * @param {string} c1, c2 country name
     */
    function AonB(c1, c2) {
        return map[c1] + map[c2] ? map[c1] / (map[c1] + map[c2]) : 0.5;
    }
    /**
     * append everyone(in c1)'s probability of winning this battle with the other set to an object o.
     * @param {Object} c1, c2, o set of names and probs of winning
     */
    function ASonBS(c1, c2, o) {
        var d1 = Object.keys(c1),
            d2 = Object.keys(c2);
        var p = 0.0;
        for (var i = 0; i < d1.length; i++) {
            p = 0.0;
            for (var j = 0; j < d2.length; j++) {
                p += c2[d2[j]] * AonB(d1[i], d2[j]);
            }
            p *= c1[d1[i]];
            o[d1[i]] = p;
        }
    }
    /**
     * create a winning set of names and probs of winning.
     * @param  {object} c1, c2 set of names and probs of winning
     * @return {object}    set of names and probs of winning (larger)
     */
    function winProb(c1, c2) {
        var o = {};
        ASonBS(c1, c2, o);
        ASonBS(c2, c1, o);
        return o;
    }
    /**
     * simulate one turn of competetion
     * @param  {array} arr current objects
     * @return {array}     next step objects
     */
    function turn(arr) {
        var d = [];
        while (arr.length > 1) {
            d.push(winProb(arr[arr.length - 1], arr[arr.length - 2]));
            arr.length -= 2;
        }
        return d;
    }
    // init
    var arr = [],
        _keys = Object.keys(map);
    for (var i = 0; i < _keys.length; i++) {
        var o = {};
        o[_keys[i]] = 1;
        arr.push(o);
    }
    // simulate
    while (arr.length > 1) {
        arr = turn(arr);
    }
    return arr[0][country];
}
