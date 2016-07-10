function sortInsert(array)
{ 
	var i, temp, p;

	for (i = 1; i < array.length; i++){

		temp = array[i];

		p = i - 1;

		while ((p >= 0) && (temp < array[p])){ 
			array[p + 1] = array[p];
			p--;
		}

		array[p + 1] = temp;
	}
	
	return(array);
}