function search()
{
	var result;        //查询结果
	var x;             //循环序号
	var flag = false;  //是否找到符合要求的结果
	
	if(typeof arguments[1] == "number")
	{
		//第二个参数是数字
		result = new Array();
		for(x in arguments[0])
		{
			if(arguments[0][x].age == arguments[1])
			{
				result.push(arguments[0][x]);
				flag = true;
			}
		}
	}
	else if(typeof arguments[1] == "string")
	{
		//第二个参数是字符串
		for(x in arguments[0])
		{
			if(arguments[0][x].name == arguments[1])
			{
				result = arguments[0][x];
				flag = true;
				break;
			}
		}
	}
	else
	{
		//第二个参数是对象
		result = new Array();
		for(x in arguments[0])
		{
			//没有的属性直接无视，有的属性才比较是否相同
			if((!arguments[1].hasOwnProperty("name") || (arguments[0][x].name == arguments[1].name))
				&& (!arguments[1].hasOwnProperty("age") || (arguments[0][x].age == arguments[1].age))
				&& (!arguments[1].hasOwnProperty("hometown") || (arguments[0][x].hometown == arguments[1].hometown)))
			{
				result.push(arguments[0][x]);
				flag = true;
			}
		}
	}

	if(flag)
	{
		//有结果
		return result;
	}
	else
	{
		//没结果
		return false;
	}
}

/*
var stu = [{name:"Amy",age:21,hometown:"Beijing"},
		{name:"Bob",age:20,hometown:"Beijing"},
		{name:"Cindy",age:21,hometown:"Zhejiang"},
		{name:"Don",age:19,hometown:"Tianjin"},
		{name:"Eddie",age:20,hometown:"Guangdong"},
		{name:"Frank",age:20,hometown:"Beijing"},
		{name:"G",age:21,hometown:"Shenzhen"},
		{name:"Hans",age:21,hometown:"Jiangsu"},
		{name:"Ivan",age:21,hometown:"Beijing"},
		{name:"Jerry",age:21,hometown:"Beijing"},
		{name:"Bob",age:22,hometown:"Hangzhou"},
		{name:"Cindy",age:0,hometown:"Zhejiang"}];

var pat = {name:"Amy"};

console.log(search(stu, pat));
*/