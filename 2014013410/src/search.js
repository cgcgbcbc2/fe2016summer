

		function search()
		{
			if(typeof arguments[1] == 'number')
			{
				var ageInfo = new Array();
				for(var i = 0; i <arguments[0].length; i++)
				{
					if(arguments[0][i].age == arguments[1])
					{
						ageInfo.push(arguments[0][i]);
					}
				}
				if(ageInfo.length == 0)
				{
					return false;
				}
				else 
				{
					return ageInfo;
				}				
			}
			else if(typeof arguments[1] == 'string')
			{
				for(var i = 0; i <arguments[0].length; i++)
				{
					if(arguments[0][i].name == arguments[1])
					{
						return arguments[0][i];
					}
				}
				return false;
			}
			else if(typeof arguments[1] == 'object')
			{
				var arr = Object.keys(arguments[1]);
				var index = new Array();
				for(var i=0; i< arr.length; i++)
				{
					if(arr[i] == 'name')
					{
						index.push('name');
					}
					else if(arr[i] == 'age')
					{
						index.push('age');
					}
					else if(arr[i] == 'hometown')
					{
						index.push('hometown');
					}
				}
				var objInfo = new Array();
				for(var i = 0; i <arguments[0].length; i++)
				{
					var same = 1; 
					for(var j = 0; j < arr.length; j++)
					{
						if(arguments[0][i][index[j]] != arguments[1][index[j]])
						{
							same = 0;
						}
					}
					if(same == 1)
					{
						objInfo.push(arguments[0][i]);
					}
				}
				if(objInfo.length == 0)
				{
					return false;
				}
				else
				{
					return objInfo;
				}
			}
		}	
