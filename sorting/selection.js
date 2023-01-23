const swap = (arr, idxFrom, idxTo) => {
	let temp = arr[idxTo];
	arr[idxTo] = arr[idxFrom];
	arr[idxFrom] = temp;
	return arr;
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