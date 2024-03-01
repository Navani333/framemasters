document.addEventListener('DOMContentLoaded', function() {
  const fileList = document.getElementById('file-list');
  const addFileButton = document.getElementById('add-file-button');
  const htmlCodeTextarea = document.getElementById('html-code');
  const fileInput = document.getElementById('file-input');

  let currentFile = null;

  // ... Your other event listeners ...

  addFileButton.addEventListener('click', function() {
      // Automatically generate a unique file name
      const timestamp = new Date().getTime();
      const fileName = `file_${timestamp}.html`; // You can change the extension if needed
      
      // Create a new file list item
      const li = document.createElement('li');
      li.textContent = fileName;
      li.addEventListener('click', function() {
          currentFile = fileName;
          updateCodeTextarea();
          // Redirect to the create_file view with the file name parameter
          window.location.href = `/create_file/?file_name=${fileName}`;
      });
      fileList.appendChild(li);

      // Redirect to the create_file view with the file name parameter
      window.location.href = `/create_file/?file_name=${fileName}`;
  });

  // ... Your other functions ...
});



function run() {
  const htmlCode = document.getElementById("html-code").value;

  const outputContent = `
      <html>
      <head>
          <style>
              /* Include your CSS code here */
          </style>
      </head>
      <body>
          ${htmlCode}
      </body>
      </html>
  `;

  // Open a new popup window with the output content
  const popup = window.open("", "Output", "width=800,height=600");
  const popupDocument = popup.document;
  
  popupDocument.open();
  popupDocument.write(outputContent);
  popupDocument.close();
}

// Initial run when the page loads
run();
