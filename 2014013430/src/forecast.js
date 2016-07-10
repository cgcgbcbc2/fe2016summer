/**
 * Created by ZhangZiZhao on 2016/7/3.
 */
var sixteenqiang={
    SWITZERLAND:100,
    POLAND:100,
    CROATIA:100,
    PORTUGAL:100,
    WALES:100,
    NORTHERN_IRELAND:100,
    HUNGARY:100,
    BELGIUM:100,
    GERMANY:100,
    SLOVAKIA:100,
    ITALY:100,
    SPAIN:100,
    FRANCE:100,
    REPUBLIC_OF_IRELAND:100,
    ENGLAND:200,
    ICELAND:100
}


//递归
function foo(countrys){
    var r={};
    var propertys=Object.getOwnPropertyNames(countrys);
    var len=propertys.length;
    if(len == 1){
        for(var k in countrys){
            r[k]=1;
        }
        return r;
    }
    var k =0;
    var suba={};
    var subb={};
    for(;k<len/2;k++)
    {
        suba[propertys[k]]=countrys[propertys[k]];
    }
    for(;k<len;k++)
    {
        subb[propertys[k]]=countrys[propertys[k]];
    }
    var a=foo(suba);//前半国家
    var b=foo(subb);
    for(var i in a){
        var temp = 0;
        for(var j in b){
            temp += b[j]*countrys[i]/(countrys[i]+countrys[j]);
        }
        r[i] = temp*a[i];
    }
    for(var s in b){
        var temp = 0;
        for(var t in a){
            temp += a[t]*countrys[s]/(countrys[t]+countrys[s]);
        }
        r[s] = temp*b[s];
    }
    return r;
}

function forecast(countrys,a){
//    document.write("forecast");
    var r = foo(countrys);
    console.log(r);
    return r[a];
}

document.write("ENGLAND的胜率为"+forecast(sixteenqiang,"ENGLAND")+"<br>");
