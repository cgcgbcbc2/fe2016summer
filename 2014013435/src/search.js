function search(){
	var student;
	var result = new Array();
	if(!isNaN(arguments[1])){
		for(student in arguments[0]){
				if(student.age == arguments[1]){
					result[result.length] = student;
				}
		}
		return(result);
	}
	else if(typeof arguments[1] == "string"){
		for(student in arguments[0]){
				if(student.name == arguments[1]){
					return(student);
				}
		}
	}
	else if(typeof arguments[1] == "object"){
		for(student in arguments[0]){
				if((student.age == arguments[1].age||arguments[1].age == undefined)
					&&(student.name == arguments[1].name||arguments[1].name == undefined)
					&&(student.hometown == arguments[1].homwtown||arguments[1].hometown == undefined)){
					result[result.length] = student;
				}
		}
		return(result);
	}
}