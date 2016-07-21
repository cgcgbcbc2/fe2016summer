function  Student(name, age, hometown) {
    this.name = name;
    this.age = age;
    this.hometown = hometown;
}

var students = new Array();
//测试数据
students.push(new Student("Amy", 21, "Beijing"));
students.push(new Student("Bob", 20, "Guangzhou"));
students.push(new Student("Tom", 19, "Shanghai"));
students.push(new Student("Peter", 19, "chengdu"));
students.push(new Student("Jim", 18, "wuhan"));
students.push(new Student("Tim", 21, "taiyuan"));
students.push(new Student("Vic", 20, "chengdu"));

function search(studentArray, value) {
    //由于存储查找结果的数组
    var answer = new Array();
    //欲查找的数组的长度
    var length = studentArray.length;
    //查找类型是数字
    if (typeof value == "number") {
        //传入参数是一个数字
        //线性查找
        for (var x = 0; x < length; x++) {
            if (studentArray[x].age == value) {
                //将符合的结果存入结果数组中
                answer.push(studentArray[x]);
            }
        }
        if (answer.length == 0) {
            return false;
        }
        else {
            return answer;
        }
    }
    //查找类型是字符串
    else if (typeof  value == "string"){
        //传入参数是一个字符串
        for (var x = 0; x < length; x++){
            if(studentArray[x].name == value){
                //将符合的结果存入结果数组中
                answer.push(studentArray[x]);
                break;
            }
        }
        if (answer.length == 0){
            return false;
        }
        return answer;
    }
    //传入参数是一个对象
    else if(typeof  value == "object"){
        //传入参数是一个对象
        for (var x = 0; x < length; x++){
            var flag = true;
            for (var y in value){
                if(value[y] != studentArray[x][y]){
                    flag = false;
                }
            }
            if (flag){
               answer.push(studentArray[x]);
            }
        }
        if(answer.length == 0){
            return false;
        }
        return answer;
    }
    else{
        //传入参数是错类型的
        console.log("someting error.");
        return false;
    }
}

var ans = new Array();

ans = search(students, 19);
outputArray(ans);
ans = search(students, 21);
outputArray(ans);
ans = search(students, 20);
outputArray(ans);
ans = search(students, 1);
outputArray(ans);
ans = search(students, 17);
outputArray(ans);
console.log("***************************");
ans = search(students, "Vic");
outputArray(ans);
ans = search(students, "Bob");
outputArray(ans);
ans = search(students, "Sundy");
outputArray(ans);
ans = search(students, "Jim");
outputArray(ans);
console.log("***************************");
ans = search(students, {age:18});
outputArray(ans);
ans = search(students, {name:"Jim", age:18});
outputArray(ans);
ans = search(students, {name:"Vim", age:18});
outputArray(ans);
ans = search(students, {age:21, hometown:"Beijing"});
outputArray(ans);



function outputArray(answer) {
    if(answer.length == undefined){
        console.log("flase");
        return;
    }
    for(var x = 0; x < answer.length; x++){
        console.log(ans[x].name + "--" + ans[x].age + "--" + ans[x].hometown);
    }
}

