function bubblesort(ar) {
	for (var i = 0; i < ar.length - 1; i++) {
        for (var j = ar.length - 1; j > i; j--) {
            if (ar[j - 1] > ar[j]) {
                var c = ar[j];
                ar[j] = ar[j - 1];
                ar[j - 1] = c;
            }
        }    
    }
    return ar;
}

function selectsort(ar) {
    for (var i = 0; i < ar.length; i++) {
        minelement = ar[i];
        k = i;
        for (var j = i + 1; j < ar.length; j++) {
            if (minelement > ar[j]) {
                minelement = ar[j];
                k = j;
            }
        }
        ar[k] = ar[i];
        ar[i] = minelement;
    }
    return ar;
}

function insertsort(ar){
	for (var i = 1; i < ar.length; i++) {
		key = ar[i];
		var num = -1;
		for (var j = 0; j < i; j++) {
			if (ar[j] > key) {
				num = j;
				break;
			}
		}
		if (num == -1) {
			num = i;
		}
		for (var j = i; j > num; j--) {
			ar[j] = ar[j - 1];
		}
		ar[num] = key;
	}
	return ar;
}
