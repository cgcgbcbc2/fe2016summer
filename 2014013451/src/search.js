var findAge = function(age, list) {
	for (i = 0; i < list.length; i++) {
		if (age == list[i].age) {
			return list[i]
		}
	}
}

var findName = function(name, list) {
	for (i = 0; i < list.length; i++) {
		if (name == list[i].name) {
			return list[i]
		}
	}
}

var findObj = function(obj, list) {
	for (i = 0; i < list.length; i++) {
		if (_.isEqual(obj, list[i].name)) {
			return list[i]
		}
	}
}

var search = function(info, list) {
	if (typeof info == 'string') {
		return findName(info, list);
	}
	else
	if (typeof info == 'number') {
		return findAge(info, list);
	}
	else {
		return findObj(info, list);
	}
}