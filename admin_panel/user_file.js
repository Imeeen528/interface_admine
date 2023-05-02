function getUserFiles() {
	// Get the user ID input value
	const userId = document.getElementById('user-id').value;
	// Fetch the user's files from the server
	fetch(`/user-files/${userId}`)
		.then(response => response.json())
		.then(data => {
			// Display the user's files
			displayFiles(data.files);
		})
		.catch(error => console.error(error));
}
