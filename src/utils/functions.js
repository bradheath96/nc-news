
export const dateConverter = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
}

export const commentDateConverter = (dateString) => {
	const date = new Date(dateString);

	const day = date.getUTCDate().toString().padStart(2, "0"); 
	const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); 
	const year = date.getUTCFullYear().toString().slice(-2);

	return `${day}/${month}/${year}`;
};

