const urls = {
  'url1': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vd2ViY29kZW0tbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9BY3Rpb25zJTIwU3R1ZmYlMjAxLjQubWNwYWNr',
  'url2': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMVB1dkpKX21DTlBfUXVlRmJLYWV2WWtsQXg1OURZUzNXP3VzcD1zaGFyaW5n',
  'url3': ['aHR0cHM6Ly9naXRodWIuY29tL3dlYmNvZGVtL3dlYmNvZGVtLW1lZGlhLmdpdGh1Yi5pby9yYXcvcmVmcy9oZWFkcy9tYWluL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9SZWFsaXNtQ3JhZnQubWN0ZW1wbGF0ZQ==', 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vd2ViY29kZW0tbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9SZWFsaXNtQ3JhZnQlMjBSZXNvdXJjZSUyMFBhY2subWNwYWNr'],
  'url4': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vd2ViY29kZW0tbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9SZWFsaXN0aWMgQmlvbWVzIEFkZC1Pbi5tY2FkZG9u',
  'url5': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhcmUgQm9uZSBQbHVzIFtCRVRBXS5tY3BhY2s',
};

// Updated function to handle multiple URLs
function decodeAndRedirect(event, urlKey) {
  event.preventDefault(); 
  
  const contentUrl = urls[urlKey];
  
  // Check if it's an array of URLs or a single URL
  if (Array.isArray(contentUrl)) {
    // Process each URL in the array with a small delay between downloads
    contentUrl.forEach((url, index) => {
      setTimeout(() => {
        downloadSingleFile(url);
      }, index * 500); // 500ms delay between downloads to avoid browser blocking
    });
  } else if (contentUrl) {
    // Process a single URL
    downloadSingleFile(contentUrl);
  }
}

// Helper function to download a single file
function downloadSingleFile(encodedUrl) {
  // Fix encoded URL if it has an extra 'a' at the beginning (as seen in url3)
  if (encodedUrl.startsWith('a') && encodedUrl.length % 4 === 1) {
    encodedUrl = encodedUrl.substring(1);
  }
  
  const decodedUrl = atob(encodedUrl);
  
  // Get filename from URL and decode URL-encoded characters
  let filename = decodedUrl.split('/').pop();
  filename = decodeURIComponent(filename); // This converts %20 to spaces and handles other URL-encoded characters
  
  // Create a hidden anchor and trigger download with the decoded filename
  const link = document.createElement('a');
  link.href = decodedUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Keep the original function for backward compatibility
function Download(event, urlKey) {
  decodeAndRedirect(event, urlKey);
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('overlay').style.display = 'none';
});
