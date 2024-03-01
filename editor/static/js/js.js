// JavaScript code

document.addEventListener('DOMContentLoaded', function() {
    const fileList = document.getElementById('file-list');
    const addFileButton = document.getElementById('add-file-button');
    const htmlCodeTextarea = document.getElementById('html-code');
    const fileInput = document.getElementById('file-input');

    let currentFile = null;

    // Add File Button Event Listener
    addFileButton.addEventListener('click', function() {
        const fileName = prompt('Enter file name:');
        if (fileName) {
            const li = document.createElement('li');
            li.textContent = fileName;
            li.addEventListener('click', function() {
                currentFile = fileName;
                updateCodeTextarea();
            });
            fileList.appendChild(li);
        }
    });

    // File Input Event Listener
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const fileName = file.name;
            const li = document.createElement('li');
            li.textContent = fileName;
            li.addEventListener('click', function() {
                currentFile = fileName;
                updateCodeTextarea();
            });
            fileList.appendChild(li);
        }
    });

    // Update Code Textarea
    function updateCodeTextarea() {
        if (currentFile) {
            // You can load file content using AJAX, fetch, or other methods here
            // For now, let's assume you have a mapping of file content
            const fileContentMap = {

            };

            const fileContent = fileContentMap[currentFile];
            htmlCodeTextarea.value = fileContent || '';
        } else {
            htmlCodeTextarea.value = '';
        }
    }

    // Initial run when the page loads
    run();
});

// ... Your existing JavaScript code ...

document.addEventListener('DOMContentLoaded', function() {
    const fileList = document.getElementById('file-list');
    const addFileButton = document.getElementById('add-file-button');
    const htmlCodeTextarea = document.getElementById('html-code');
    const fileInput = document.getElementById('file-input');

    let currentFile = null;

    // ... Rest of your JavaScript code ...
    
    addFileButton.addEventListener('click', function() {
        const fileName = prompt('Enter file name:');
        if (fileName) {
            const li = document.createElement('li');
            li.textContent = fileName;
            li.addEventListener('click', function() {
                currentFile = fileName;
                updateCodeTextarea();
            });
            fileList.appendChild(li);
        }
    });

    // ... Your other functions ...
});
