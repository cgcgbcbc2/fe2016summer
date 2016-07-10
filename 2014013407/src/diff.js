function diff()
{
	"use strict";
	var student_messages_delete = arguments[0];
	var student_messages_all = arguments[1];
	var result = [];
	
	for(var i = 0; i < student_messages_all.length; i++)
	{
		var flag = false;
		for(var j = 0; j < student_messages_delete.length; j++)
		{
			if(student_messages_all[i].name == student_messages_delete[j].name)
			{
				flag = true;
				break;
			}
		}
		if(flag == false)
		{
			result.push(student_messages_all[i]);
		}
	}

	return result;
}