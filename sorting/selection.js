const swap = (arr, idxFrom, idxTo) => {
	// use ES6 syntax to swap array
	[arr[idxFrom], arr[idxTo]] = [arr[idxTo], arr[idxFrom]]
}

const selectionSort = (arr) => {
	for(let i = 0; i < arr.length; i++){
		let lowest = i;

		for(let j = i + 1; j < arr.length; j ++){
			if( arr[j] < arr[lowest]) lowest = j
		}

		if( lowest !== i ) swap(arr, lowest, i)
	}

	return arr;
}

module.exports = {
	selectionSort,
	swap
}