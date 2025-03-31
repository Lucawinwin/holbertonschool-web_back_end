function updateUniqueItems(groceries) {
	if (!(groceries instanceof Map)) {
		throw new Error("Cannot process");
	}

	groceries.forEach((item, key) => {
		if (item.quantity ===1) {
		item.quantity = 100;
		}
	});
	return groceries;
}
