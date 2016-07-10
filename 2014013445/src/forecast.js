function _2to1(ranks_info,ranks1,ranks2)
{
	var a = ranks_info[ranks1];
	var b = ranks_info[ranks2];
	return a / (a + b);
}

function _4to1(ranks_info,ranks1,ranks2,ranks3,ranks4)
{
    	var a = _2to1(ranks_info,ranks1,ranks2);
	var b = _2to1(ranks_info,ranks3,ranks4);
	var c = _2to1(ranks_info,ranks4,ranks3);
	return a * b * _2to1(ranks_info,ranks1,ranks3) + a * c * _2to1(ranks_info,ranks1,ranks4);
}

function _8to1(ranks_info,ranks1,ranks2,ranks3,ranks4,ranks5,ranks6,ranks7,ranks8)
{
    	var a = _4to1(ranks_info,ranks1,ranks2,ranks3,ranks4);
	var b = _4to1(ranks_info,ranks5,ranks6,ranks7,ranks8);
	var c = _4to1(ranks_info,ranks6,ranks5,ranks7,ranks8);
	var d = _4to1(ranks_info,ranks7,ranks8,ranks5,ranks6);
	var e = _4to1(ranks_info,ranks8,ranks7,ranks5,ranks6);
	return a * b * _2to1(ranks_info,ranks1,ranks5) + a * c * _2to1(ranks_info,ranks1,ranks6) + a * d * _2to1(ranks_info,ranks1,ranks7) + a * e * _2to1(ranks_info,ranks1,ranks8)
}

