
function countdown(callback) {
	window.setTimeout(callback, 2000)
}





function createMultiplier(multi){
	return function multiplier(num) { return num * multi}
}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)




function multiplierValue(num){
	return createMultiplier(multiplierValue)
}


function multiplier(a, b){
	return (a*b)
}

// function createMultiplierBonus(multiplierValue, value){}
	var doublerWithBind = multiplier.bind(null, 2)

	var triplerWithBind = multiplier.bind(null, 3)
