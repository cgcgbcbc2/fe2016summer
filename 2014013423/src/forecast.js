//Teams
var teams = [
	"Switzerland", "Poland", "Croatia", "Portugal",
    "Wales", "Northern Ireland", "Hungary", "Belgium",
	"Germany", "Slovakia", "Italy", "Spain",
	"France", "Republic of Ireland", "England", "Iceland"
];

//Do forecasting
function forecast(team_info, country)
{   var power = [];
	var len = teams.length;

	for (var i=0;i<len;i++)
        power.push(team_info[teams[i]]);
	var beat_tab = [];
	for (var i=0;i<len;i++)
        beat_tab.push(new Array(len));
	for (var i=0;i<len;i++)
        for (var j=0;j<len;j++)
            beat_tab[i][j] = power[i]/(power[i]+power[j]);

	var win_poss = get_win_poss(0, len, beat_tab);
	for (var i=0;i<len;i++)
        if (country==teams[i])
            return win_poss[i];
}

//Get win possibility
function get_win_poss(l, r, beat_tab)
{   var len = r-l;
	if (len<=2)
		return [beat_tab[l][r-1], beat_tab[r-1][l]];

	var poss_comb = [],
        m = (l+r)/2,
        poss1 = get_win_poss(l, m, beat_tab),
        poss2 = get_win_poss(m, r, beat_tab);

	for (var i=l;i<m;i++)
    {   var poss = 0;
        for (var j=m;j<r;j++)
            poss += poss1[i-l]*beat_tab[i][j]*poss2[j-m];
		poss_comb.push(poss);
	}

	for (var j=m;j<r;j++)
    {   var poss = 0;
		for (var i = l; i < m; i++)
		      poss += poss2[j-m]*beat_tab[j][i]*poss1[i-l];
		poss_comb.push(poss);
	}

	return poss_comb;
}

if (module&&module.exports)
    module.exports = forecast;
