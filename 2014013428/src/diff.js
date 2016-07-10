

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
	var students1;
	students1 = new Array();

	var students2;
	students2 = new Array();

	 //向第一个学生信息数组内添加学生
	function add_Student1(name,age,hometown)
	{
		var a;
		a = new Student(name,age,hometown);
		students1.push(a);
	}

	 //向第二个学生信息数组内添加学生
	function add_Student2(name,age,hometown)
	{
		var a;
		a = new Student(name,age,hometown);
		students2.push(a);
	}


    function diff(students1, students2)
	{
		var mark = 0;
		var temp;
		temp = new Array();
		for (var i = 0; i < students2.length; i++)
		{
			mark = 0;
			for (var j = 0; j < students1.length; j++)
			{
				if (students2[i]["name"] == students1[j]["name"])
				{
					mark = 1;
					break;
				}
			}
			if (mark == 0) temp.push(students2[i]);
		}	
		if (temp.length == 0) return(null);
		return(temp);
	}
    add_Student2('Amy',20,'Beijing');
    add_Student2('Ben',30,'Tianjin');
    add_Student2('Cindy',40,'Tangshan');
    add_Student2('Alice',20,'Shanghai');
    add_Student2('Ben',30,'Wuhan');
    add_Student2('Dency',40,'Wulumuqi');
    add_Student2('Honey',20,'Washington');
    add_Student2('Edi',30,'Seatle');
    add_Student2('Alice',40,'Chifeng');
    add_Student1('Amy',20,'Beijing');
    add_Student1('Ben',30,'Tianjin');
    add_Student1('Dency',40,'Wulumuqi');
    add_Student1('Honey',20,'Washington');
    add_Student1('Edi',30,'Seatle');
    add_Student1('Alice',40,'Chifeng');

	

