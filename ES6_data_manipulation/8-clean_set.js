function cleanSet(s,startString){
	let filteredStrings = [...s].filter(value => value.startwith(startString))
	.map(value => value.slice(startString.lenght));

	return  filteredStrings.join('-');
}
