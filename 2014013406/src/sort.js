(function() {
    function default_comp(a, b) {
        a = a.toString();
        b = b.toString();
        return a < b ? -1 : (a > b ? 1 : 0);
    }
    // NOTE: the same rule with Array.prototype.sort
    // For example:
    // To sort array of numbers, you have to call these functions like this -
    // arr.bubble_sort((a, b) => { return a - b; });
    Array.prototype.bubble_sort = function(cmp) {
        if (arguments.length < 1) {
            cmp = default_comp;
        }
        for (var i = 0; i < this.length; i++) {
            for (var j = i; j < this.length; j++) {
                if (cmp(this[i], this[j]) > 0) {
                    this[j] = [this[i], this[i] = this[j]][0];
                }
            }
        }
    };
    Array.prototype.insertion_sort = function(cmp) {
        if (arguments.length < 1) {
            cmp = default_comp;
        }
        var tmp;
        for (var i = 1; i < this.length; i++) {
            tmp = this[i];
            for (var j = i - 1; j >= 0 && cmp(tmp, this[j]) < 0; j--) {
                this[j + 1] = this[j];
            }
            this[j + 1] = tmp;
        }
    };
    Array.prototype.selection_sort = function(cmp) {
        if (arguments.length < 1) {
            cmp = default_comp;
        }
        var min;
        for (var i = 0; i < this.length - 1; i++) {
            min = i;
            for (var j = i + 1; j < this.length; j++) {
                if (cmp(this[j], this[min]) < 0) {
                    min = j;
                }
            }
            this[min] = [this[i], this[i] = this[min]][0];
        }
    };
})();
