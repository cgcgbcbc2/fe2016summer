/*ability = {
	"England": 100,
	"Switzerland": 200,
	"Northern Ireland": 200,
	"Poland": 100,
	"Croatia": 200,
	"Portugal": 20,
	"Wales": 10,
	"Hungary": 20,
	"Belgium": 30,
	"Germany": 50,
	"Slovakia": 60,
	"Italy": 80,
	"Spain": 99,
	"France": 230,
	"Republic of Ireland": 230,
	"Iceland": 50
};*/

function forecast(ability,key){
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
	var ab = new Array(16);
	var p = 0;
	var pro = new Array(16);
	var pro1 = new Array(16);
	for (var i = 0; i < 16; i++) {
		ab[i] = ability[teams[i]];
		if (teams[i] == key) {
			p = i;
		}
	}

	function pp(a,b){
		return ab[a] / (ab[a] + ab[b]);
	}

	function sp(a,b){
		return pro[b]*pp(a,b);
	}
	
	
	for (var i = 0; i < 16; i++) {
		pro[i] = 1;
	}
	for (var i = 0; i < 16; i+=2) {
		pro[i] = pp(i,i + 1);
		pro[i + 1] = pp(i + 1,i);
	}
	for (var i = 0; i < 16; i+=4) {
		pro1[i] = pro[i] * (sp(i,i + 2) + sp(i,i + 3));
		pro1[i + 1] = pro[i + 1] * (sp(i + 1,i + 2) + sp(i + 1,i + 3));
		pro1[i + 2] = pro[i + 2] * (sp(i + 2,i) + sp(i + 2,i + 1));
		pro1[i + 3] = pro[i + 3] * (sp(i + 3,i) + sp(i + 3,i + 1));
	}
	for (var i = 0; i < 16; i++) {
		pro[i] = pro1[i];
	}
	for (var i = 0; i < 16; i+=8) {
		pro1[i] = pro[i] * (sp(i,i + 4) + sp(i,i + 5) + sp(i,i + 6) + sp(i,i + 7));
		pro1[i + 1] = pro[i + 1] * (sp(i + 1,i + 4) + sp(i + 1,i + 5) + sp(i + 1,i + 6) + sp(i + 1,i + 7));
		pro1[i + 2] = pro[i + 2] * (sp(i + 2,i + 4) + sp(i + 2,i + 5) + sp(i + 2,i + 6) + sp(i + 2,i + 7));
		pro1[i + 3] = pro[i + 3] * (sp(i + 3,i + 4) + sp(i + 3,i + 5) + sp(i + 3,i + 6) + sp(i + 3,i + 7));
		pro1[i + 4] = pro[i + 4] * (sp(i + 4,i) + sp(i + 4,i + 1) + sp(i + 4,i + 2) + sp(i + 4,i + 3));
		pro1[i + 5] = pro[i + 5] * (sp(i + 5,i) + sp(i + 5,i + 1) + sp(i + 5,i + 2) + sp(i + 5,i + 3));
		pro1[i + 6] = pro[i + 6] * (sp(i + 6,i) + sp(i + 6,i + 1) + sp(i + 6,i + 2) + sp(i + 6,i + 3));
		pro1[i + 7] = pro[i + 7] * (sp(i + 7,i) + sp(i + 7,i + 1) + sp(i + 7,i + 2) + sp(i + 7,i + 3));
	}
	for (var i = 0; i < 16; i++) {
		pro[i] = pro1[i];
	}
	for (var i = 0; i < 8; i++) {
		pro1[i] = pro[i] * (sp(i,8) + sp(i,9) + sp(i,10) + sp(i,11) + sp(i,12) + sp(i,13) + sp(i,14) + sp(i,15));
	}
	for (var i = 8; i < 16; i++) {
		pro1[i] = pro[i] * (sp(i,0) + sp(i,1) + sp(i,2) + sp(i,3) + sp(i,4) + sp(i,5) + sp(i,6) + sp(i,7));
	}
	for (var i = 0; i < 16; i++) {
		pro[i] = pro1[i];
	}
	return pro[p];
}


