//1
var func = {
	getNum: function(){return this.num},
	num:1
}

(function(){
	return typeof arguments[0]();
})(func.getNum);

//2
var x = 0;
function foo(){
	x++;
	this.x = x;
	return foo;
}

var bar = new new foo;
console.log(bar.x);

//3
function bar(){
	return foo;
	foo = 10;
	function foo(){}
	var foo = '11';
}

alert(typeof bar());

//4
var x =3;

var foo={
	x:2,
	baz:{
		x:1,
		bar: function(){
			return this.x;
		}
	}
}

var go = foo.baz.bar;

console.log(go());
console.log(foo.baz.bar());

//5
function aaa(){
	return
	{
		test:1
	};
}

alert(typeof aaa());
