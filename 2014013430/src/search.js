/**
 * Created by ZhangZiZhao on 2016/7/3.
 */
function student(name,age,hometown){
    this.name=name;
    this.age=age;
    this.hometown=hometown;
}

function search(students,a){
    var r=[];
    var type = typeof a;
    if(type=="number"){
        for(var e in students){
            if(students[e].age==a) r.push(students[e]);
        }
        if(r.length==0) return false;
        else return r;
    }
    if(type=="string"){
        for(var e in students) {
            if (students[e].name == a) return students[e];
        }
        return false;
    }
    if(type=="object"){
        for (var e in students) {
            var i=true;
            for(var property in a){
                i &= students[e][property]==a[property]
            }
            if(i) r.push(students[e]);
        }
        if(r.length==0) return false;
        else return r;
    }
    
}

function test()
{
    var a=new student("zz",19,"jj");
    var b=new student("wjw",19 ,"jj");
    var c=new student("ll",21,"sd");
    document.write(search([a,b,c],"zz")+"<br>");
    document.write(search([a,b,c],"zc")+"<br>");
    document.write(search([a,b,c],19)+"<br>");
    document.write(search([a,b,c],{age:19,hometown:"jj"})+"<br>");
}
test();