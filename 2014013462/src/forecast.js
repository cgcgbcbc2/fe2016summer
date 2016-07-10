function forecast(abilities, team){
	//预赛胜出概率
	var tryout_1 = abilities['Switzerland'] / (abilities['Switzerland'] + abilities['Poland']);
	var tryout_2 = abilities['Poland'] / (abilities['Switzerland'] + abilities['Poland']);
	var tryout_3 = abilities['Croatia'] / (abilities['Croatia'] + abilities['Portugal']);
	var tryout_4 = abilities['Portugal'] / (abilities['Croatia'] + abilities['Portugal']);
	var tryout_5 = abilities['Wales'] / (abilities['Wales'] + abilities['Northern Ireland']);
	var tryout_6 = abilities['Northern Ireland'] / (abilities['Wales'] + abilities['Northern Ireland']);
	var tryout_7 = abilities['Hungary'] / (abilities['Hungary'] + abilities['Belgium']);
	var tryout_8 = abilities['Belgium'] / (abilities['Hungary'] + abilities['Belgium']);
	var tryout_9 = abilities['Germany'] / (abilities['Germany'] + abilities['Slovakia']);
	var tryout_10 = abilities['Slovakia'] / (abilities['Germany'] + abilities['Slovakia']);
	var tryout_11 = abilities['Italy'] / (abilities['Italy'] + abilities['Spain']);
	var tryout_12 = abilities['Spain'] / (abilities['Spain'] + abilities['Italy']);
	var tryout_13 = abilities['France'] / (abilities['France'] + abilities['Republic of Ireland']);
	var tryout_14 = abilities['Republic of Ireland'] / (abilities['France'] + abilities['Republic of Ireland']);
	var tryout_15 = abilities['England'] / (abilities['England'] + abilities['Iceland']);
	var tryout_16 = abilities['Iceland'] / (abilities['England'] + abilities['Iceland']);

	//四分赛胜出概率(quarterback)
	var q1 = tryout_1 * abilities['Switzerland'] * (tryout_3 / (abilities['Switzerland'] + abilities['Croatia']) + tryout_4 / (abilities['Switzerland'] + abilities['Portugal']));
	var q2 = tryout_2 * abilities['Poland'] * (tryout_3 / (abilities['Poland'] + abilities['Croatia']) + tryout_4 / (abilities['Poland'] + abilities['Portugal']));
	var q3 = tryout_3 * abilities['Croatia'] * (tryout_1 / (abilities['Croatia'] + abilities['Switzerland'])+ tryout_2 / (abilities['Croatia'] + abilities['Poland']));
	var q4 = tryout_4 * abilities['Portugal'] * (tryout_1 / (abilities['Portugal'] + abilities['Switzerland'])+ tryout_2 / (abilities['Portugal'] + abilities['Poland']));
	var q5 = tryout_5 * abilities['Wales'] * (tryout_7 / (abilities['Wales'] + abilities['Hungary']) + tryout_8 / (abilities['Wales'] + abilities['Belgium']));
	var q6 = tryout_6 * abilities['Northern Ireland'] * (tryout_7 / (abilities['Northern Ireland'] + abilities['Hungary']) + tryout_8 / (abilities['Northern Ireland'] + abilities['Belgium']));
	var q7 = tryout_7 * abilities['Hungary'] * (tryout_5 / (abilities['Hungary'] + abilities['Wales']) + tryout_6 / (abilities['Hungary'] + abilities['Northern Ireland']));
	var q8 = tryout_8 * abilities['Belgium'] * (tryout_5 / (abilities['Belgium'] + abilities['Wales']) + tryout_6 / (abilities['Belgium'] + abilities['Northern Ireland']));
	var q9 = tryout_9 * abilities['Germany'] * (tryout_11 / (abilities['Germany'] + abilities['Italy']) + tryout_12 / (abilities['Germany'] + abilities['Spain']));
	var q10 = tryout_10 * abilities['Slovakia'] * (tryout_11 / (abilities['Slovakia'] + abilities['Italy']) + tryout_12 / (abilities['Slovakia'] + abilities['Spain']));
	var q11 = tryout_11 * abilities['Italy'] * (tryout_9 / (abilities['Italy'] + abilities['Germany']) + tryout_10 / (abilities['Italy'] + abilities['Slovakia']));
	var q12 = tryout_12 * abilities['Spain'] * (tryout_9 / (abilities['Spain'] + abilities['Germany']) + tryout_10 / (abilities['Spain'] + abilities['Slovakia']));
	var q13 = tryout_13 * abilities['France'] * (tryout_15 / (abilities['France'] + abilities['England']) + tryout_16 / (abilities['France'] + abilities['Iceland']));
	var q14 = tryout_14 * abilities['Republic of Ireland'] * (tryout_15 / (abilities['Republic of Ireland'] + abilities['England']) + tryout_16 / (abilities['Republic of Ireland'] + abilities['Iceland']));
	var q15 = tryout_15 * abilities['England'] * (tryout_13 / (abilities['England'] + abilities['France']) + tryout_14 / (abilities['England'] + abilities['Republic of Ireland']));
	var q16 = tryout_16 * abilities['Iceland'] * (tryout_13 / (abilities['Iceland'] + abilities['France']) + tryout_14 / (abilities['Iceland'] + abilities['Republic of Ireland']));
	
	//半决赛胜出概率(semifinal)
	var s1 = q1 * abilities['Switzerland'] * (q5 / (abilities['Wales'] + abilities['Switzerland']) + q6 / (abilities['Northern Ireland'] + abilities['Switzerland']) + q7 / (abilities['Hungary'] + abilities['Switzerland']) + q8 / (abilities['Belgium'] + abilities['Switzerland']));
	var s2 = q2 * abilities['Poland'] *  (q5 / (abilities['Wales'] + abilities['Poland']) + q6 / (abilities['Northern Ireland'] + abilities['Poland']) + q7 / (abilities['Hungary'] + abilities['Poland']) + q8 / (abilities['Belgium'] + abilities['Poland']));
	var s3 = q3 * abilities['Croatia'] *  (q5 / (abilities['Wales'] + abilities['Croatia']) + q6 / (abilities['Northern Ireland'] + abilities['Croatia']) + q7 / (abilities['Hungary'] + abilities['Croatia']) + q8 / (abilities['Belgium'] + abilities['Croatia']));
	var s4 = q4 * abilities['Portugal'] *  (q5 / (abilities['Wales'] + abilities['Portugal']) + q6 / (abilities['Northern Ireland'] + abilities['Portugal']) + q7 / (abilities['Hungary'] + abilities['Portugal']) + q8 / (abilities['Belgium'] + abilities['Portugal']));
	
	var s5 = q5 * abilities['Wales'] *  (q1 / (abilities['Switzerland'] + abilities['Wales']) + q2 / (abilities['Poland'] + abilities['Wales']) + q3 / (abilities['Croatia'] + abilities['Wales']) + q4 / (abilities['Portugal'] + abilities['Wales']));
	var s6 = q6 * abilities['Northern Ireland'] * (q1 / (abilities['Switzerland'] + abilities['Northern Ireland']) + q2 / (abilities['Poland'] + abilities['Northern Ireland']) + q3 / (abilities['Croatia'] + abilities['Northern Ireland']) + q4 / (abilities['Portugal'] + abilities['Northern Ireland']));
	var s7 = q7 * abilities['Hungary'] * (q1 / (abilities['Switzerland'] + abilities['Hungary']) + q2 / (abilities['Poland'] + abilities['Hungary']) + q3 / (abilities['Croatia'] + abilities['Hungary']) + q4 / (abilities['Portugal'] + abilities['Hungary']));
	var s8 = q8 * abilities['Belgium'] * (q1 / (abilities['Switzerland'] + abilities['Belgium']) + q2 / (abilities['Poland'] + abilities['Belgium']) + q3 / (abilities['Croatia'] + abilities['Belgium']) + q4 / (abilities['Portugal'] + abilities['Belgium']));
	
	var s9 = q9 * abilities['Germany'] * (q13 / (abilities['France'] + abilities['Germany']) + q14 / (abilities['Republic of Ireland'] + abilities['Germany']) + q15 / (abilities['England'] + abilities['Germany']) + q16 / (abilities['Iceland'] + abilities['Germany']));
	var s10 = q10 * abilities['Slovakia'] * (q13 / (abilities['France'] + abilities['Slovakia']) + q14 / (abilities['Republic of Ireland'] + abilities['Slovakia']) + q15 / (abilities['England'] + abilities['Slovakia']) + q16 / (abilities['Iceland'] + abilities['Slovakia']));
	var s11 = q11 * abilities['Italy'] * (q13 / (abilities['France'] + abilities['Italy']) + q14 / (abilities['Republic of Ireland'] + abilities['Italy']) + q15 / (abilities['England'] + abilities['Italy']) + q16 / (abilities['Iceland'] + abilities['Italy']));
	var s12 = q12 * abilities['Spain'] * (q13 / (abilities['France'] + abilities['Spain']) + q14 / (abilities['Republic of Ireland'] + abilities['Spain']) + q15 / (abilities['England'] + abilities['Spain']) + q16 / (abilities['Iceland'] + abilities['Spain']));
	
	var s13 = q13 * abilities['France'] * (q9 / (abilities['Germany'] + abilities['France']) + q10 / (abilities['Slovakia'] + abilities['France']) + q11 / (abilities['Italy'] + abilities['France']) + q12 / (abilities['Spain'] + abilities['France']));
	var s14 = q14 * abilities['Republic of Ireland'] * (q9 / (abilities['Germany'] + abilities['Republic of Ireland']) + q10 / (abilities['Slovakia'] + abilities['Republic of Ireland']) + q11 / (abilities['Italy'] + abilities['Republic of Ireland']) + q12 / (abilities['Spain'] + abilities['Republic of Ireland']));
	var s15 = q15 * abilities['England'] * (q9 / (abilities['Germany'] + abilities['England']) + q10 / (abilities['Slovakia'] + abilities['England']) + q11 / (abilities['Italy'] + abilities['England']) + q12 / (abilities['Spain'] + abilities['England']));
	var s16 = q16 * abilities['Iceland'] * (q9 / (abilities['Germany'] + abilities['Iceland']) + q10 / (abilities['Slovakia'] + abilities['Iceland']) + q11 / (abilities['Italy'] + abilities['Iceland']) + q12 / (abilities['Spain'] + abilities['Iceland']));

	//决赛胜出概率
	switch(team){
		case "Switzerland":
			return s1 * abilities['Switzerland'] * (s9 / (abilities['Germany'] + abilities['Switzerland']) + s10 / (abilities['Slovakia'] + abilities['Switzerland']) + s11 / (abilities['Italy'] + abilities['Switzerland']) +  s12 / (abilities['Spain'] + abilities['Switzerland']) + s13 / (abilities['France'] + abilities['Switzerland']) + s14 / (abilities['Republic of Ireland'] + abilities['Switzerland']) + s15 / (abilities['England'] + abilities['Switzerland']) + s16 / (abilities['Iceland'] + abilities['Switzerland']));
		case "Poland":
			return s2 * abilities['Poland'] * (s9 / (abilities['Germany'] + abilities['Poland']) + s10 / (abilities['Slovakia'] + abilities['Poland']) + s11 / (abilities['Italy'] + abilities['Poland']) +  s12 / (abilities['Spain'] + abilities['Poland']) + s13 / (abilities['France'] + abilities['Poland']) + s14 / (abilities['Republic of Ireland'] + abilities['Poland']) + s15 / (abilities['England'] + abilities['Poland']) + s16 / (abilities['Iceland'] + abilities['Poland']));
		case "Croatia":
			return s3 * abilities['Croatia'] * (s9 / (abilities['Germany'] + abilities['Croatia']) + s10 / (abilities['Slovakia'] + abilities['Croatia']) + s11 / (abilities['Italy'] + abilities['Croatia']) +  s12 / (abilities['Spain'] + abilities['Croatia']) + s13 / (abilities['France'] + abilities['Croatia']) + s14 / (abilities['Republic of Ireland'] + abilities['Croatia']) + s15 / (abilities['England'] + abilities['Croatia']) + s16 / (abilities['Iceland'] + abilities['Croatia']));
		case "Portugal":
			return s4 * abilities['Portugal'] * (s9 / (abilities['Germany'] + abilities['Portugal']) + s10 / (abilities['Slovakia'] + abilities['Portugal']) + s11 / (abilities['Italy'] + abilities['Portugal']) +  s12 / (abilities['Spain'] + abilities['Portugal']) + s13 / (abilities['France'] + abilities['Portugal']) + s14 / (abilities['Republic of Ireland'] + abilities['Portugal']) + s15 / (abilities['England'] + abilities['Portugal']) + s16 / (abilities['Iceland'] + abilities['Portugal']));
		case "Wales":
			return s5 * abilities['Wales'] * (s9 / (abilities['Germany'] + abilities['Wales']) + s10 / (abilities['Slovakia'] + abilities['Wales']) + s11 / (abilities['Italy'] + abilities['Wales']) +  s12 / (abilities['Spain'] + abilities['Wales']) + s13 / (abilities['France'] + abilities['Wales']) + s14 / (abilities['Republic of Ireland'] + abilities['Wales']) + s15 / (abilities['England'] + abilities['Wales']) + s16 / (abilities['Iceland'] + abilities['Wales']));
		case "Northern Ireland":
			return s6 * abilities['Northern Ireland'] * (s9 / (abilities['Germany'] + abilities['Northern Ireland']) + s10 / (abilities['Slovakia'] + abilities['Northern Ireland']) + s11 / (abilities['Italy'] + abilities['Northern Ireland']) +  s12 / (abilities['Spain'] + abilities['Northern Ireland']) + s13 / (abilities['France'] + abilities['Northern Ireland']) + s14 / (abilities['Republic of Ireland'] + abilities['Northern Ireland']) + s15 / (abilities['England'] + abilities['Northern Ireland']) + s16 / (abilities['Iceland'] + abilities['Northern Ireland']));
		case "Hungary":
			return s7 * abilities['Hungary'] * (s9 / (abilities['Germany'] + abilities['Hungary']) + s10 / (abilities['Slovakia'] + abilities['Hungary']) + s11 / (abilities['Italy'] + abilities['Hungary']) +  s12 / (abilities['Spain'] + abilities['Hungary']) + s13 / (abilities['France'] + abilities['Hungary']) + s14 / (abilities['Republic of Ireland'] + abilities['Hungary']) + s15 / (abilities['England'] + abilities['Hungary']) + s16 / (abilities['Iceland'] + abilities['Hungary']));
		case "Belgium":
			return s8 * abilities['Belgium'] * (s9 / (abilities['Germany'] + abilities['Belgium']) + s10 / (abilities['Slovakia'] + abilities['Belgium']) + s11 / (abilities['Italy'] + abilities['Belgium']) +  s12 / (abilities['Spain'] + abilities['Belgium']) + s13 / (abilities['France'] + abilities['Belgium']) + s14 / (abilities['Republic of Ireland'] + abilities['Belgium']) + s15 / (abilities['England'] + abilities['Belgium']) + s16 / (abilities['Iceland'] + abilities['Belgium']));
		case "Germany":
			return s9 * abilities['Germany'] * (s1 / (abilities['Switzerland'] + abilities['Germany']) + s2 / (abilities['Poland'] + abilities['Germany']) + s3 / (abilities['Croatia'] + abilities['Germany']) + s4 / (abilities['Portugal'] + abilities['Germany']) + s5 / (abilities['Wales'] + abilities['Germany']) + s6 / (abilities['Northern Ireland'] + abilities['Germany']) + s7 / (abilities['Hungary'] + abilities['Germany']) + s8 / (abilities['Belgium'] + abilities['Germany']));
		case "Slovakia":
			return s10 * abilities['Slovakia'] * (s1 / (abilities['Switzerland'] + abilities['Slovakia']) + s2 / (abilities['Poland'] + abilities['Slovakia']) + s3 / (abilities['Croatia'] + abilities['Slovakia']) + s4 / (abilities['Portugal'] + abilities['Slovakia']) + s5 / (abilities['Wales'] + abilities['Slovakia']) + s6 / (abilities['Northern Ireland'] + abilities['Slovakia']) + s7 / (abilities['Hungary'] + abilities['Slovakia']) + s8 / (abilities['Belgium'] + abilities['Slovakia']));
		case "Italy":
			return s11 * abilities['Italy'] * (s1 / (abilities['Switzerland'] + abilities['Italy']) + s2 / (abilities['Poland'] + abilities['Italy']) + s3 / (abilities['Croatia'] + abilities['Italy']) + s4 / (abilities['Portugal'] + abilities['Italy']) + s5 / (abilities['Wales'] + abilities['Italy']) + s6 / (abilities['Northern Ireland'] + abilities['Italy']) + s7 / (abilities['Hungary'] + abilities['Italy']) + s8 / (abilities['Belgium'] + abilities['Italy']));
		case "Spain":
			return s12 * abilities['Spain'] * (s1 / (abilities['Switzerland'] + abilities['Spain']) + s2 / (abilities['Poland'] + abilities['Spain']) + s3 / (abilities['Croatia'] + abilities['Spain']) + s4 / (abilities['Portugal'] + abilities['Spain']) + s5 / (abilities['Wales'] + abilities['Spain']) + s6 / (abilities['Northern Ireland'] + abilities['Spain']) + s7 / (abilities['Hungary'] + abilities['Spain']) + s8 / (abilities['Belgium'] + abilities['Spain']));
		case "France":
			return s13 * abilities['France'] * (s1 / (abilities['Switzerland'] + abilities['France']) + s2 / (abilities['Poland'] + abilities['France']) + s3 / (abilities['Croatia'] + abilities['France']) + s4 / (abilities['Portugal'] + abilities['France']) + s5 / (abilities['Wales'] + abilities['France']) + s6 / (abilities['Northern Ireland'] + abilities['France']) + s7 / (abilities['Hungary'] + abilities['France']) + s8 / (abilities['Belgium'] + abilities['France']));
		case "Republic of Ireland":
			return s14 * abilities['Republic of Ireland'] * (s1 / (abilities['Switzerland'] + abilities['Republic of Ireland']) + s2 / (abilities['Poland'] + abilities['Republic of Ireland']) + s3 / (abilities['Croatia'] + abilities['Republic of Ireland']) + s4 / (abilities['Portugal'] + abilities['Republic of Ireland']) + s5 / (abilities['Wales'] + abilities['Republic of Ireland']) + s6 / (abilities['Northern Ireland'] + abilities['Republic of Ireland']) + s7 / (abilities['Hungary'] + abilities['Republic of Ireland']) + s8 / (abilities['Belgium'] + abilities['Republic of Ireland']));
		case "England":
			return s15 * abilities['England'] * (s1 / (abilities['Switzerland'] + abilities['England']) + s2 / (abilities['Poland'] + abilities['England']) + s3 / (abilities['Croatia'] + abilities['England']) + s4 / (abilities['Portugal'] + abilities['England']) + s5 / (abilities['Wales'] + abilities['England']) + s6 / (abilities['Northern Ireland'] + abilities['England']) + s7 / (abilities['Hungary'] + abilities['England']) + s8 / (abilities['Belgium'] + abilities['England']));
		case "Iceland":
			return s16 * abilities['Iceland'] * (s1 / (abilities['Switzerland'] + abilities['Iceland']) + s2 / (abilities['Poland'] + abilities['Iceland']) + s3 / (abilities['Croatia'] + abilities['Iceland']) + s4 / (abilities['Portugal'] + abilities['Iceland']) + s5 / (abilities['Wales'] + abilities['Iceland']) + s6 / (abilities['Northern Ireland'] + abilities['Iceland']) + s7 / (abilities['Hungary'] + abilities['Iceland']) + s8 / (abilities['Belgium'] + abilities['Iceland']));
		default:
			return false;
	}	
}
