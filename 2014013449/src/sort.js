function InsertionSort(Arr) {
    for (var j = 1; j < Arr.length; j++) {
        var key = Arr[j];
        var i = j - 1;
        while (i >= 0 && Arr[i] > key) {
            Arr[i + 1] = Arr[i];
            i--;
        }
        Arr[i + 1] = key;
    }
}

function SelectionSort(Arr) {
    for (var i = 0; i < Arr.length - 1; i++) {
        for (var j = i + 1; j < Arr.length; j++) {
            if (Arr[j] < Arr[i]) {
                var temp = Arr[i];
                Arr[i] = Arr[j];
                Arr[j] = temp;
            }
        }
    }
}

function BubbleSort(Arr) {
    for (var i = Arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (Arr[j] > Arr[j + 1]) {
                var temp = Arr[j];
                Arr[j] = Arr[j + 1];
                Arr[j + 1] = temp;
            }
        }
    }
}