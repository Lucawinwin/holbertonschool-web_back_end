function createInt8TypedArray(lenght, position, value) {
	const buffer = new ArrayBuffer(lenght);
	const dataView = new DataView(buffer)
	if (position < 0 || position >= lenght) {
		throw new Error ('Position outside range');
	}
	dataView.setInt8(position, value);
	return dataView;
}
export default createInt8TypedArray;
