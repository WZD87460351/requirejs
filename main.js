require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'math':'my'
	}
})

require(['jquery','math'],function($,math){
	$(document).ready(function(){
		$('.add').click(function(){
			var a = parseInt($('#a').val());
			var b = parseInt($('#b').val());
			alert(math.add(a,b))
		})
		$('.reduce').click(function(){
			var a = parseInt($('#a').val());
			var b = parseInt($('#b').val());
			alert(math.reduce(a,b))
		})
	})
})