function forecast(ranks_info, ranks_search)
{
    	var a = _8to1(ranks_info,"瑞士","波兰","克罗地亚","葡萄牙","威尔士","北爱尔兰","匈牙利","比利时");
	var b = _8to1(ranks_info,"波兰","瑞士","克罗地亚","葡萄牙","威尔士","北爱尔兰","匈牙利","比利时");
	var c = _8to1(ranks_info,"克罗地亚","葡萄牙","瑞士","波兰","威尔士","北爱尔兰","匈牙利","比利时");
	var d = _8to1(ranks_info,"葡萄牙","克罗地亚","瑞士","波兰","威尔士","北爱尔兰","匈牙利","比利时");
	var e = _8to1(ranks_info,"威尔士","北爱尔兰","匈牙利","比利时","瑞士","波兰","克罗地亚","葡萄牙");
	var f = _8to1(ranks_info,"北爱尔兰","威尔士","匈牙利","比利时","瑞士","波兰","克罗地亚","葡萄牙");
	var g = _8to1(ranks_info,"匈牙利","比利时","威尔士","北爱尔兰","瑞士","波兰","克罗地亚","葡萄牙");
	var h = _8to1(ranks_info,"比利时","匈牙利","威尔士","北爱尔兰","瑞士","波兰","克罗地亚","葡萄牙");
	var i = _8to1(ranks_info,"德国","斯洛伐克","意大利","西班牙","法国","爱尔兰","英格兰","冰岛");
	var j = _8to1(ranks_info,"斯洛伐克","德国","意大利","西班牙","法国","爱尔兰","英格兰","冰岛");
	var k = _8to1(ranks_info,"意大利","西班牙","德国","斯洛伐克","法国","爱尔兰","英格兰","冰岛");
	var l = _8to1(ranks_info,"西班牙","意大利","德国","斯洛伐克","法国","爱尔兰","英格兰","冰岛");
	var m = _8to1(ranks_info,"法国","爱尔兰","英格兰","冰岛","德国","斯洛伐克","意大利","西班牙");
	var n = _8to1(ranks_info,"爱尔兰","法国","英格兰","冰岛","德国","斯洛伐克","意大利","西班牙");
	var o = _8to1(ranks_info,"英格兰","冰岛","法国","爱尔兰","德国","斯洛伐克","意大利","西班牙");
	var p = _8to1(ranks_info,"冰岛","英格兰","法国","爱尔兰","德国","斯洛伐克","意大利","西班牙");
    	if(ranks_search == "瑞士")
	{
		return a * i * _2to1(ranks_info,"瑞士","德国") + a * j* _2to1(ranks_info,"瑞士","斯洛伐克") + a * k * _2to1(ranks_info,"瑞士","意大利") + 
		a * l * _2to1(ranks_info,"瑞士","西班牙") + a * m * _2to1(ranks_info,"瑞士","法国") + a * n * _2to1(ranks_info,"瑞士","爱尔兰") + a * o * _2to1(ranks_info,"瑞士","英格兰") +
		a * p * _2to1(ranks_info,"瑞士","冰岛");
	}
	else if(ranks_search == "波兰")
	{
		return b * i * _2to1(ranks_info,"波兰","德国") + b * j* _2to1(ranks_info,"波兰","斯洛伐克") + b * k * _2to1(ranks_info,"波兰","意大利") + 
		b * l * _2to1(ranks_info,"波兰","西班牙") + b * m * _2to1(ranks_info,"波兰","法国") + b * n * _2to1(ranks_info,"波兰","爱尔兰") + b * o * _2to1(ranks_info,"波兰","英格兰") +
		b * p * _2to1(ranks_info,"波兰","冰岛");
	}
	else if(ranks_search == "克罗地亚")
	{
		return c * i * _2to1(ranks_info,"克罗地亚","德国") + c * j* _2to1(ranks_info,"克罗地亚","斯洛伐克") + c * k * _2to1(ranks_info,"克罗地亚","意大利") + 
		c * l * _2to1(ranks_info,"克罗地亚","西班牙") + c * m * _2to1(ranks_info,"克罗地亚","法国") + c * n * _2to1(ranks_info,"克罗地亚","爱尔兰") + c * o * _2to1(ranks_info,"克罗地亚","英格兰") +
		c * p * _2to1(ranks_info,"克罗地亚","冰岛");
	}
	else if(ranks_search == "葡萄牙")
	{
		return d * i * _2to1(ranks_info,"葡萄牙","德国") + d * j* _2to1(ranks_info,"葡萄牙","斯洛伐克") + d * k * _2to1(ranks_info,"葡萄牙","意大利") + 
		d * l * _2to1(ranks_info,"葡萄牙","西班牙") + d * m * _2to1(ranks_info,"葡萄牙","法国") + d * n * _2to1(ranks_info,"葡萄牙","爱尔兰") + d * o * _2to1(ranks_info,"葡萄牙","英格兰") +
		d * p * _2to1(ranks_info,"葡萄牙","冰岛");	
	}
	else if(ranks_search == "威尔士")
	{
		return e * i * _2to1(ranks_info,"威尔士","德国") + e * j* _2to1(ranks_info,"威尔士","斯洛伐克") + e * k * _2to1(ranks_info,"威尔士","意大利") + 
		e * l * _2to1(ranks_info,"威尔士","西班牙") + e * m * _2to1(ranks_info,"威尔士","法国") + e * n * _2to1(ranks_info,"威尔士","爱尔兰") + e * o * _2to1(ranks_info,"威尔士","英格兰") +
		e * p * _2to1(ranks_info,"威尔士","冰岛");	
	}
	else if(ranks_search == "北爱尔兰")
	{
		return f * i * _2to1(ranks_info,"北爱尔兰","德国") + f * j* _2to1(ranks_info,"北爱尔兰","斯洛伐克") + f * k * _2to1(ranks_info,"北爱尔兰","意大利") + 
		f * l * _2to1(ranks_info,"北爱尔兰","西班牙") + f * m * _2to1(ranks_info,"北爱尔兰","法国") + f * n * _2to1(ranks_info,"北爱尔兰","爱尔兰") + f * o * _2to1(ranks_info,"北爱尔兰","英格兰") +
		f * p * _2to1(ranks_info,"北爱尔兰","冰岛");
	}
	else if(ranks_search == "匈牙利")
	{
		return g * i * _2to1(ranks_info,"匈牙利","德国") + g * j* _2to1(ranks_info,"匈牙利","斯洛伐克") + g * k * _2to1(ranks_info,"匈牙利","意大利") + 
		g * l * _2to1(ranks_info,"匈牙利","西班牙") + g * m * _2to1(ranks_info,"匈牙利","法国") + g * n * _2to1(ranks_info,"匈牙利","爱尔兰") + g * o * _2to1(ranks_info,"匈牙利","英格兰") +
		g * p * _2to1(ranks_info,"匈牙利","冰岛");
	}
	else if(ranks_search == "比利时")
	{
		return h * i * _2to1(ranks_info,"比利时","德国") + h * j* _2to1(ranks_info,"比利时","斯洛伐克") + h * k * _2to1(ranks_info,"比利时","意大利") + 
		h * l * _2to1(ranks_info,"比利时","西班牙") + h * m * _2to1(ranks_info,"比利时","法国") + h * n * _2to1(ranks_info,"比利时","爱尔兰") + h * o * _2to1(ranks_info,"比利时","英格兰") +
		h * p * _2to1(ranks_info,"比利时","冰岛");
	}
	else if(ranks_search == "德国")
	{
		return i * a * _2to1(ranks_info,"德国","瑞士") + i * b * _2to1(ranks_info,"德国","波兰") + i * c * _2to1(ranks_info,"德国","克罗地亚") + 
		i * d * _2to1(ranks_info,"德国","葡萄牙") + i * e * _2to1(ranks_info,"德国","威尔士") + i * f * _2to1(ranks_info,"德国","北爱尔兰") + i * g * _2to1(ranks_info,"德国","匈牙利") +
		i * h * _2to1(ranks_info,"德国","比利时");
	}
	else if(ranks_search == "斯洛伐克")
	{
		return j * a * _2to1(ranks_info,"斯洛伐克","瑞士") + j * b * _2to1(ranks_info,"斯洛伐克","波兰") + j * c * _2to1(ranks_info,"斯洛伐克","克罗地亚") + 
		j * d * _2to1(ranks_info,"斯洛伐克","葡萄牙") + j * e * _2to1(ranks_info,"斯洛伐克","威尔士") + j * f * _2to1(ranks_info,"斯洛伐克","北爱尔兰") + j * g * _2to1(ranks_info,"斯洛伐克","匈牙利") +
		j * h * _2to1(ranks_info,"斯洛伐克","比利时");	
	}
	else if(ranks_search == "意大利")
	{
		return k * a * _2to1(ranks_info,"意大利","瑞士") + k * b * _2to1(ranks_info,"意大利","波兰") + k * c * _2to1(ranks_info,"意大利","克罗地亚") + 
		k * d * _2to1(ranks_info,"意大利","葡萄牙") + k * e * _2to1(ranks_info,"意大利","威尔士") + k * f * _2to1(ranks_info,"意大利","北爱尔兰") + k * g * _2to1(ranks_info,"意大利","匈牙利") +
		k * h * _2to1(ranks_info,"意大利","比利时");	
	}
	else if(ranks_search == "西班牙")
	{
		return l * a * _2to1(ranks_info,"西班牙","瑞士") + l * b * _2to1(ranks_info,"西班牙","波兰") + l * c * _2to1(ranks_info,"西班牙","克罗地亚") + 
		l * d * _2to1(ranks_info,"西班牙","葡萄牙") + l * e * _2to1(ranks_info,"西班牙","威尔士") + l * f * _2to1(ranks_info,"西班牙","北爱尔兰") + l * g * _2to1(ranks_info,"西班牙","匈牙利") +
		l * h * _2to1(ranks_info,"西班牙","比利时");	
	}
	else if(ranks_search == "法国")
	{
		return m * a * _2to1(ranks_info,"法国","瑞士") + m * b * _2to1(ranks_info,"法国","波兰") + m * c * _2to1(ranks_info,"法国","克罗地亚") + 
		m * d * _2to1(ranks_info,"法国","葡萄牙") + m * e * _2to1(ranks_info,"法国","威尔士") + m * f * _2to1(ranks_info,"法国","北爱尔兰") + m * g * _2to1(ranks_info,"法国","匈牙利") +
		m * h * _2to1(ranks_info,"法国","比利时");
	}
	else if(ranks_search == "爱尔兰")
	{
		return n * a * _2to1(ranks_info,"爱尔兰","瑞士") + n * b * _2to1(ranks_info,"爱尔兰","波兰") + n * c * _2to1(ranks_info,"爱尔兰","克罗地亚") + 
		n * d * _2to1(ranks_info,"爱尔兰","葡萄牙") + n * e * _2to1(ranks_info,"爱尔兰","威尔士") + n * f * _2to1(ranks_info,"爱尔兰","北爱尔兰") + n * g * _2to1(ranks_info,"爱尔兰","匈牙利") +
		n * h * _2to1(ranks_info,"爱尔兰","比利时");
	}
	else if(ranks_search == "英格兰")
	{
		return o * a * _2to1(ranks_info,"英格兰","瑞士") + o * b * _2to1(ranks_info,"英格兰","波兰") + o * c * _2to1(ranks_info,"英格兰","克罗地亚") + 
		o * d * _2to1(ranks_info,"英格兰","葡萄牙") + o * e * _2to1(ranks_info,"英格兰","威尔士") + o * f * _2to1(ranks_info,"英格兰","北爱尔兰") + o * g * _2to1(ranks_info,"英格兰","匈牙利") +
		o * h * _2to1(ranks_info,"英格兰","比利时");	
	}
	else if(ranks_search == "冰岛")
	{
		return p * a * _2to1(ranks_info,"冰岛","瑞士") + p * b * _2to1(ranks_info,"冰岛","波兰") + p * c * _2to1(ranks_info,"冰岛","克罗地亚") + 
		p * d * _2to1(ranks_info,"冰岛","葡萄牙") + p * e * _2to1(ranks_info,"冰岛","威尔士") + p * f * _2to1(ranks_info,"冰岛","北爱尔兰") + p * g * _2to1(ranks_info,"冰岛","匈牙利") +
		p * h * _2to1(ranks_info,"冰岛","比利时");
	}
	else
	{
	    alert("输入的队名不正确");
	}
}
