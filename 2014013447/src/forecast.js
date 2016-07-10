var teams = {
	"Switzerland": 100,
	"Poland": 90,
	"Croatia": 80,
	"Portugal": 70,
	"Wales": 60,
	"Northern Ireland": 50,
	"Hungary": 40,
	"Belgium": 30,
	"Germany": 20,
	"Slovakia": 10,
	"Italy": 110,
	"Spain": 120,
	"France": 130,
	"Republic of Ireland": 140,
	"England": 150,
	"Iceland":160
}

function forecast(f1, f2){
    if ((typeof f1) != "object") {return false;}
	if((typeof f2) != "string"){return false;}
	//根据对阵图求f2对应的国家取得最终冠军的概率
	
	//各键值
	var k1 = f1["Switzerland"];
	var k2 = f1["Poland"];
	var k3 = f1["Croatia"];
	var k4 = f1["Portugal"];
	var k5 = f1["Wales"];
	var k6 = f1["Northern Ireland"];
	var k7 = f1["Hungary"];
	var k8 = f1["Belgium"];
    var k9 = f1["Germany"];
    var k10= f1["Slovakia"];
    var k11= f1["Italy"];
    var k12= f1["Spain"];
    var k13= f1["France"];
    var k14= f1["Republic of Ireland"];
    var k15= f1["England"];
    var k16= f1["Iceland"];

    //第一轮过后各队取胜的概率
    var p11= k1/(k1+k2);
    var p12= k2/(k1+k2);
    var p13= k3/(k3+k4);
    var p14= k4/(k3+k4);
    var p15= k5/(k5+k6);
    var p16= k6/(k5+k6);
    var p17= k7/(k7+k8);
    var p18= k8/(k7+k8);

    var p19= k9/(k9+k10);
    var p110= k10/(k9+k10);
    var p111= k11/(k11+k12);
    var p112= k12/(k11+k12);
    var p113= k13/(k13+k14);
    var p114= k14/(k13+k14);
    var p115= k15/(k15+k16);
    var p116= k16/(k15+k16);

    //第二轮过后各队的取胜概率
    var p21 = p11 * (p13 * (k1/(k1+k3)) + p14 * (k1/(k1+k4)));
    var p22 = p12 * (p13 * (k2/(k2+k3)) + p14 * (k2/(k2+k4)));
    var p23 = p13 * (p11 * (k3/(k3+k1)) + p12 * (k3/(k3+k2)));
    var p24 = p14 * (p11 * (k4/(k4+k1)) + p14 * (k4/(k4+k2)));
    var p25 = p15 * (p17 * (k5/(k5+k7)) + p18 * (k5/(k5+k8)));
    var p26 = p16 * (p17 * (k6/(k6+k7)) + p18 * (k6/(k6+k8)));
    var p27 = p17 * (p15 * (k7/(k7+k5)) + p16 * (k7/(k7+k6)));
    var p28 = p18 * (p15 * (k8/(k8+k5)) + p16 * (k8/(k8+k6)));

    var p29 = p19 * (p111 * (k9/(k9+k11))+ p112*(k9/(k9+k12)));
    var p210= p110* (p111 * (k10/(k10+k11)) + p112*(k10/(k10+k12)));
    var p211= p111* (p19 * (k11/(k11+k9)) + p110*(k11/(k11+k10)));
    var p212= p112* (p19 * (k12/(k12+k9)) + p110*(k12/(k12+k10)));
    var p213= p113* (p115* (k13/(k13+k15))+ p116*(k13/(k13+k16)));
    var p214= p114* (p115* (k14/(k14+k15))+ p116*(k14/(k14+k16)));
    var p215= p115* (p113* (k15/(k15+k13))+ p114*(k15/(k15+k14)));
    var p216= p116* (p113* (k16/(k16+k13))+ p116*(k16/(k16+k14)));

    //第三轮过后各队的取胜情况
    var p31= p21 * (p25*(k1/(k1+k5)) + p26*(k1/(k1+k6)) + p27*(k1/(k1+k7)) + p28*(k1/(k1+k8)));
    var p32= p22 * (p25*(k2/(k2+k5)) + p26*(k2/(k2+k6)) + p27*(k2/(k2+k7)) + p28*(k2/(k2+k8)));
    var p33= p23 * (p25*(k3/(k3+k5)) + p26*(k3/(k3+k6)) + p27*(k3/(k3+k7)) + p28*(k3/(k3+k8)));
    var p34= p24 * (p25*(k4/(k4+k5)) + p26*(k4/(k4+k6)) + p27*(k4/(k4+k7)) + p28*(k4/(k4+k8)));
    var p35= p25 * (p21*(k5/(k5+k1)) + p22*(k5/(k5+k2)) + p23*(k5/(k5+k3)) + p24*(k5/(k5+k4)));
    var p36= p26 * (p21*(k6/(k6+k1)) + p22*(k6/(k6+k2)) + p23*(k6/(k6+k3)) + p24*(k6/(k6+k4)));
    var p37= p27 * (p21*(k7/(k7+k1)) + p22*(k7/(k7+k2)) + p23*(k7/(k7+k3)) + p24*(k7/(k7+k4)));
    var p38= p28 * (p21*(k8/(k8+k1)) + p22*(k8/(k8+k2)) + p23*(k8/(k8+k3)) + p24*(k8/(k8+k4)));

    var p39= p29 * (p213*(k9/(k9+k13)) + p214*(k9/(k9+k14)) + p215*(k9/(k9+k15)) + p216*(k9/(k9+k16)));
    var p310= p210*(p213*(k10/(k10+k13))+p214*(k10/(k10+k14)) + p215*(k10/(k10+k15)) + p216*(k10/(k10+k16)));
    var p311= p211*(p213*(k11/(k11+k13))+p214*(k11/(k11+k14)) + p215*(k11/(k11+k15)) + p216*(k11/(k11+k16)));
    var p312= p212*(p213*(k12/(k12+k13))+p214*(k12/(k12+k14)) + p215*(k12/(k12+k15)) + p216*(k12/(k12+k16)));
    var p313= p213*(p29*(k13/(k13+k9))+p210*(k13/(k13+k10)) + p211*(k13/(k13+k11)) + p212*(k13/(k13+k12)));
    var p314= p214*(p29*(k14/(k14+k9))+p210*(k14/(k14+k10)) + p211*(k14/(k14+k11)) + p212*(k14/(k14+k12)));
    var p315= p215*(p29*(k15/(k15+k9))+p210*(k15/(k15+k10)) + p211*(k15/(k15+k11)) + p212*(k15/(k15+k12)));
    var p316= p216*(p29*(k16/(k16+k9))+p210*(k16/(k16+k10)) + p211*(k16/(k16+k11)) + p212*(k16/(k16+k12)));

    //第四轮过后的取胜情况
    var p41= p31*(p39*(k1/(k1+k9)) + p310*(k1/(k1+k10)) + p311*(k1/(k1+k11)) + p312*(k1/(k1+k12)) + p313*(k1/(k1+k13)) + p314*(k1/(k1+k14)) + p315*(k1/(k1+k15)) + p316*(k1/(k1+k16)));
    var p42= p32*(p39*(k2/(k2+k9)) + p310*(k2/(k2+k10)) + p311*(k2/(k2+k11)) + p312*(k2/(k2+k12)) + p313*(k2/(k2+k13)) + p314*(k2/(k2+k14)) + p315*(k2/(k2+k15)) + p316*(k2/(k2+k16)));
    var p43= p33*(p39*(k3/(k3+k9)) + p310*(k3/(k3+k10)) + p311*(k3/(k3+k11)) + p312*(k3/(k3+k12)) + p313*(k3/(k3+k13)) + p314*(k3/(k3+k14)) + p315*(k3/(k3+k15)) + p316*(k3/(k3+k16)));
    var p44= p34*(p39*(k4/(k4+k9)) + p310*(k4/(k4+k10)) + p311*(k4/(k4+k11)) + p312*(k4/(k4+k12)) + p313*(k4/(k4+k13)) + p314*(k4/(k4+k14)) + p315*(k4/(k4+k15)) + p316*(k4/(k4+k16)));
    var p45= p35*(p39*(k5/(k5+k9)) + p310*(k5/(k5+k10)) + p311*(k5/(k5+k11)) + p312*(k5/(k5+k12)) + p313*(k5/(k5+k13)) + p314*(k5/(k5+k14)) + p315*(k5/(k5+k15)) + p316*(k5/(k5+k16)));
    var p46= p36*(p39*(k6/(k6+k9)) + p310*(k6/(k6+k10)) + p311*(k6/(k6+k11)) + p312*(k6/(k6+k12)) + p313*(k6/(k6+k13)) + p314*(k6/(k6+k14)) + p315*(k6/(k6+k15)) + p316*(k6/(k6+k16)));
    var p47= p37*(p39*(k7/(k7+k9)) + p310*(k7/(k7+k10)) + p311*(k7/(k7+k11)) + p312*(k7/(k7+k12)) + p313*(k7/(k7+k13)) + p314*(k7/(k7+k14)) + p315*(k7/(k7+k15)) + p316*(k7/(k7+k16)));
    var p48= p38*(p39*(k8/(k8+k9)) + p310*(k8/(k8+k10)) + p311*(k8/(k8+k11)) + p312*(k8/(k8+k12)) + p313*(k8/(k8+k13)) + p314*(k8/(k8+k14)) + p315*(k8/(k8+k15)) + p316*(k8/(k8+k16)));

    var p49= p39*(p31*(k9/(k9+k1)) + p32*(k9/(k9+k2)) + p33*(k9/(k9+k3)) + p34*(k9/(k9+k4)) + p35*(k9/(k9+k5)) + p36*(k9/(k9+k6)) + p37*(k9/(k9+k7)) + p38*(k9/(k9+k8)));
    var p410= p310*(p31*(k10/(k10+k1)) + p32*(k10/(k10+k2)) + p33*(k10/(k10+k3)) + p34*(k10/(k10+k4)) + p35*(k10/(k10+k5)) + p36*(k10/(k10+k6)) + p37*(k10/(k10+k7)) + p38*(k10/(k10+k8)));
    var p411= p311*(p31*(k11/(k11+k1)) + p32*(k11/(k11+k2)) + p33*(k11/(k11+k3)) + p34*(k11/(k11+k4)) + p35*(k11/(k11+k5)) + p36*(k11/(k11+k6)) + p37*(k11/(k11+k7)) + p38*(k11/(k11+k8)));
    var p412= p312*(p31*(k12/(k12+k1)) + p32*(k12/(k12+k2)) + p33*(k12/(k12+k3)) + p34*(k12/(k12+k4)) + p35*(k12/(k12+k5)) + p36*(k12/(k12+k6)) + p37*(k12/(k12+k7)) + p38*(k12/(k12+k8)));
    var p413= p313*(p31*(k13/(k13+k1)) + p32*(k13/(k13+k2)) + p33*(k13/(k13+k3)) + p34*(k13/(k13+k4)) + p35*(k13/(k13+k5)) + p36*(k13/(k13+k6)) + p37*(k13/(k13+k7)) + p38*(k13/(k13+k8)));
    var p414= p314*(p31*(k14/(k14+k1)) + p32*(k14/(k14+k2)) + p33*(k14/(k14+k3)) + p34*(k14/(k14+k4)) + p35*(k14/(k14+k5)) + p36*(k14/(k14+k6)) + p37*(k14/(k14+k7)) + p38*(k14/(k14+k8)));
    var p415= p315*(p31*(k15/(k15+k1)) + p32*(k15/(k15+k2)) + p33*(k15/(k15+k3)) + p34*(k15/(k15+k4)) + p35*(k15/(k15+k5)) + p36*(k15/(k15+k6)) + p37*(k15/(k15+k7)) + p38*(k15/(k15+k8)));
    var p416= p316*(p31*(k16/(k16+k1)) + p32*(k16/(k16+k2)) + p33*(k16/(k16+k3)) + p34*(k16/(k16+k4)) + p35*(k16/(k16+k5)) + p36*(k16/(k16+k6)) + p37*(k16/(k16+k7)) + p38*(k16/(k16+k8)));

	if(f2=="Switzerland"){return p41;}	
	if(f2=="Poland"){return p42;}
	if(f2=="Croatia"){return p43;}
	if(f2=="Portugal"){return p44;}
	if(f2=="Wales"){return p45;}
	if(f2=="Northern Ireland"){return p46;}
	if(f2=="Hungary"){return p47;}
	if(f2=="Belgium"){return p48;}
	if(f2=="Germany"){return p49;}
	if(f2=="Slovakia"){return p410;}
	if(f2=="Italy"){return p411;}
	if(f2=="Spain"){return p412;}
	if(f2=="France"){return p413;}
	if(f2=="Republic of Ireland"){return p414;}
	if(f2=="England"){return p415;}
	if(f2=="Iceland"){return p416;}
}

