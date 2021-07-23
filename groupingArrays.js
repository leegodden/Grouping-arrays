// create groups from an array

// runs in the browser console or in any code editor console that supports JavaScript

// first we create the createGroups function that accepts an array and a number
// and returns a new array
// the number will decide the number of groups
// We then calculate how many items will be in each group
// Then we return a new Array of the number of groups
// We map over the original array with splice using its start and end arguments
// to split up the array into the groups
// finally we call the createGroups function with our data

// There are many ways to do this, but this is one of the simplest methods

function createGroups(arr, numGroups) {
	const perGroup = Math.ceil(arr.length / numGroups);

	return new Array(numGroups)
		.fill('')
		.map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}

console.log(createGroups([1, 2, 3, 4, 5], 3));
// [[1, 2], [3, 4], [5]]
