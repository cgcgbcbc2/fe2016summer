//进阶练习1-forecast

(function () {
    'use strict';

    //该文件的全局变量
    var index,
        table;

    //初始化操作，引入参数
    function init() {
        index = {
            'Switzerland': [0, 0, 0, 0],
            'Poland': [0, 0, 0, 1],
            'Croatia': [0, 0, 1, 0],
            'Portugal': [0, 0, 1, 1],
            'Wales': [0, 1, 0, 0],
            'Northern Ireland': [0, 1, 0, 1],
            'Hungary': [0, 1, 1, 0],
            'Belgium': [0, 1, 1, 1],
            'Germany': [1, 0, 0, 0],
            'Slovakia': [1, 0, 0, 1],
            'Italy': [1, 0, 1, 0],
            'Spain': [1, 0, 1, 1],
            'France': [1, 1, 0, 0],
            'Republic of Ireland': [1, 1, 0, 1],
            'England': [1, 1, 1, 0],
            'Iceland': [1, 1, 1, 1]
        };
        table = [[[[0, 0], [0, 0]],
                [[0, 0], [0, 0]]],
                [[[0, 0], [0, 0]],
                [[0, 0], [0, 0]]]];//四维数组方便计算
    }

    //用两队的实力预测胜率
    function fc(a, b) {
        if (!(a||b)) {
            return 0.5;
        } else {
            return a / (a + b);
        }
    }

    //param: 查询的四维向量, 获胜次数(1~4)
    function getWinning(v, n) {
        var a = table[v[0]][v[1]][v[2]][v[3]];
        if (n === 0) {
            return 1;
        } else if (n === 1) {
            return fc(a, table[v[0]][v[1]][v[2]][1-v[3]]);
        } else if (n == 2) {
            return getWinning(v, 1) * (
                fc(a, table[v[0]][v[1]][1-v[2]][0]) *
                getWinning([v[0], v[1], 1-v[2], 0], 1) +
                fc(a, table[v[0]][v[1]][1-v[2]][1]) *
                getWinning([v[0], v[1], 1-v[2], 1], 1)
            );
        } else if (n == 3) {
            return getWinning(v, 2) * (
                fc(a, table[v[0]][1-v[1]][0][0]) *
                getWinning([v[0], 1-v[1], 0, 0], 2) +
                fc(a, table[v[0]][1-v[1]][0][1]) *
                getWinning([v[0], 1-v[1], 0, 1], 2) +
                fc(a, table[v[0]][1-v[1]][1][0]) *
                getWinning([v[0], 1-v[1], 1, 0], 2) +
                fc(a, table[v[0]][1-v[1]][1][1]) *
                getWinning([v[0], 1-v[1], 1, 1], 2)
            );
        } else if (n == 4) {
            return getWinning(v, 3) * (
                fc(a, table[1-v[0]][0][0][0]) *
                getWinning([1-v[0], 0, 0, 0], 3) +
                fc(a, table[1-v[0]][0][0][1]) *
                getWinning([1-v[0], 0, 0, 1], 3) +
                fc(a, table[1-v[0]][0][1][0]) *
                getWinning([1-v[0], 0, 1, 0], 3) +
                fc(a, table[1-v[0]][0][1][1]) *
                getWinning([1-v[0], 0, 1, 1], 3) +
                fc(a, table[1-v[0]][1][0][0]) *
                getWinning([1-v[0], 1, 0, 0], 3) +
                fc(a, table[1-v[0]][1][0][1]) *
                getWinning([1-v[0], 1, 0, 1], 3) +
                fc(a, table[1-v[0]][1][1][0]) *
                getWinning([1-v[0], 1, 1, 0], 3) +
                fc(a, table[1-v[0]][1][1][1]) *
                getWinning([1-v[0], 1, 1, 1], 3)
            );
        } else {
            return getWinning(v, 4);
        }
    }

    //接口函数
    window.forecast = function(list, query) {
        init();
        for (var name in list) {
            var a = index[name];
            table[a[0]][a[1]][a[2]][a[3]] = list[name];
        }
        return getWinning(index[query], 4);
    };
})();

/* TeamList:
Switzerland
Poland
Croatia
Portugal
Wales
Northern Ireland
Hungary
Belgium
Germany
Slovakia
Italy
Spain
France
Republic of Ireland
England
Iceland
*/
