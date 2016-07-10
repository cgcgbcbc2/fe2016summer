var n, a, h;
function addinfo(n, a, h){
	return {
		name: n,
		age: a,
		hometown: h
	}
}

//存入info数组的元素
//info1等是一个object对象，info是一个包含各个对象的数组

var info1 = addinfo("Amy", 21, 'BeiJing');
var info2 = addinfo("Tom", 21, 'BeiJing');
var info3 = addinfo("Lily", 20, 'ShangHai');
var info4 = addinfo("SuSan", 21, 'TianJin');
var info5 = addinfo("Jerry", 20, 'HeNan');
var info6 = addinfo("Will", 21, 'ChongQing');
var info7 = addinfo("huqiang", 20, 'ChongQing');
 

var infoA = [info1, info2, info3, info4, info5];
var infoB = [info2, info4, info5, info6, info7];

//搜寻函数
function diff(s1,s2){
    var flag = 0, k = 0;
    var s = new Array();
	for(var i = 0; i < s2.length; i++){
        flag = 0;
        for(var j = 0; j < s1.length; j ++){
            if (s1[j].name == s2[i].name) {
                continue;
            }
            else {
               flag ++;
            }
        }
        if(flag == s1.length){
            s[k]=s2[i];
            k++;
        }
    }
    for(var i = 0; i < s.length; i ++){
        console.log(s[i].name+" "+s[i].age+" "+s[i].hometown);
    }
  return s;
}

diff(infoA, infoB);
