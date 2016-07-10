function forecast()
 {
 	"use strict";
 	var country = [];
 	country.push("Switzerland");
 	country.push("Poland");
 	country.push("Croatia");
 	country.push("Portugal");
 	country.push("Wales");
 	country.push("Northern Ireland");
 	country.push("Hungary");
 	country.push("Belgium");
 	country.push("Germany");
 	country.push("Slovakia");
 	country.push("Italy");
 	country.push("Spain");
 	country.push("France");
 	country.push("Republic of Ireland");
 	country.push("England");
 	country.push("Iceland");

 	var country_capacity = arguments[0];
 	var query_country = arguments[1];

 	var prob_country = [];
 	var next_prob_country = [];
 	for(var i = 0; i < 16; i++)
 	{
 		prob_country.push(1);
 		next_prob_country.push(0);
 	}
 	
 	for(var round = 1; round <= 4; round++)
 	{
 		var groupsize = Math.pow(2, round - 1);
 		 		
 		for(var i = 0; i < 16; i++)
 		{			
 			var groupnumber = parseInt(i / groupsize + 1);
 			var opponent_groupnumber = 0;
 			if(groupnumber % 2 == 1)
 			{
 				opponent_groupnumber = groupnumber + 1;
 			}
 			else
 			{
 				opponent_groupnumber = groupnumber - 1;
 			}
 			var opponent_end = opponent_groupnumber * groupsize - 1;
 			var opponent_start = opponent_end - groupsize + 1;

 			next_prob_country[i] = 0;

 			for(var j = opponent_start; j <= opponent_end; j++)
 			{
 				next_prob_country[i] += prob_country[i] * (country_capacity[country[i]] / (country_capacity[country[i]] + country_capacity[country[j]])) * prob_country[j];			
 			}
 		}
 		for(var k = 0; k < 16; k++)
 		{
 			prob_country[k] = next_prob_country[k];
 		}
 	}

 	var count = 0;
 	for(; count < 16; count++)
 	{
 		if(country[count] == query_country)
 		{
 			break;
 		}
 	}

 	return prob_country[count];
 }