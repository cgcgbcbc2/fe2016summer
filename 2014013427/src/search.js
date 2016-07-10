function search(students, query){
	var innerSearch = function(){};
	var queryType = typeof query;
	if(queryType == "number"){
		innerSearch = function(student){
			return student.age === query;
		}
	}
	else if(queryType == "string"){
		innerSearch = function(student){
			return student.name === query;
		}
	}
	else if(queryType == "object"){
		innerSearch = function(student){
			for(var property in student){
				if(query.hasOwnProperty(property)){
					if(query.property !== student.property){
						return false;
					}
				}
			}
			return true;
		}
	}
	else{
		throw "Query Type Is Wrong!";
	}

	var studentList = [];
	for(var i in students){
		if(innerSearch(students[i])){
			studentList.push(students[i]);
		}
	}
	if(studentList.length === 0)
		return false;
	if(queryType === "string")
		return studentList[0];
	return studentList;
}