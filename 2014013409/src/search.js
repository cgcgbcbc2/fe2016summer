function search(students,a){
	if(a === null)
		return students;
	if(typeof a === "number"){
		var ageSame=[];
		for(var i=0;i<students.length;i++){
			if(students[i].age===a){
				ageSame.push(students[i]);
			}
		}
		if(ageSame.length>0)
			return ageSame;
		else
			return false;
	}
	else if(typeof a === "string"){
		for(var i=0;i<students.length;i++){
			if(students[i].name===a){
				return students[i];
			}
		}
		return false;
	}
	else if(typeof a === "object"){
		var infoSame=[];
		for(item in a){
			for(var j =0;j < students.length;j++){
				if(students[j].item ===a.item){
					var flag = 1;
					for(item in a){
						if(a.item != students[j].itme){
							flag = 0;
							break;
						}
					}
					if(flag===1)
						infoSame.push(students[j]);
				}
			}
			break;
		}
	}

}