var teamList = [
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

function forecast(scores, team){

	function leaf(team){
		var leaf = new Object();
		leaf.teams = [team];
		leaf.probabilities = [1];
		return leaf;
	}

	function triumphOver(team1, team2){
		if((scores[team1] + scores[team2]) === 0)
			return 0.5;
		else
			return (scores[team1] / (scores[team1] + scores[team2]));
	}

	function parent(leftChild, rightChild){
		var parent = new Object();
		parent.teams = leftChild.teams.concat(rightChild.teams);
		parent.probabilities = new Array(parent.teams.length);
		var len = parent.probabilities.length;
		for(var i = 0; i < len; i++)
			parent.probabilities[i] = 0;
		for(var i = 0; i < len / 2; i++){
			for(var j = 0; j < len / 2; j++){
				parent.probabilities[i] += leftChild.probabilities[i] * rightChild.probabilities[j] * triumphOver(leftChild.teams[i], rightChild.teams[j]);
				parent.probabilities[j + len / 2] += leftChild.probabilities[i] * rightChild.probabilities[j] * triumphOver(rightChild.teams[j], leftChild.teams[i]);
			}
		}
		return parent;
	}

	var tree = new Array(2 * teamList.length - 1);
	for(var i = 0; i < teamList.length; i++){
		tree[i + teamList.length - 1] = leaf(teamList[i]);
		//console.log(tree[i + teamList.length - 1]);
	}
	for(var i = teamList.length - 2; i >= 0; i--){
		tree[i] = parent(tree[2 * i + 1], tree[2 * i + 2]);
		//console.log(tree[i]);
	}
	return tree[0].probabilities[teamList.indexOf(team)];
}
