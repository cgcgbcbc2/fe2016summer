function search()
{
	"use strict";
	var student_messages = arguments[0];
	var result = [];
	if((typeof arguments[1]) == "number")
	{
		var aim_age = arguments[1];
		for(var i = 0; i < student_messages.length; i++)
		{
			if(student_messages[i].age == aim_age)
			{
				result.push(student_messages[i]);
			}
		}
		if(result.length == 0)
		{
			return false;
		}
		return result;
	}
	else if(typeof arguments[1] == "string")
	{
		var aim_name = arguments[1];
		for(var i = 0; i < student_messages.length; i++)
		{
			if(student_messages[i].name == aim_name)
			{
				return student_messages[i];
			}
		}
		return false;
	}
	else if(typeof arguments[1] == "object")
	{
		var aim_obj = arguments[1];
		for(var i = 0; i < student_messages.length; i++)
		{		
			if((student_messages[i].name == aim_obj.name || aim_obj.name == null)
			&& (student_messages[i].age == aim_obj.age || aim_obj.age == null)
			&& (student_messages[i].hometown == aim_obj.hometown || aim_obj.hometown == null))
			{
				result.push(student_messages[i]);
			}
		}
		if(result.length == 0)
		{
			return false;
		}
		return result;
	}
}