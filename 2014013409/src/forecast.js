

//预测函数
function forecast(teams,country){
	var posibilities=[];
	var l = 0;
	var teamAb=[];
	for(item in teams){
		teamAb.push(teams[item]);
		if(item===country)
			l=teamAb.length-1;
	}
	for(var j=0; j< teamAb.length; j++){
        var posibilitiesX=[]
		for(var i=0; i< teamAb.length; i++){
			if(i === j){
				posibilitiesX.push(1);
			}
			else{
				var tempP=teamAb[j]/(teamAb[j]+teamAb[i]);
				posibilitiesX.push(tempP);
			}

		}
		posibilities.push(posibilitiesX);
	}
	function secondMatch(teams,k2,posibilities){
		var i = k2+1-parseInt((k2+1)/4)*4;
		switch(i){
			case 0:
			var firstWon=posibilities[k2][k2-1];
			var second1=posibilities[k2-2][k2-3]*posibilities[k2][k2-2];
			var second2=posibilities[k2-3][k2-2]*posibilities[k2][k2-3];
			var second =second1+second2;
			return firstWon*second;
			break;
			case 1:
			var firstWon=posibilities[k2][k2+1];
			var second1=posibilities[k2+2][k2+3]*posibilities[k2][k2+2];
			var second2=posibilities[k2+3][k2+2]*posibilities[k2][k2+3];
			var second =second1+second2;
			return firstWon*second;
			break;
			case 2:
			var firstWon=posibilities[k2][k2-1];
			var second1=posibilities[k2+1][k2+2]*posibilities[k2][k2+1];
			var second2=posibilities[k2+2][k2+1]*posibilities[k2][k2+2];
			var second =second1+second2;
			return firstWon*second;
			break;
			case 3:var firstWon=posibilities[k2][k2+1];
			var second1=posibilities[k2-1][k2-2]*posibilities[k2][k2-1];
			var second2=posibilities[k2-2][k2-1]*posibilities[k2][k2-2];
			var second =second1+second2;
			return firstWon*second;
			break;
		}

	}
	function thirdMatch(teams,k3,posibilities){
		var j = parseInt(k3/8);
		var i = k3+1-parseInt((k3+1)/8)*8;
		switch(i){
			case 0:
			var secondWon=secondMatch(teams,k3,posibilities);
			var third1=secondMatch(teams,j*8+0,posibilities)*posibilities[k3][j*8+0];
			var third2=secondMatch(teams,j*8+1,posibilities)*posibilities[k3][j*8+1];
			var third3=secondMatch(teams,j*8+2,posibilities)*posibilities[k3][j*8+2];
			var third4=secondMatch(teams,j*8+3,posibilities)*posibilities[k3][j*8+3];
			var third=third1+third2+third3+third4;
			return secondWon*third;
			break;
			case 1:
			var secondWon=secondMatch(teams,k3,posibilities);
			var third1=secondMatch(teams,j*8+4,posibilities)*posibilities[k3][j*8+4];
			var third2=secondMatch(teams,j*8+5,posibilities)*posibilities[k3][j*8+5];
			var third3=secondMatch(teams,j*8+6,posibilities)*posibilities[k3][j*8+6];
			var third4=secondMatch(teams,j*8+7,posibilities)*posibilities[k3][j*8+7];
			var third=third1+third2+third3+third4;
			return secondWon*third;
			break;
			case 2:
			var secondWon=secondMatch(teams,k3,posibilities);
			var third1=secondMatch(teams,j*8+4,posibilities)*posibilities[k3][j*8+4];
			var third2=secondMatch(teams,j*8+5,posibilities)*posibilities[k3][j*8+5];
			var third3=secondMatch(teams,j*8+6,posibilities)*posibilities[k3][j*8+6];
			var third4=secondMatch(teams,j*8+7,posibilities)*posibilities[k3][j*8+7];
			var third=third1+third2+third3+third4;
			return secondWon*third;
			break;
			case 3:
			var secondWon=secondMatch(teams,k3,posibilities);
			var third1=secondMatch(teams,j*8+4,posibilities)*posibilities[k3][j*8+4];
			var third2=secondMatch(teams,j*8+5,posibilities)*posibilities[k3][j*8+5];
			var third3=secondMatch(teams,j*8+6,posibilities)*posibilities[k3][j*8+6];
			var third4=secondMatch(teams,j*8+7,posibilities)*posibilities[k3][j*8+7];
			var third=third1+third2+third3+third4;
			return secondWon*third;
			break;
			case 4:
			var secondWon=secondMatch(teams,k3,posibilities);
			var third1=secondMatch(teams,j*8+4,posibilities)*posibilities[k3][j*8+4];
			var third2=secondMatch(teams,j*8+5,posibilities)*posibilities[k3][j*8+5];
			var third3=secondMatch(teams,j*8+6,posibilities)*posibilities[k3][j*8+6];
			var third4=secondMatch(teams,j*8+7,posibilities)*posibilities[k3][j*8+7];
			var third=third1+third2+third3+third4;
			return secondWon*third;
			break;
			case 5:
			var secondWon=secondMatch(teams,k3,posibilities);
			var third1=secondMatch(teams,j*8+0,posibilities)*posibilities[k3][j*8+0];
			var third2=secondMatch(teams,j*8+1,posibilities)*posibilities[k3][j*8+1];
			var third3=secondMatch(teams,j*8+2,posibilities)*posibilities[k3][j*8+2];
			var third4=secondMatch(teams,j*8+3,posibilities)*posibilities[k3][j*8+3];
			var third=third1+third2+third3+third4;
			return secondWon*third;
			break;
			case 6:
			var secondWon=secondMatch(teams,k3,posibilities);
			var third1=secondMatch(teams,j*8+0,posibilities)*posibilities[k3][j*8+0];
			var third2=secondMatch(teams,j*8+1,posibilities)*posibilities[k3][j*8+1];
			var third3=secondMatch(teams,j*8+2,posibilities)*posibilities[k3][j*8+2];
			var third4=secondMatch(teams,j*8+3,posibilities)*posibilities[k3][j*8+3];
			var third=third1+third2+third3+third4;
			return secondWon*third;
			break;
			case 7:
			var secondWon=secondMatch(teams,k3,posibilities);
			var third1=secondMatch(teams,j*8+0,posibilities)*posibilities[k3][j*8+0];
			var third2=secondMatch(teams,j*8+1,posibilities)*posibilities[k3][j*8+1];
			var third3=secondMatch(teams,j*8+2,posibilities)*posibilities[k3][j*8+2];
			var third4=secondMatch(teams,j*8+3,posibilities)*posibilities[k3][j*8+3];
			var third=third1+third2+third3+third4;
			return secondWon*third;
			break;
		}
	}
	function lastMatch(teams,k4,posibilities){
		var j = parseInt(k4/8);
		switch(j){
			case 0:
			var thirdWon=thirdMatch(teams,k4,posibilities);
			var last1=thirdMatch(teams,8,posibilities)*posibilities[k4][8];
			var last2=thirdMatch(teams,9,posibilities)*posibilities[k4][9];
			var last3=thirdMatch(teams,10,posibilities)*posibilities[k4][10];
			var last4=thirdMatch(teams,11,posibilities)*posibilities[k4][11];
			var last5=thirdMatch(teams,12,posibilities)*posibilities[k4][12];
			var last6=thirdMatch(teams,13,posibilities)*posibilities[k4][13];
			var last7=thirdMatch(teams,14,posibilities)*posibilities[k4][14];
			var last8=thirdMatch(teams,15,posibilities)*posibilities[k4][15];
			var last=last1+last2+last3+last4+last5+last6+last7+last8;
			return thirdWon*last;
			case 1:
			var thirdWon=thirdMatch(teams,k4,posibilities);
			var last1=thirdMatch(teams,0,posibilities)*posibilities[k4][0];
			var last2=thirdMatch(teams,1,posibilities)*posibilities[k4][1];
			var last3=thirdMatch(teams,2,posibilities)*posibilities[k4][2];
			var last4=thirdMatch(teams,3,posibilities)*posibilities[k4][3];
			var last5=thirdMatch(teams,4,posibilities)*posibilities[k4][4];
			var last6=thirdMatch(teams,5,posibilities)*posibilities[k4][5];
			var last7=thirdMatch(teams,6,posibilities)*posibilities[k4][6];
			var last8=thirdMatch(teams,7,posibilities)*posibilities[k4][7];
			var last=last1+last2+last3+last4+last5+last6+last7+last8;
			return thirdWon*last;
		}
	}
	return lastMatch(teams,l,posibilities);
}
