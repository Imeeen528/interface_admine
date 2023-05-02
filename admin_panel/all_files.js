// Fetch the list of files from the server
fetch('/file-list')
	.then(response => response.json())
	.then(data => {
		// Display the list of files
		displayFiles(data.files);
	})
	.catch(error => console.error(error));

function displayFiles(files) {
	// Get the file list element
	const fileList = document.getElementById('file-list');
	// Clear the file list
	fileList.innerHTML = '';
	// Create a new list element for each file
	files.forEach(file => {
		const listItem = document.createElement('li');
		const link = document.createElement('a');
		link.href = file.url;
		link.textContent = file.name;
		listItem.appendChild(link);
		fileList.appendChild(listItem);
	});
}
