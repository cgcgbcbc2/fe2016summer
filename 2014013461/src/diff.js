function diff(){
	var result = new Array()		//store the result
	result = arguments[1];
	for(var i = 0; i < result.length; i++){
		for(var j = 0; j < arguments[0].length; j++){
			if(arguments[0][j].name == result[i].name){
				result.splice(i,1);
				i--;
				continue;
			}
		}
	}
	return result;
}






/* diff( [{name:"Amy"},{name:"Mark"},{name:"kobe"}], [{name:"kobe"},{name:"allen"},{name:"Mark"},{name:"233"}] ) */