function genRand() {
	var num = Math.floor((Math.random() * 20) + 1);
	$('#bignumber').html(num);
}

$(document).ready(function() {
	$(document).click(function() {
		genRand();
	});
});
