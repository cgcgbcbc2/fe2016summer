function forecast(){
	var teams = [
	"Switzerland",
	"Poland",
	"Croatia",
	"Portugal",
	"Wales",
	"Northern Ireland",
	"Hungary",
	"Belgium",
	"Germany",
	"Slovakia",
	"Italy",
	"Spain",
	"France",
	"Republic of Ireland",
	"England",
	"Iceland"
];
	var strength = new Array(16);	//��ʾ������ӵ�ʵ��
	var prob1 = new Array(16);		//��ʾ�������ͨ����һ�ֵļ���
	var prob2 = new Array(16);		//��ʾ�������ͨ���ڶ��ֵļ���
	var prob3 = new Array(16);		//��ʾ�������ͨ�������ֵļ���
	var prob4 = new Array(16);		//��ʾ�������ͨ�������֣�����ڣ��ļ���
	for(var i = 0; i < 16; i++){
		strength[i] = arguments[0][teams[i]];
	}
	//�õ��������ͨ����һ�ֵĸ���
	for(var i = 0; i < 16;i++){
		var opponent;
		if(i % 2 == 0){
			opponent = i + 1;
		}
		else if(i % 2 == 1){
			opponent = i - 1;
		}
		prob1[i] = strength[i]/(strength[i] + strength[opponent]);
	}
	console.log(prob1);
	//�������ͨ���ڶ��ֵĸ���
	for(var i = 0; i < 16; i++){
		var opponent1;
		var quarter = Math.floor(i / 4);
		if(Math.floor(i / 2) % 2 == 0){
			opponent1 = quarter * 4 + 2;
		}
		else if(Math.floor(i / 2) % 2 == 1){
			opponent1 = quarter * 4;
		}
		prob2[i] = (prob1[i] * prob1[opponent1] * (strength[i]/(strength[i] + strength[opponent1])))
		+ (prob1[i] * prob1[opponent1 + 1] * (strength[i]/(strength[i] + strength[opponent1 + 1])));
	}
	console.log(prob2);
	
	//�������ͨ�������֣�����������ĸ���
	for(var i = 0; i < 16 ; i++){
		var opp1;
		var quarter = Math.floor(i / 4);	//�õ������İ���
		if(quarter == 0 || quarter == 2){
			opp1 = (quarter + 1) * 4;
		}
		else if(quarter == 1 || quarter == 3){
			opp1 = (quarter - 1) * 4;
		}
		prob3[i] = 0;
		for(var j = 0; j < 4; j++){
			prob3[i] += (prob2[i] * prob2[opp1 + j] * (strength[i]/(strength[i] + strength[opp1 + j])))
		}
	}
	console.log(prob3);
	//��Ӷ�ڼ���
	for(var i = 0; i < 16; i++){
		var opp1;
		var half = Math.floor(i / 8);
		if(half == 0){
			opp1 = 8;
		}
		else {
			opp1 = 0;
		}
		prob4[i] = 0;
		for(var j = 0; j < 8; j++){
			prob4[i] += (prob3[i] * prob3[opp1 + j] * (strength[i]/(strength[i] + strength[opp1 + j])))
		}
	}
	
	console.log(prob4);
	for(var i = 0; i < 16 ; i++){
		if(teams[i] == arguments[1]){
			return prob4[i];
		}
	}
}



/* forecast({
Switzerland:100,
Poland:90,
Croatia:80,
Portugal:70,
Wales:60,
["Northern Ireland"]:50,
Hungary:40,
Belgium:30,
Germany:30,
Slovakia:40,
Italy:50,
Spain:60,
France:70,
["Republic of Ireland"]:80,
England:90,
Iceland:100
}, "England");  */
