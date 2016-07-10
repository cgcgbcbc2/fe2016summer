function bubbleSort(numbers){
	for(var i =0; i< numbers.length-1;i++)
	{
		for(var j= i+1;j <numbers.length;j++)
			if(numbers[i]>numbers[j]){
				numbers[i]=numbers[i]+numbers[j];
				numbers[j]=numbers[i]-numbers[j];
				numbers[i]=numbers[i]-numbers[j];
			}
	}
}