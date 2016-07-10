function diff(student_info1, student_info2)
{
    var result = new Array();
    var i = student_info1.length;
	var j = student_info2.length;
	for(var k = 0;k < i;k++)
	{
	    for(var l = 0;l < j;l++)
		{
		    if(student_info2[l].name != student_info1[k].name)
			{
			    result.push([student_info2[l]]);
			}
		}
	}
	return result;
}