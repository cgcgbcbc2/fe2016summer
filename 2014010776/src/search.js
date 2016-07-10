function search(stulist, stu)
{
        if(typeof stu == "number")   //如果第二个参数是数字类型
        {
            var rel = new Array(), total = 0;
            for(var i = 0; i < stulist.length; i++)   //遍历数组所有元素，将符合要求的元素存入rel数组中
            {
                if(stulist[i].age == stu)
                {
                    rel[total] = stulist[i];
                    total++;
                } 
            }        
            return rel;  //返回rel数组
        }
        else if(typeof stu == "string")   //如果第二个参数为字符串类型
        {
            for(var i = 0; i < stulist.length; i++)
            {
                if(stulist[i].name == stu)
                    return stulist[i];   //找到第一个符合要求的元素并返回
            }
        }
        else if(typeof stu == "object")  //如果第二个参数为对象类型
        {
            var rel1 = new Array(), rel2 = new Array(), rel3 = new Array, total1 = 0;
            if (typeof stu.age == "number")  //如果age属性存在，找到符合要求的
            {
                for(var i = 0; i < stulist.length; i++)
                    if(stulist[i].age == stu.age)
                        rel1[rel1.length] = stulist[i];
            }
            else
                rel1 = stulist;   //否则，直接筛选所有的数组元素
            if(typeof stu.name == "string")   //同理，如果name属性存在，找到符合要求的
            {
                for(i = 0; i < rel1.length; i++)
                    if(rel1[i].name == stu.name)
                        rel2[rel2.length] = rel1[i];
            }
            else
                rel2 = rel1;  //否则，直接赋值所有元素
            if(typeof stu.hometown == "string")   //同上
            {
                for(i = 0; i < rel2.length; i++)
                    if(rel2[i].hometown == stu.hometown)
                        rel3[rel3.length] = rel2[i];
            }
            else 
                rel3 = rel2;
            return rel3;   //返回三次查找后的最终结果。
        }
    }