console.log(forecast(teams, "Iceland"));
console.log(forecast(teams, "Poland"));
console.log(forecast(teams, "Croatia"));
console.log(forecast(teams, "Portugal"));
console.log(forecast(teams, "Wales"));
console.log(forecast(teams, "Northern Ireland"));
console.log(forecast(teams, "Hungary"));
console.log(forecast(teams, "Belgium"));
console.log(forecast(teams, "Germany"));
console.log(forecast(teams, "Slovakia"));
console.log(forecast(teams, "Italy"));
console.log(forecast(teams, "Spain"));
console.log(forecast(teams, "France"));
console.log(forecast(teams, "Republic of Ireland"));
console.log(forecast(teams, "England"));
console.log(forecast(teams, "Iceland"));

alert(forecast(teams, "Iceland") + forecast(teams, "England") + forecast(teams, "Republic of Ireland") + forecast(teams, "France")+forecast(teams, "Spain")+forecast(teams, "Italy")+forecast(teams, "Slovakia")+forecast(teams, "Germany")+forecast(teams, "Belgium")+forecast(teams, "Hungary")+forecast(teams, "Northern Ireland")+forecast(teams, "Wales")+forecast(teams, "Portugal")+forecast(teams, "Croatia")+forecast(teams, "Poland")+forecast(teams, "Switzerland"));

