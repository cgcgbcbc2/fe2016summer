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
 

var info = [info1, info2, info3, info4, info5, info6];

//搜寻函数
function search(s1,s2){
	//数字
	//alert(typeof s2);
	if((typeof s2) == "number"){
		var flag = 0;
		for (var i = 0; i < s1.length; i++) {
			if (s1[i].age == s2) {
				alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
				console.log(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
				continue;
			}
			else{
				flag ++;
			}
		}
		if(flag == s1.length) {return false;}
		else return true;
	}
    //字符串
	if ((typeof s2) == "string") {
		var flag = 0;
		for(var i = 0; i < s1.length; i++){
			if (s1[i].name == s2) {
				//返回名称和该字符串同名的第1个同学的信息
				return s1[i].name+" "+s1[i].age+" "+s1[i].hometown;
			}
			else{
				flag ++;
			}
		}
		if(flag == s1.length){
			return false;
		}
	}
    //对象
    if ((typeof s2) == "object") {
    	if (Object.keys(s2).length ==0) {
    		for (var i = 0; i < s1.length; i++) {
    			alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
    		}
    		return true;
    	}
    	if (Object.keys(s2).length ==1) {
    		var flag = 0;
    		for(var i = 0; i < s1.length; i++){
    			if (s1[i].name == s2.name) {
    				alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
    			}
    			else if (s1[i].age == s2.age) {
                    alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown); 
                } 
    			else if (s1[i].hometown == s2.hometown) {
    				alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
    			}
    			else flag ++;
    		}
    		if(flag == s1.length)
    			return false;
    		else return true;
    	}
    	if (Object.keys(s2).length  == 2) {
    		var flag = 0;
    		for(var i = 0; i < s1.length; i++){
    			if (s1[i].name == s2.name && s1[i].age == s2.age) {
    				alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
    			}
    			else if (s1[i].age == s2.age && s1[i].hometown == s2.hometown) {
    				alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
    			}
    			else if (s1[i].hometown == s2.hometown && s1[i].name == s2.name) {
    				alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
    			}
    			else flag ++;
    		}
    		if(flag == s1.length)
    			return false;
    		else
    			return true;
    	}
    	if(Object.keys(s2).length == 3){
    		var flag = 0;
    		for(var i = 0; i < s1.length; i++){
    			if (s1[i].name == s2.name && s1[i].age == s2.age && s1[i].hometown == s2.hometown) {
    				alert(s1[i].name+" "+s1[i].age+" "+s1[i].hometown);
    			}
    			else flag ++;
    		}
    		if(flag == s1.length)
    			return false;
    		else return true;
    	}
    }
}

//显示出来

alert(search(info, {
	age:21, 
	hometown:'BeiJing'
}));

/*
alert(search(info, {
	name: "Amy",
	//age: 21,
    hometown: 'BeiJing'
}));
*/
//alert(search(info, 21));

//alert(search(info, "Amy"));

