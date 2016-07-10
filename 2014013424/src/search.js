// JavaScript Document
function search(information, query)
{
    var result;
    var i;
    var len = information.length;
    if(typeof(query) == 'number')
    {
    	result = new Array();
        for(i = 0; i < len; i++)
        {
        	if(information[i].age == query)
            {
            	result.push(information[i]);
            }
        }
		if(result.length == 0)
		{
			return 'false';
		}
    }
    else if(typeof(query) == 'string')
    {
    	for(i = 0; i < len; i++)
        {
        	if(information[i].name == query)
            {
            	result = information[i];
                break;
            }
        }
		if(i == len)
		{
			return 'false';
		}
    }
    else if(typeof(query) == 'object')
    {
    	result = new Array();
        for(i = 0; i < len; i++)
        {
        	if((query.name == information[i].name
            ||query.name == undefined)&&
            (query.age == information[i].age
            ||query.age == undefined) &&
            (query.hometown == information[i].hometown
            ||query.hometown == undefined))
            {
            	result.push(information[i]);
            }
        }
		if(result.length == 0)
		{
			return 'false';
		}
    }
    return result;
}