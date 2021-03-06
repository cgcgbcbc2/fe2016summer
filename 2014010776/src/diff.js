function diff(stulist1, stulist2)
{
    var stuin = new Array(), stuout = new Array();
    for(var i = 0; i < stulist2.length; i++)   //首先调用循环，找到在同时在数组1和数组2中的元素
    {
        for(var j = 0; j < stulist1.length; j++)
             if(stulist1[j].name == stulist2[i].name)
            {
                stuin[stuin.length] = i;   //记录下这个元素在数组2之中的位置
                break;
            }   
    }
    var pos = 0;   //当前的记录数组的位置
    for(i = 0; i < stulist2.length; i++)
    {
        if(i == stuin[pos])  //由于记录数组中的数是从小到大递增的，所以找到一个时只需要增加pos就可以了
        {  
            pos++; 
            continue;
        }
        else   //如果该位置对应的元素不在记录数组中，说明该元素不在数组1中，将其保存起来
        {
            stuout[stuout.length] = stulist2[i];
        }
    }
    return stuout;  //返回最终结果
}