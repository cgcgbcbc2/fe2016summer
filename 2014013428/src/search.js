

    //构造学生对象
	function Student(name,age,hometown)  
	{
		var software_Student = new Object();
		software_Student.name = name;
		software_Student.age = age;
		software_Student.hometown = hometown;
		return(software_Student);
	}
    
    //全部学生信息
	var students;
	students = new Array();

	 //向全部学生信息内添加学生
	function add_Student(name,age,hometown)
	{
		var a;
		a = new Student(name,age,hometown);
		students.push(a);
	}

    function search(students, item){
    	//临时变量
		var temp = new Array();

		//item是数字的情况
    	if ((!isNaN(parseFloat(item))) && (isFinite(item)))
			{
				for (var i = 0; i < students.length; i++)
				{
					var x = students[i]["age"];
					if (x == parseInt(item))
					{
						temp.push(students[i]);
					}
				}
				if(temp.length == 0) return(false);
				return(temp);
			} else{
				if (Object.prototype.toString.call(item) === "[object String]")
				{
					for (var i = 0; i < students.length; i++)
					{
						var x = students[i]["name"];
						if (x == item)
						{
							return(students[i]);
						}
					}
					return(null);	
				} else{
				var a,b,c;
				a = 0;
				b = 0;
				c = 0;
				if (item.hasOwnProperty("name")) a = 1;
				if (item.hasOwnProperty("age")) b = 1;
				if (item.hasOwnProperty("hometown")) c = 1;

				if ((a == 0) && (b == 0) && (c == 0)) return(temp);

				if ((a == 1) && (b == 0) && (c == 0))
				{
					for (var i = 0; i < students.length; i++)
					{
						var x = students[i]["name"];
						if (x == item["name"])
						{
							temp.push(students[i]);
						}
					}
					if(temp.length == 0) return(false);
					return(temp);	
				}
	
				if ((a == 0) && (b == 1) && (c == 0))
				{
					for (var i = 0; i < students.length; i++)
					{
						var x = students[i]["age"];
						if (x == item["age"])
						{
							temp.push(students[i]);
						}
					}
					if(temp.length == 0) return(false);
					return(temp);	
				}

				if ((a == 0) && (b == 0) && (c == 1))
				{
					for (var i = 0; i < students.length; i++)
					{
						var x = students[i]["hometown"];
						if (x == item["hometown"])
						{
							temp.push(students[i]);
						}
					}
					if(temp.length == 0) return(false);
					return(temp);		
				}

				if ((a == 1) && (b == 1) && (c == 0))
				{
					for (var i = 0; i < students.length; i++)
					{
						var x = students[i]["name"];
						var y = students[i]["age"];
						if ((x == item["name"]) && (y == item["age"]))
						{
							temp.push(students[i]);
						}
					}
					if(temp.length == 0) return(false);
					return(temp);	
				}

				if ((a == 1) && (b == 0) && (c == 1))
				{
					for (var i = 0; i < students.length; i++)
					{
						var x = students[i]["name"];
						var y = students[i]["hometown"];
						if ((x == item["name"]) && (y == item["hometown"]))
						{
							temp.push(students[i]);
						}
					}
					if(temp.length == 0) return(false);
					return(temp);	
				}

				if ((a == 0) && (b == 1) && (c == 1))
				{
					for (var i = 0; i < students.length; i++)
					{
						var x = students[i]["age"];
						var y = students[i]["hometown"];
						if ((x == item["age"]) && (y == item["hometown"]))
						{
							temp.push(students[i]);
						}
					}
					if(temp.length == 0) return(false);
					return(temp);	
				}

				if ((a == 1) && (b == 1) && (c == 1))
				{
					for (var i = 0; i < students.length; i++)
					{
						var x = students[i]["name"];
						var y = students[i]["age"];
						var z = students[i]["hometown"];
						if ((x == item["name"]) && (y == item["age"]) &&(z== 	item["hometown"]))
						{
							temp.push(students[i]);
						}
					}
					if(temp.length == 0) return(false);
					return(temp);	
				}
			}
		}

    }

    add_Student('Amy',20,'Beijing');
    add_Student('Ben',30,'Tianjin');
    add_Student('Cindy',40,'Tangshan');
    add_Student('Alice',20,'Shanghai');
    add_Student('Ben',30,'Wuhan');
    add_Student('Dency',40,'Wulumuqi');
    add_Student('Honey',20,'Washington');
    add_Student('Edi',30,'Seatle');
    add_Student('Alice',40,'Chifeng');

	

