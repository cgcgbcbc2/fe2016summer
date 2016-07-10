"use strict";

//Search for information
function search(db, cond)
{	//Name
	if (cond.constructor==String)
	{	for (var i=0;i<db.length;i++)
			if (db[i].name===cond)
				return db[i];
	}
	//Age
	else if (cond.constructor==Number)
	{	var result = [];
		for (var i=0;i<db.length;i++)
			if (db[i].age===cond)
				result.push(db[i]);
		return result;
	}
	//Composite query
	else
	{	var result = [];
		for (var i=0;i<db.length;i++)
		{	var judge = true;
			for (var j in cond)
				judge = judge&&(cond[j]===db[i][j]);
			if (judge)
				result.push(db[i]);
		}
		return result;
	}
}

//Export function in Node.js
if (module&&module.exports)
	module.exports = search;
