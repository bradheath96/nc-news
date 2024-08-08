
export const dateConverter = (dateString) => {
	const isoDate = new Date(dateString);
	const formattedDate = isoDate.toLocaleDateString("en-GB");
	return formattedDate
}


export const capitaliseFirstLetter = (string) => {
	return string[0].toUpperCase() + string.slice(1);
};


