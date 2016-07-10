function search(){
	if(typeof arguments[1] == "number")                          //第二个参数为数字
	{
        var find = new Array();
        var k = 0;
		for(var i in arguments[0])
		{
			if(arguments[0][i].age == arguments[1])
			{
				find[k] = arguments[0][i];
				k++;
			}
		}
		if(find.length == 0)
			return false;
		else
			return find;
	}
    
	if(typeof arguments[1] == "string")                  //第二个参数为字符串
	{
		for(var i in arguments[0])
		{
			if(arguments[0][i].name == arguments[1])
			{
				return arguments[0][i];
			}
		}
		return false;
	}
    
	if(typeof arguments[1] == "object")                 //第二个参数为对象
	{
        var find = new Array();
        var k = 0;
		
        if(typeof arguments[1].name == "undefined" && typeof arguments[1].age == "undefined" && typeof arguments[1].hometown == "undefined"){
            for(var i in arguments[0]){
                find[k] = arguments[0][i];
                k++;
            }    
        }
        if(typeof arguments[1].name == "undefined" && typeof arguments[1].age == "undefined" && typeof arguments[1].hometown != "undefined"){
            for(var i in arguments[0]){
                if(arguments[0][i].hometown == arguments[1].hometown){
                    find[k] = arguments[0][i];
                    k++;
                }
            }     
        }
        if(typeof arguments[1].name == "undefined" && typeof arguments[1].age != "undefined" && typeof arguments[1].hometown != "undefined"){
            for(var i in arguments[0]){
                if(arguments[0][i].hometown == arguments[1].hometown && arguments[0][i].age == arguments[1].age){
                   find[k] = arguments[0][i];
                    k++; 
                }
            }    
        }
        if(typeof arguments[1].name == "undefined" && typeof arguments[1].age != "undefined" && typeof arguments[1].hometown == "undefined"){
            for(var i in arguments[0]){
                if(arguments[0][i].age == arguments[1].age){
                   find[k] = arguments[0][i];
                    k++; 
                }
            }        
        }
        if(typeof arguments[1].name != "undefined" && typeof arguments[1].age == "undefined" && typeof arguments[1].hometown == "undefined"){
            for(var i in arguments[0]){
                if(arguments[0][i].name == arguments[1].name){
                   find[k] = arguments[0][i];
                    k++; 
                }
            }     
        }
        if(typeof arguments[1].name != "undefined" && typeof arguments[1].age != "undefined" && typeof arguments[1].hometown == "undefined"){
            for(var i in arguments[0]){
                if(arguments[0][i].name == arguments[1].name && arguments[0][i].age == arguments[1].age){
                   find[k] = arguments[0][i];
                    k++; 
                }
            }       
        }
        if(typeof arguments[1].name != "undefined" && typeof arguments[1].age != "undefined" && typeof arguments[1].hometown != "undefined"){
            for(var i in arguments[0]){
                if(arguments[0][i].name == arguments[1].name && arguments[0][i].age == arguments[1].age && arguments[0][i].hometown == arguments[1].hometown){
                   find[k] = arguments[0][i];
                    k++; 
                }
            }
        }
        if(typeof arguments[1].name != "undefined" && typeof arguments[1].age == "undefined" && typeof arguments[1].hometown != "undefined"){
            for(var i in arguments[0]){
                if(arguments[0][i].name == arguments[1].name && arguments[0][i].hometown == arguments[1].hometown){
                   find[k] = arguments[0][i];
                    k++; 
                }
            }       
        }
        
        if(find.length == 0){
            return false;
        }
        else{
            return find;
        }
    }      
}