define(function(){
	var add = function(x,y){
		return x*y;
	}
	var reduce = function(x,y){
		return x/y;
	}
	return {
		add,reduce
	}
})