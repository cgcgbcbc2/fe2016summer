function search(students, inquery){
	var test=({
		'number': function(student, inquery){
			return student.age === inquery;
		},
		'string': function(student, inquery){
			return student.name === inquery;
		},
		'object': function(student, inquery){
			for (var property in inquery) {
				if (inquery.hasOwnProperty(property)){
					if(student[property] !== inquery[property]){
						return false;
					}
				}
			}
			return true;
		}
	})[typeof inquery];
	
	if(!test)
		throw "wrong input";

	var result = [];
	for (var i in students) {
		if(test(students[i])) {
			result.push(students[i]);
		}
	}

	if(result.length === 0){
		return false;
	}
	if(typeof inquery === "string"){
		return result[0];
	}
	return result;
}



function test() {
	var students = [{
			name: 'n1',
			age: 10,
			hometown: 'h1'
		}, {
			name: 'n2',
			age: 10,
			hometown: 'h2'
		}, {
			name: 'n3',
			age: 11,
			hometown: 'h2'
		}, {
			name: 'n4',
			age: 11,
			hometown: 'h3'
		}
	];
	console.log(search(students, 11));
	console.log(search(students, 'n2'));
	console.log(search(students, { age: 11, hometown: 'h3'}));
}