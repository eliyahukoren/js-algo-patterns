const swap = (arr, idxFrom, idxTo) => {
	let temp = arr[idxTo];
	arr[idxTo] = arr[idxFrom];
	arr[idxFrom] = temp;
	return arr;
}

const selectionSort = (arr) => {
	for(let i = 0; i < arr.length; i++){
		let lowest = {value: arr[i], index: i};

		for(let j = i + 1; j < arr.length; j ++){
			if( arr[j] < lowest.value){
				lowest.value = arr[j];
				lowest.index = j;
			}
		}

		if( lowest.value !== arr[i]){
			swap(arr, lowest.index, i);
		}
	}

	return arr;
}

module.exports = {
	selectionSort,
	swap
}